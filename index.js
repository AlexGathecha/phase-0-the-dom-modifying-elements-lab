// Write your code here!
// Remove the <main> element with id 'main'
const mainElement = document.getElementById("main");
mainElement.remove();

// Create a new <h1> element and set its id to 'victory'
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Set the text content of the new <h1> element
newHeader.textContent = "John is the champion";

// Append the new <h1> element to the body
document.body.append(newHeader);
