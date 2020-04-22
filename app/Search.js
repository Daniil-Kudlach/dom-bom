export class Search {
    constructor() {
        this.html = `<div class="search-container">
        <div class="search-container-block">
        <input type="text" placeholder="Search..." name="search-input-text" class="search-input-text">
        <div class='search-list-block'>
        <ul class="search-list-ul"></ul>
        </div>
        </div>
        </div>`
        this.data;
        this.input;
        this.list;
    }
    async getContent(block) {
        this.data = [...await fetch(
                'https://parseapi.back4app.com/classes/Country?count=1&limit=250&order=name', {
                    headers: {
                        'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja',
                        'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH',
                    }
                })
            .then(response => response.json())
            .then(data => {
                return data.results;
            })
        ]
        this.writeContent(block);
        return;
    }

    writeContent(block) {
        console.log(this.data)
        block.innerHTML = this.html;
        this.input = document.querySelector('.search-input-text');
        this.input.addEventListener('input', this.searchCountry.bind(this));
        this.list = document.querySelector('.search-list-ul');
    }

    filter(v) {
        let reg = new RegExp('^' + v, 'i');
        let data = this.data.filter(el => reg.test(el.name));
        data.length > 0 ? this.showList(data) : this.list.innerHTML = '';
    }

    showList(c) {
        this.list.innerHTML = '';
        c.map(el => {
            let li = document.createElement('li');
            li.textContent = `${el.emoji} ${el.name}`;
            li.dataset.id = el.objectId;
            this.list.appendChild(li);
        });
    }

    searchCountry(ev) {
        let val = ev.target.value;
        this.list.innerHTML = '';
        if (val.trim() != '') {
            this.filter(ev.target.value);
        }
        return;
    }

}