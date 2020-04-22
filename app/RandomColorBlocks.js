export class RandomColorBlock {
    constructor() {
        this.html = `<div class="random-color-container">
        <div class="random-color-blocks">
        </div>
        <div class="random-color-btn"><span>Add block</span></div>
    </div>`;
        this.container;
        this.blocks;
        this.btn;
    }

    getContent(block) {
        block.innerHTML = this.html;
        this.container = document.querySelector('.random-color-container');
        this.blocks = document.querySelector('.random-color-blocks');
        this.btn = document.querySelector('.random-color-btn');
        this.btn.addEventListener('click', this.factory.bind(this))
        this.factory();
        return;
    }

    deleteBlock(ev) {
        this.blocks.removeChild(ev.target);
    }

    factory() {
        let num = this.random(5, 17);
        for (let i = 0; i < num; i++) {
            let block = document.createElement('div');
            block.style.backgroundColor = `rgb(${this.random(0,255)},${this.random(0,255)},${this.random(0,255)})`;
            block.classList.add('random-color-block');
            block.addEventListener('click', this.deleteBlock.bind(this));
            this.blocks.appendChild(block);
        }
    }

    random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}