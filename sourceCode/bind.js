// function myBind(a){
//    let self = this
//     return fn
// }

Function.prototype.myBindEasy = function(obj){
    // console.log(this);
    // console.log(Object.prototype.toString.call(this));
    if (Object.prototype.toString.call(this)!== '[object Function]') {
        throw new Error('myBindEasy Error:')
    }
    const self = this
    const arrs = Array.prototype.slice.call(arguments,1)
    function fn(){
        return self.apply(obj,[...arrs,...arguments])
    }
    return fn
}
Function.prototype.myBind = function(obj){
    const self = this
    const arrs = Array.prototype.slice.call(arguments,1)
    function fn(){
        // console.log(this);
        return self.apply(this instanceof fn?this:obj,[...arrs,...arguments])
    }
    fn.prototype = Object.create(self.prototype)
    return fn
}


var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
    this.habit = 'shopping';
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.myBindEasy(foo, 'daisy');
var bind2Foo = bar.myBind(foo, 'daisy');
// foo.myBindEasy()
bindFoo('18');
bind2Foo('18')
var obj = new bind2Foo('18');
console.log(obj.habit);
console.log(obj.friend);