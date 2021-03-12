(function() {
  var ContinueSentinel = {};

  var mark = function(genFun) {
    var generator = Object.create({
      next: function(arg) {
        return this._invoke("next", arg);
      }
    });
    genFun.prototype = generator;
    return genFun;
  };

  function wrap(innerFn, outerFn, self) {
    var generator = Object.create(outerFn.prototype);

    var context = {
      done: false,
      method: "next",
      next: 0,
      prev: 0,
      abrupt: function(type, arg) {
        var record = {};
        record.type = type;
        record.arg = arg;

        return this.complete(record);
      },
      complete: function(record, afterLoc) {
        if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        }

        return ContinueSentinel;
      },
      stop: function() {
        this.done = true;
        return this.rval;
      }
    };

    generator._invoke = makeInvokeMethod(innerFn, context,self);

    return generator;
  }

  function makeInvokeMethod(innerFn, context,self) {
    var state = "start";

    return function invoke(method, arg) {
      if (state === "completed") {
        return { value: undefined, done: true };
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        state = "executing";

        var record = {
          type: "normal",
          arg: innerFn.call(self, context)
        };

        if (record.type === "normal") {
          state = context.done ? "completed" : "yield";

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        }
      }
    };
  }

  global.regeneratorRuntime = {};

  regeneratorRuntime.wrap = wrap;
  regeneratorRuntime.mark = mark;
})();

var _marked = regeneratorRuntime.mark(helloWorldGenerator);

function helloWorldGenerator() {
  return regeneratorRuntime.wrap(
    function helloWorldGenerator$(_context) {
      while (1) {
        // 这一步可能只是单纯的为了存储上一步,因为直接判断_context.next也是一样的
        // switch (_context.next) {
        switch ((_context.prev = _context.next)) {
         
          case 0:
            _context.next = 2;
            return "hello";

          case 2:
            _context.next = 4;
            return "world";

          case 4:
            return _context.abrupt("return", "ending");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked,
    this
  );
}

var hw = helloWorldGenerator();

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// 作者：冴羽
// 链接：https://juejin.cn/post/6844903701908291592


function generatorTest(){
  return wrapTest($generatorTest)
}
function $generatorTest(_context){
  console.log(_context.next);
  switch(_context.next){
    case 'start': 
      _context.next = 2
      return 'yield 1'
    case 2: 
      _context.next = 4
      return 'yield 2' 
    case 4:
      _context.next = 'end'
      return 'yield 3' 
    case 'end':
      return _context.stop();
  }
}

function wrapTest(func){
  let context = {
    done:false,
    next:'start',
    stop(){
      this.done = true
    }
  }

  var generator = Object.create({
    next: function() {
      if (!context.done) {
        // console.log(func(context));
        const value = func(context)
        return {
          value: value,
          done: context.done
        };
      }
    }
  });
  return generator
}

let myGenerator = generatorTest()

console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());