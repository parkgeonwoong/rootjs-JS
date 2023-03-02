/**
 * 1. 선택한 옵션의 값과 텍스트를 표시하세요.
 * 2. <option value="classic">Classic</option>라는 옵션을 추가하세요.
 * 3. 추가한 옵션을 선택하세요.
 */

const genres = document.querySelector("#genres") as HTMLSelectElement;

// 1.
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

// 2.
let newOption = new Option("Classic", "classic");
genres.append(newOption);

// 3.
newOption.selected = true;
