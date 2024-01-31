# Motion

## 📌 계획

### 1. 어떤 기능들이 있는지 정의

- 추상적이지 않고 정확하게 나열
- 여러가지 단계별 마일스톤을 설정

### 2. 페르소나 설정

- 사용자는 누구인가?
- 어떤 기능을 사용할 것인가?
- 의도는 무엇인가?

#### Mush have

- 이미지 등록 기능
- 비디오 등록 기능
- 노트 등록 기능
- 할일 등록 기능
- 삭제 기능

#### Good to have

- 드로그앤 드롭 기능

#### Nice to have

- 추가된 기능을 변경할 수 있는 기능

---

## 🚀 기능 요구 사항

- [ ] 클래스를 사용한다.

#### 초기세팅 기능

- [x] index.html 연결한다.
- [x] reset style 적용한다.
- [x] TS → JS 설정한다. (`dist` 폴더에 컴파일)
- [x] 프로그램 실행의 시작점은 `app.ts`에서 프로그램을 실행시킬 수 있어야 한다.

### 1. UI 구현

- [x] Header, document, footer 구조로 구성한다.
- [x] Header에는 타이틀, 버튼 (이미지 , 비디오, 노트, 할일 등록버튼)
- [x] 레이아웃 스타일링 한다.

> document는 section 단위로 동적으로 생성한다.

<img src="./assets/component_constructor.png" />

### 2. 컴포넌트 구현 기능

- [x] page 컴포넌트를 생성한다. `HTMLElement`를 생성하고 필요한 API를 구현한다.
- [x] app 클래스에 연결한다.
- [x] Item을 담는 page 컨테이너 컴포넌트를 생성한다.

#### page 컴포넌트 안의 Item 컴포넌트 구현 기능

- [x] 공통 컴포넌트를 생성한다.

  - [x] element 멤버필드
  - [x] attachTo 멤버함수

- [x] image 컴포넌트를 생성한다.
- [x] note 컴포넌트를 생성한다.
- [x] todo 컴포넌트를 생성한다.
- [x] video 컴포넌트를 생성한다.
  - [x] 유튜브 url 생성 함수를 구현한다.

### 3. 컨트롤 패널 기능

##### 이미지 등록 기능

- [ ] 버튼 클릭 시, 타이틀, URL을 등록하는 모달창 생성한다.
- [ ] 등록 버튼 클릭 시, document에 이미지 등록한다.

##### 비디오 등록 기능

- [ ] 버튼 클릭 시, 타이틀, URL을 등록하는 모달창 생성한다.
- [ ] 등록 버튼 클릭 시, document에 이미지 등록한다.

##### 노트 등록 기능

- [ ] 버튼 클릭 시, 타이틀, 바디를 등록하는 모달창 생성한다.
- [ ] 등록 버튼 클릭 시, document에 이미지 등록한다.

##### 할일 등록 기능

- [ ] 버튼 클릭 시, 타이틀, 바디를 등록하는 모달창 생성한다.
- [ ] 등록 버튼 클릭 시, document에 이미지 등록한다.

##### 추가 기능

- [ ] 드로그앤 드롭 기능 구현한다.
- [ ] 삭제 기능 구현한다.

---

## ✅ 정리

- `App`: 어플리케이션 전체를 가지고 있는 제일 큰 컨테이너 클래스
- `PageComponent`: 사용자가 추가하는 문서를 담을수 있는 페이지 컨테이너 컴포넌트 클래스
- `ImageComponent`: 사용자가 추가할 수 있는 문서중 하나의 타입으로, 이미지 노트

<br>

> 컴포넌트라면 기본적으로 가지고 있을수 있는 속성과 행동들이 중복적으로 담겨져 있다.

1.  문자열 태그로 부터 HTMLElement를 동적으로 생성함 element

2.  자기 자신을 다른 부모 컨테이너에추가 할 수 있는 attachTo

이 중복되는 속성과 행동들을 컴포넌트의 공통적인 클래스 `BaseComponent`

<br>

##### 왜 PageItemCoponent가 필요할까?

- 각각의 컴포넌트들 안에 boolean과 같은 것을 인자로 전달해서 if-else와 같은 번잡한 로직을 통해서 어떨때는 닫힘 버튼을 보여주고 어떨떄는 보여주지 않고를 작성해야함
- 그래서 실제의 보여지는 컨텐츠와 (Note, Image, Video. Todo..) 그리고 그것을 감싸서 꾸며주는 (닫힘 버튼이 추가된) `PageItemComponent` 같은 클래스를 만듬

##### Composable 인터페이스는 왜 필요해요?

- 커플링 (coupling)을 낮추기 위해서
  클래스들 간에 서로 지나치게 밀접하게 연관되어져 있으면 (커플링이 심하게 되어 있으면) 유지보수성, 확정성이 떨어진다

<br>

```mermaid
classDiagram
  class Component {
    <<interface>>
    + attachTo(parent: HTMLElement, position?: InsertPosition): void
  }

  class App {
    - page: PageComponent
    + constructor(appRoot: HTMLElement)
  }

  class BaseComponent {
    - element: T
    + constructor(htmlString: string)
    + attachTo(parent: HTMLElement, position?: InsertPosition): void
  }

  class Composable {
    <<interface>>
    + addChild(child: Component): void
  }

  class PageComponent {
    + constructor()
    + addChild(section: Component): void
  }

  class PageItemComponent {
    + constructor()
    + addChild(child: Component): void
  }

  class ImageComponent {
    - title: string
    - url: string
    + constructor(title: string, url: string)
  }

  class NoteComponent {
    - title: string
    - body: string
    + constructor(title: string, body: string)
  }

  class TodoComponent {
    - title: string
    - body: string
    + constructor(title: string, body: string)
  }

  class VideoComponent {
    - title: string
    - url: string
    + constructor(title: string, url: string)
    + convertToEmbeddedURL(url: string): string
  }

  Component <|.. BaseComponent
  BaseComponent <|-- ImageComponent
  BaseComponent <|-- NoteComponent
  BaseComponent <|-- TodoComponent
  BaseComponent <|-- VideoComponent
  BaseComponent <|-- PageComponent
  BaseComponent <|-- PageItemComponent

  Composable <|.. PageComponent
  Composable <|.. PageItemComponent

```
