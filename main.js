// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//EMPTY_HEART.addEventListener('click', mimicServerCall)
// btn.addEventListener("click", myFunc)
//glyph.addEventListener('click', callBackFunction)

 const likeButtons = document.querySelectorAll('.like-glyph');
 for (button of likeButtons){
  button.addEventListener('click',function(e){
  mimicServerCall()
  .then(function(response){
    //e.target.innerHTML = FULL_HEART;
    
    //e.target.classList.add('activated-heart');
    if (e.target.innerHTML === FULL_HEART){
      e.target.innerHTML = EMPTY_HEART;
    } else {
    e.target.innerHTML = FULL_HEART;
    e.target.classList.add('activated-heart');
    }
  }) 
  .catch(function(error) {
    const element = document.getElementById('modal');
    element.classList.remove('hidden');
    const errorMessage = document.getElementById('modal-message');
    errorMessage.textContent = error;

    setTimeout(function() {
      element.classList.add('hidden');
    }, 3000);
  })
  
   }) 
 }
 
//  likeButtons.addEventListener('click', function(){
//   console.log
//  })
//  // //console.log(likeButton)
// //Sending a request to the server invoking the mimicServerCall function
// function callBackFunction(event){
//   let liking = event.target;
//   if (liking.innerText === EMPTY_HEART){
//     heart.innerText = FULL_HEART;
//     heart.className = 'activated heart';
//   } else {
//     heart.innerText = EMPTY_HEART;
//     heart.className = "";
//   }
// }
  
  

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

