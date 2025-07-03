function startPortfolio() {
  const intro = document.getElementById('intro');
  const splash = document.getElementById('splash');
  const mainContent = document.getElementById('mainContent');
  const logo = document.getElementById('logoIntro');

  // Tambahkan animasi berputar setelah diklik
  logo.classList.add('spin-now');

  // Setelah 1 detik, tampilkan splash screen
  setTimeout(() => {
    intro.classList.add('hidden');
    splash.classList.remove('hidden');

    // Setelah 3 detik saja (cepat), masuk ke halaman utama
    setTimeout(() => {
      splash.classList.add('hidden');
      mainContent.classList.remove('opacity-0');

      const profileSection = document.getElementById('profile');
      if (profileSection) {
        profileSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 3000); // 3 detik
  }, 1000); // delay 1 detik sebelum splash
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const output = document.getElementById("output");
      output.textContent = `Thanks, ${name}! Your message has been sent.`;
      this.reset();
    });
  }
});
