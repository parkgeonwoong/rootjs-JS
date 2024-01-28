import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
                <div class="video__player"><iframe class="video__iframe"></iframe>
                <h3 class="video__title"></h3>
                </div>
                </section>`);
        const iframe = this.element.querySelector('.video__iframe');
        console.log(url);
        iframe.src =
            'https://www.youtube.com/embed/9MPzEwZrRqo?list=PLXvgR_grOs1BFH-TuqFsfHqbh-gpMbFoy';
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
}
