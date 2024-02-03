const modalBtn = document.querySelector('.modal-btn');
const startContainer = document.querySelector('.start-container');
const modalContainer = document.querySelector('.modal-container');

function handleModal() {
  startContainer.classList.toggle('hidden');
  modalContainer.classList.toggle('hidden');
}

modalBtn.addEventListener('click', handleModal);