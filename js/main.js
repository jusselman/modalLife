// Get modal element //

var modal = document.getElementById('simpleModal');

// Get open modal button //

var modalBtn = document.getElementById('modalBtn');

// Get close button //

var closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for click //

modalBtn.addEventListener('click', openModal);
// outside click listener //
window.addEventListener('click', outsideClick);


// function open modal //

function openModal() {
  modal.style.display = 'block';
}

// function to close that piece //
closeBtn.addEventListener('click', closeModal);
function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if(e.target == modal) {
  modal.style.display = 'none';
}
}
