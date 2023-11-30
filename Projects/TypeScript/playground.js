var obj = {
    foo: 'bar',
    hello: 'world',
};
function get(obj, path) {
    return obj[path];
}
var val = get(obj, 'foo');
obj.foo;
console.log('hello world');
