document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isActive = btn.classList.contains('active');

      // Tutup semua accordion lain
      accordionButtons.forEach(b => {
        b.classList.remove('active');
        b.nextElementSibling.classList.remove('open');
      });

      // Toggle accordion yang dipilih
      if (!isActive) {
        btn.classList.add('active');
        content.classList.add('open');
        content.scrollTop = 0; // reset scroll ke atas tiap buka
      }
    });
  });
});
