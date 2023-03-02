/**
 * @desc : form 프로퍼티와 메서드 23.03.02
 * ❓form을 왜 사용할까?
 * - <form> 태그는 사용자 입력을 받고, 이를 서버 측으로 전송하는 데 사용되는 중요한 HTML 요소입니다.
 *
 * form 탐색하기
 * - document.forms[name/index]로 폼에 접근할 수 있습니다.
 *
 * element.form
 * - 요소는 form 프로퍼티에서 자신이 속한 폼을 참조합니다.
 *
 * @실습
 * 1. 선택한 옵션의 값과 텍스트를 표시하세요.
 * 2. <option value="classic">Classic</option>라는 옵션을 추가하세요.
 * 3. 추가한 옵션을 선택하세요.
 */

const genres = document.querySelector("#genres");

// 1.
let selectedOption = genres?.options[genres.selectedIndex];
alert(selectedOption.value);

// 2.
let newOption = new Option("Classic", "classic");
genres?.append(newOption);

// 3.
newOption.selected = true;
