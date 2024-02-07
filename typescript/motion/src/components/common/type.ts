/**
 * 드래그가 시작하고 멈출 때 알림을 받기 위해 드래그 가능한 컴포넌트가 구현해야하는 콜백의 집합
 */
export interface Draggable {
  // 드래그가 시작하면 아이템이 반응
  onDragStart(event: DragEvent): void;
  // 드래그가 끝나면 아이템이 반응
  onDragEnd(event: DragEvent): void;
}

/**
 * 드래그 호버를 듣는 아이템이 알림을 받기 위해 구현해야하는 콜백의 집합
 */
export interface Hoverable {
  // 드래그된 아이템이 영역에 들어가면 알림
  onDragEnter(event: DragEvent): void;
  // 드래그된 아이템이 영역을 떠나면 알림
  onDragLeave(event: DragEvent): void;
}

/**
 * 드래그된 아이템을 드롭할 때 컴포넌트가 구현해야하는 콜백의 집합
 */
export interface Droppable {
  // 드래그 가능한 아이템이 호스트 위젯 위에 놓일 때 어떻게 처리할지를 담당하는 메소드
  onDragOver(event: DragEvent): void;
  // 드래그 가능한 아이템이 호스트 위젯 위에 놓일 때 어떻게 처리할지를 담당하는 메소드
  onDrop(event: DragEvent): void;
}
