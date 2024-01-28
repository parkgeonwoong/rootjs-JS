import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
                <div class="video__player"><iframe class="video__iframe"></iframe>
                <h3 class="video__title"></h3>
                </div>
                </section>`);

    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    console.log(url);
    // TODO: iframe url 만들기
    iframe.src =
      'https://www.youtube.com/embed/9MPzEwZrRqo?list=PLXvgR_grOs1BFH-TuqFsfHqbh-gpMbFoy';

    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe width="1024" height="576" src="https://www.youtube.com/embed/9MPzEwZrRqo?list=PLXvgR_grOs1BFH-TuqFsfHqbh-gpMbFoy" title="IP헤더 형식과 의미 요약" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
