// function fn1() {
//     console.log(111);
//     fn2();
//     console.log('fn1');
//     }
//     function fn2() {
//     console.log(222);
//     console.log('fn2');
//     } 
    
//     console.log(fn1());

function Star(name, age,sang) {
    this.name = name;
    this.age = age;
    this.sing = function(sang) {
        console.log(sang);
    }
}

var ldh = new Star('liudehua', 38,'sdfs');
ldh.sing = ('wanqingshui');
console.log(ldh);
console.log(ldh.sing);