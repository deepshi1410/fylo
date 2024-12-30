const toggleThemeButton = document.getElementById('theme-toggle');
const lightModeSvg = document.getElementById('theme-toggle-light-icon')
const darkModeSvg = document.getElementById('theme-toggle-dark-icon')

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  lightModeSvg.classList.remove('hidden');
} else {
  darkModeSvg.classList.remove('hidden');
}

// listen to check event on toggle button
toggleThemeButton.addEventListener('click', function () {
  // toggle dark and light mode icons
  lightModeSvg.classList.toggle('hidden');
  darkModeSvg.classList.toggle('hidden');

  // check if molde is set in local storage
  if (localStorage.getItem('color-theme')) {
    if(localStorage.getItem('color-theme') === 'dark') {
      // if dark, make light and save in local storage
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      // if light, make dark and save in local storage
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
})