export class ColorPicker {
    constructor() {
        this.html = `<div class="color-picker-container">
        <div class="color-picker-blocks">
        </div>
    <div class="color-picker-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquid eaque nostrum minima similique laudantium ut quos
    magnam error incidunt, voluptatum blanditiis deserunt nemo unde maxime porro quia totam temporibus, accusamus, ratione
    necessitatibus. Cupiditate similique distinctio neque mollitia explicabo quam optio quos porro quisquam eveniet ea,
    fuga, suscipit repellendus! Rerum illum ea ad, delectus sequi alias doloribus, eos aperiam itaque totam accusantium quae
    necessitatibus earum dolore veritatis eum quos eligendi modi quam praesentium in dolorem placeat maiores? Cumque alias
    dolorem fuga nesciunt magni voluptates molestiae voluptatum provident! Vero totam delectus deserunt ullam voluptates
    iste, mollitia, magnam illo possimus non corrupti!</p></div>
    </div>`;
        this.blocks;
        this.text;
        this.colors = this.colorMaker();
    }
    fabric() {
        this.colors.map((e) => {
            let color = document.createElement('div');
            color.classList.add('color-picker-color');
            color.addEventListener('click', this.colorClick.bind(this));
            color.style.backgroundColor = e;
            color.dataset.color = e;
            this.blocks.appendChild(color);
        });
    }

    colorMaker() {
        let colors = [];
        for (let i = 0; i < 255; i += 50) {
            for (let j = 0; j < 255; j += 50) {
                for (let k = 0; k < 255; k += 50) {
                    colors.push(`rgb(${k}, ${j}, ${i})`);
                }
            }
        }
        return colors;
    }

    colorClick(ev) {
        this.text.style.color = ev.target.dataset.color;
    }

    getContent(block) {
        block.innerHTML = this.html;
        this.blocks = document.querySelector('.color-picker-blocks');
        this.text = document.querySelector('.color-picker-text');
        this.fabric();
        return;
    }
}