데이터가 변경될 때 실행되는 다양한 이벤트를 정리해봅시다.

<br>

| 이벤트           | 설명                                         | 특이사항                                                                                                                                 |
| ---------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| change           | 값이 변경될 때 이벤트 발생                   | 텍스트 입력의 경우 포커스를 잃을 때 실행                                                                                                 |
| input            | 텍스트가 입력될 때마다 이벤트 발생           | change와 달리 즉시 실행                                                                                                                  |
| cut, copy, paste | 잘라내기·복사하기·붙여넣기 할 때 이벤트 발생 | 브라우저 기본 동작을 막아 이벤트 실행을 막을 수 있음. event.clipboardData 프로퍼티를 사용하면 클립보드에 저장된 데이터를 읽고 쓸 수 있음 |

<br>
