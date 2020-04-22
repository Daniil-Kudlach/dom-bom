export class NumberInput {
    constructor() {
        this.count = 0;
        this.html = `<div class="num-input-container">
        <div class="num-input-number-block"><span></span></div>
        <div class="num-input-btn-container">
            <div class="num-input-btn-up"><span>&#8679;</span></div>
            <div class="num-input-btn-down"><span>&#8681;</span></div>
        </div>
        </div>`;
        this.btnUp;
        this.btnDown;
        this.numBlock;
        this.up = 'up';
        this.down = 'down';
    }

    clickHandler(ev) {
        let value = ev.target.dataset.value;
        value === undefined ? value = ev.target.parentNode.dataset.value : 0;
        if (value == this.up) {
            this.numBlock.innerHTML = ++this.count;
        }
        if (value == this.down) {
            this.numBlock.innerHTML = --this.count;
        }
    }

    getContent(block) {
        block.innerHTML = this.html;
        this.btnUp = document.querySelector('.num-input-btn-up');
        this.btnDown = document.querySelector('.num-input-btn-down');
        this.btnDown.dataset.value = this.down;
        this.btnUp.dataset.value = this.up;
        this.numBlock = document.querySelector('.num-input-number-block>span');
        this.numBlock.innerHTML = this.count;
        this.btnUp.addEventListener('click', this.clickHandler.bind(this));
        this.btnDown.addEventListener('click', this.clickHandler.bind(this));
        return;
    }
}