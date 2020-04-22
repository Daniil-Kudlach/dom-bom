export class Comment {
    constructor() {
        this.html = `<div class="comments-container">
        <div class="comments-block-publication">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus, omnis molestias vitae aperiam voluptatibus
        mollitia consequuntur laborum? Quos, ducimus, quidem voluptate dignissimos obcaecati eligendi exercitationem vitae
        consequatur facere perspiciatis modi adipisci dolor ab, hic aspernatur voluptas reiciendis tempore. Totam temporibus
        nesciunt ad culpa praesentium commodi iusto blanditiis numquam eaque, suscipit laboriosam dicta asperiores! Sed, esse
        voluptates! Rerum facere qui perferendis quae ipsa consequatur unde. Distinctio quis voluptatibus laborum alias nesciunt
        iusto cum beatae. Reprehenderit harum perspiciatis id illum, laudantium deleniti blanditiis, optio vitae fugit dolorum
        amet accusamus dolorem nihil consequuntur voluptas ipsa et sapiente qui doloribus? Omnis, quisquam repellat!</div>
        <div class="comments-block-comments"></div>
        <h4>Leave your comment</h4>
        <label for="comments-name">
            <span>Name:</span>
            <input type="text" name="comments-name" id="comments-name" class="comments-input-name">
        </label>
        <span>Comment:</span>
        <label for="comments-text">
            <textarea name="comments-text" id="comments-text" class="comments-textarea-text"></textarea>
        </label>
        <div class="comments-btn"><span>Add comment</span></div>
    </div>`;
        this.inputName;
        this.inputText;
        this.comments;
        this.button;
    }

    addComment() {
        let name = this.inputName.value.trim().length > 0 ? this.inputName.value : 'Anonimus';
        let text = this.inputText.value;
        let time = new Date();
        if (text.trim().length > 0) {
            this.comments.innerHTML += `<div class="comments-comment">
            <div><b>${name}</b></div>
            <div><small>${time.toLocaleString()}</small></div>
            <p class="comments-comment-text">${text}</p>
        </div>`;
            this.inputText.value = '';
        }
        return;
    }

    getContent(block) {
        block.innerHTML = this.html;
        this.inputName = document.querySelector('.comments-input-name');
        this.inputText = document.querySelector('.comments-textarea-text');
        this.comments = document.querySelector('.comments-block-comments');
        this.button = document.querySelector('.comments-btn');
        this.button.addEventListener('click', this.addComment.bind(this));
        return;
    }
}