const React = require("react");
const ReactDom = require("react-dom");

import Tetris from './Tetris'
import { ROW, TD_SIZE } from './env';

const $root = document.querySelector('#root');

$root.style.height = ROW * TD_SIZE ;

ReactDom.render(<Tetris/>, $root);