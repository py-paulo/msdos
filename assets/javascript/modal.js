document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-about');
  const openModalBtn = document.getElementById('btn-about');
  const closeModalBtn = document.querySelector('.modal-about-btn-ok');

  const openModal = () => {
    modal.classList.remove('hidden');
  };

  const closeModal = () => {
    modal.classList.add('hidden');
  };

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});