const React = require("react");
const ReactDom = require("react-dom");

import Tetris from './Tetris'
import { row } from './reducers/index';

const $root = document.querySelector('#root');

$root.style.height = row * 40 ;

ReactDom.render(<Tetris />, $root);