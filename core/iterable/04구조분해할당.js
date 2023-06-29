const prop = {
  name: "Button",
  style: {
    size: 20,
    color: "black",
  },
};

const { name, style } = prop;
console.log(name, style);

// 객체 구조분해할당
const display = ({ name: tag, style, padding = "20px" }) => {
  console.log(tag);
  console.log(style.size);
  console.log(padding);
};
display(prop);

// 중첩 구조분해할당
const changeColor = ({ style: { color } }) => {
  console.log(color);
};
changeColor(prop);
