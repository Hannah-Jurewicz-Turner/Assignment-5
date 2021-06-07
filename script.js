// calculates the area of the circle with the radius as well as the circumference.

document.getElementById('button-one').addEventListener('click', calculateAreaOfCircle)

function calculateAreaOfCircle () {
  let intRadius = parseInt(document.getElementById('input').value)
  intRadius = intRadius ** 2
  intRadius = intRadius * 3.14159265359
  alert(intRadius)
}

document.getElementById('button-two').addEventListener('click', calculateCircumferenceOfCircle)

function calculateCircumferenceOfCircle () {
  let intRadius = parseInt(document.getElementById('input').value)
  intRadius = intRadius * 6.28318530718
  alert(intRadius)
}
