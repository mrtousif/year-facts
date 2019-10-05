const fact = document.querySelector('#fact');
const factText = document.querySelector('#factText')
const numberInput = document.querySelector('#numberInput')

// numberInput.addEventListener('input', getFactAjax)

// function getFactAjax() {
//   // Using XHR
//   let number = numberInput.value
//   let xhr = new XMLHttpRequest()
//   xhr.open('GET', 'http://numbersapi.com/'+number)

//   xhr.onload = function() {
//     if (this.status == 200 && number != '') {
//       fact.style.display = 'block'
//       factText.innerText = this.responseText
//     }
//   }
//   xhr.send()
// }

numberInput.addEventListener('input', getFactFetch)

function getFactFetch() {
  // Using Fetch API
  let number = numberInput.value

  fetch('http://numbersapi.com/'+ number + '/year')
    .then(response => response.text())
    .then(data => { 
      if (number != '') {
        fact.style.display = 'block'
        factText.innerText = data
      }
    })
    .catch(err => console.log(data))
}