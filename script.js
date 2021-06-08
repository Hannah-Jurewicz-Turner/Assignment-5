// connects the first button with the 'area of a circle' function
let intRadius = 0

document.getElementById('button-one').addEventListener('click', calculateAreaOfCircle)

function calculateAreaOfCircle () {
  // allows text to appear with the area value when user inputs the radius and clicks the button
  intRadius = parseInt(document.getElementById('input').value)
  intRadius = intRadius ** 2
  intRadius = intRadius * 3.14159265359
  document.getElementById('answer').innerHTML = 'The area of the circle is ' + intRadius
}

// connects the second button to the function 'calculate circumference of circle'
document.getElementById('button-two').addEventListener('click', calculateCircumferenceOfCircle)

function calculateCircumferenceOfCircle () {
  // allows the answer to appear with the circumference value when user inputs their radius.
  intRadius = parseInt(document.getElementById('input').value)
  intRadius = intRadius * 6.28318530718
  document.getElementById('answer').innerHTML = 'The circumference of the circle is ' + intRadius
}
