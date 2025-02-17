const observer = new MutationObserver(() => {
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    observer.disconnect(); // Berhenti mengamati setelah elemen ditemukan
    const html = document.documentElement;

    function setTheme(theme) {
      html.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
      themeIcon.classList.toggle('bi-moon', theme === 'dark');
      themeIcon.classList.toggle('bi-sun', theme === 'light');
    }

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    themeIcon.addEventListener('click', () => {
      const newTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });
