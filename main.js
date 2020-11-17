const accordionWrapper = document.querySelector('.accordion-wrapper');

let accordions;

const contentData = [{
        id: 1,
        title: 'Title_1',
        content: 'Text_1'
    },
    {
        id: 2,
        title: 'Title_2',
        content: 'Text_2'
    },
    {
        id: 3,
        title: 'Title_3',
        content: 'Text_3'
    },
    {
        id: 4,
        title: 'Title_4',
        content: 'Text_4'
    },
    {
        id: 5,
        title: 'Title_5',
        content: 'Text_5'
    },
    {
        id: 6,
        title: 'Title_6',
        content: 'Text_6'
    },
    {
        id: 7,
        title: 'Title_7',
        content: 'Text_7'
    },
];

const createTemplate = item => {
    return `
        <div class="accordion-item">
            <div class="accordion-item-title">${item.title}</div>
            <div class="accordion-item-content">${item.content}</div>
        </div>
        `;
}

const fillHtmlList = () => {
    contentData.forEach(item => {
        accordionWrapper.innerHTML += createTemplate(item);
    });
    accordions = document.querySelectorAll('.accordion-item')
}
fillHtmlList();

for (item of accordions) {
    item.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            for (i of accordions) {
                i.classList.remove('active')
            }
            this.classList.add('active')
        }
    });
}