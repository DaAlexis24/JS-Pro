"use strict";
/*eslint-disable */
{
    function identity(value) {
        return value;
    }
    let foo = 'Hola mundo';
    console.log(identity(foo));
    let n = 22;
    let r = identity(n);
    console.log(r);
    identity({ name: 'Pepe', age: 22 });
}
{
    async function getData() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const r = await fetch(url);
        return r.json();
    }
    async function main() {
        const data = await getData();
        console.log(data[0]);
    }
}
{
    class Box {
        content;
        constructor(content) {
            this.content = content;
        }
        getContent() {
            return this.content;
        }
    }
    const numberBox = new Box(123);
    const stringBox = new Box('Aloh');
    console.log(numberBox.getContent());
    console.log(stringBox.getContent());
}
{
}
