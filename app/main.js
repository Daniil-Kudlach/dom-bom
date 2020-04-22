import {
    NumberInput
} from "./NumberInput.js";
import {
    ColorPicker
} from "./ColorPicker.js";
import {
    RandomColorBlock
} from "./RandomColorBlocks.js";
import {
    Comment
} from "./Comment.js";
import {
    Search
} from "./Search.js";

const dom = {
    numInp: document.querySelector('.block-input'),
    cPicker: document.querySelector('.block-color-picker'),
    rColBlock: document.querySelector('.block-rand-color-block'),
    comment: document.querySelector('.block-comment'),
    search: document.querySelector('.block-search'),
}

const objs = {
    numInp: new NumberInput(),
    cPicker: new ColorPicker(),
    rColBlock: new RandomColorBlock(),
    comment: new Comment(),
    search: new Search(),
}

for (let key in dom) {
    objs[key].getContent(dom[key]);
}