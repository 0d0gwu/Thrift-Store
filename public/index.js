document.addEventListener('DOMContentLoaded', () => {
  const jerseys = document.querySelectorAll('.jersey');

  function attachEventListeners(jersey) {
    
      const jerseyBtn = jersey.querySelector('.jersey-btn');
      
     
      let timeoutId;

      jersey.addEventListener('mouseenter', function() {
          timeoutId = setTimeout(() => {
              jerseyBtn.style.display = 'block';
          }, 500);
          console.log('Timeout ID:', timeoutId);
      });

      jersey.addEventListener('mouseleave', function() {
          clearTimeout(timeoutId); // Clear the timeout if leaving before the delay
          jerseyBtn.style.display = 'none'; // Hide the button on mouseleave
      });
  }

  jerseys.forEach(jersey => {
      attachEventListeners(jersey);
  });
});


