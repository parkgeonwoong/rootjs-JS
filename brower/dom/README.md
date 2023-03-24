## DOM

브라우저는 HTML Tag 읽어서 ---- DOM Tree 생성 ---> JS Node로 만듬 (document, element ...)

EventTarget → Node → Element → HTMLElement → HTMLInputElement
(모든 노드는 이벤트가 발생할 수 있음)

<br>

✅ DOM → 브라우저가 읽을 수 있도록 Object 트리로 만들어 나가는 것

<br>

## CSSOM

DOM + CSS = CSSOM

- 구성된 DOM 트리에다가 CSS을 입힌다.

- cascade가 적용이 되어있다.

<br>

Render Tree = DOM + CSSOM

<br>

## 렌더링 과정

브라우저에서 url을 입력하면

request/response(HTML) → loading → scripting(DOM 생성, CSSOM 생성) → Render Tree 생성 → layout → painting → composite

\- 레이아웃은 말그대로 이 정도 위치에 지정.

\- painting은 (비트맵으로) 레이어별(층)로 준비하는 것이다.

- 왜? 그려놓지 않는가? → 성능개선 및 레이아웃 변경시 다시 그리는 것을 방지하기 위해

그렇다면 layout 바뀌는 것이 성능에 최악이다. → layout > painting > composite
(이에 따른 참고 https://www.lmame-geek.com/css-triggers/)

<br>

## DOM 요소 조작

|           이름            |                설명                |
| :-----------------------: | :--------------------------------: |
| document.createElement()  |          새로운 요소 생성          |
|  Element.setAttribute()   |             속성 추가              |
|     Element.append()      |  요소의 마지막 자식으로 요소 추가  |
|    Node.removeChild()     |       요소의 자식 요소 제거        |
| Node.textContent = 'text' |      요소의 텍스트 내용 설정       |
|    Node.insertBefore()    |     요소를 특정 요소 앞에 추가     |
|     Element.innerHTML     | 전체적인 요소의 내용을 HTML로 설정 |
