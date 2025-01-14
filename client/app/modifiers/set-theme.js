import { modifier } from 'ember-modifier';

export default modifier((_, [theme, allThemes]) => {
  const html = document.querySelector('html');

  console.log('setting theme', theme, allThemes)

  // Already done
  if (html.classList.contains(theme)) return;

  // Remove any other themes that might be active
  allThemes.forEach(oldTheme => {
    html.classList.remove(oldTheme);
  });

  // Add new theme
  html.classList.add(theme);
});
