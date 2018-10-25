// index.js
import './styles.css';

const _ = require("lodash");

console.log(__dirname)

function component() {
    let element = document.createElement('div');
    return element;
   }
document.body.appendChild(component());