// README:
// TODO:
// 1. Select HTML elements with specific IDs to interact with them.
// 2. Create variables to store these elements and the count value.

// HOW:
// 1. Create a variable 'counting' to store the element with the ID 'counting', which is an <h2> tag.
// 2. Create a variable 'saved' to store the element with the ID 'saved', which is a <p> tag.
// 3. Create a variable 'count' to store the number of times the button has been clicked, starting at 0.

let counting = document.getElementById("counting");
let index = document.getElementById("index");
let subTotal = document.getElementById("subTotal");
let count = 0;
let total = 0;

index.textContent = count;
subTotal.textContent = total;

// LOGIC: addition button to update the <h2> tag with the new added value
function addition() {
  count += 1; // MEANS: count = count + 1
  counting.textContent = count;
}

// LOGIC: subtract button to update the <h2> tag with subtracting the count by one
function subtract() {
  if (count >= 1) {
    count -= 1;
    counting.textContent = count;
  } else {
    counting.textContent = 0;
  }
}

// LOGIC: Save button to save the current count in the <p> tags, calculate subTotal and reset the counter
function save() {
  let newIncrement = " _ " + count;
  index.textContent += newIncrement;
  // MEANS: index.innerText = index.innerText + newIncrement

  //INFO: to calculate total entries
  total += count; // MEANS: total = total + count
  subTotal.textContent = total;

  //INFO: to reset counter in <h2> tag after saving
  count = 0;
  counting.textContent = count;
}
