import style from './index.css';
import imgSrc from '@/assets/img.png';
import $ from 'jquery';
function comp() {
    const el = document.createElement('div');
    el.innerHTML = '<i>hello, world</i>';
    console.log(style);
    return el;
}

console.log([1,2,3].findIndex(x => x === 4))
console.log('abc'.padStart(10))

document.body.appendChild(comp());

console.log($);
