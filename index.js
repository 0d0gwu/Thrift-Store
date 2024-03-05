const jerseys = document.querySelectorAll('.jersey');




function attachEventListeners(jersey) {

    const myModal = document.querySelector('#myModal');

    const modal = document.querySelector('.modal');

    const jerseyBtn = jersey.querySelector('.jersey-btn');

    const image = jersey.querySelector('.image');

    const imageSrc = image.src;

    var modalImage = document.querySelector('.modal-img');

    const close = document.querySelector('.close-modal');

    const hiddenDiv = jersey.querySelector('.hidden-div');

    const hiddenHead = jersey.querySelector('.hidden-head').innerHTML;

    const hiddenPar = jersey.querySelector('.hidden-par').innerHTML;

    const updateHead = document.querySelector('.update-head');

    const updatePar = document.querySelector('.update-par'); 

    let timeoutId;

    jersey.addEventListener('mouseenter', function() {
        timeoutId = setTimeout(function() {
            jerseyBtn.style.display = 'block';
        }, 500);
        console.log(timeoutId);
    });

    jersey.addEventListener('mouseleave', function() {
        clearTimeout(timeoutId); // Clear the timeout if leaving before the delay
        jerseyBtn.style.display = 'none'; // Hide the button on mouseleave
    });

   console.log(jerseyBtn);
  // console.log(image);

    close.onclick = function(){
        modal.style.display = 'none';
    }

  jerseyBtn.onclick = function() {
    modal.style.display = 'block';
    modalImage.src= imageSrc;

    console.log(updateHead.innerHTML =  hiddenHead );
    updatePar.innerHTML = hiddenPar;
    console.log(modal);
    console.log(modalImage);
  }
}

jerseys.forEach(function(jersey) {
    attachEventListeners(jersey);
});




