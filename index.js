const unitLeft = document.querySelector(".unit-left");
const leftInput = document.querySelector(".left-input");
const unitRight = document.querySelector(".unit-right");
const rightInput = document.querySelector(".right-input");
console.log(unitRight.selectedIndex);
console.log(unitLeft.selectedIndex);

const leftConverter = () => {
  if (unitLeft.selectedIndex === 0 && unitRight.selectedIndex === 1) {
    rightInput.value = (leftInput.value * 9) / 5 + 32;
  } else if (unitLeft.selectedIndex === 0 && unitRight.selectedIndex === 2) {
    rightInput.value =   273.15 + + leftInput.value;
  } else if (unitLeft.selectedIndex === 1 && unitRight.selectedIndex === 0) {
    rightInput.value = ((leftInput.value - 32) * 5) / 9;
  } else if (unitLeft.selectedIndex === 1 && unitRight.selectedIndex === 2) {
    rightInput.value = ((leftInput.value - 32) * 5) / 9 + 273.15;
  } else if (unitLeft.selectedIndex === 2 && unitRight.selectedIndex === 0) {
    rightInput.value = leftInput.value - 237.15;
  } else if (unitLeft.selectedIndex === 2 && unitRight.selectedIndex === 1) {
    rightInput.value = (leftInput.value - 273.15) * 9/5 + 32;
  }
  else {
    rightInput.value = leftInput.value;
  }
};

// const rightConverter = () => {
//   if (unitLeft.selectedIndex === 0 && unitRight.selectedIndex === 1) {
//     leftInput.value = ((rightInput.value - 32) * 5) / 9;
//   } else if (unitLeft.selectedIndex === 2 && unitRight.selectedIndex === 0) {
//     leftInput.value = 273.15 + +rightInput.value;
//   }
// };

leftInput.addEventListener("input", leftConverter);
unitRight.addEventListener("input", leftConverter);
// rightInput.addEventListener("input", leftConverter);
unitLeft.addEventListener("input", leftConverter);

// unitLeft.addEventListener("change", converter);
// unitLeft.addEventListener("change", converter);
