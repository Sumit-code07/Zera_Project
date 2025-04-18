const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(button => {
  button.addEventListener('click', function () {
    const beachDetail = button.closest('.beach-ditail');
    const img = beachDetail.querySelector('img');
    const beach = img.src;

    document.getElementById('beachInput').value = beach;
    document.getElementById('bookForm').submit(); // submit the form to redirect
  });
});


