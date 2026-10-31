// La playlist pública se muestra sin incluir credenciales en el navegador.
const content = document.getElementById('content');
if (content) {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/videoseries?list=PLZKchZBAvqLOzYzbvYefiWHCd7bXktMyV';
  iframe.title = 'Playlist de YouTube';
  iframe.loading = 'lazy';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'width:100%;aspect-ratio:16/9;border:0;grid-column:1/-1';
  content.replaceChildren(iframe);
}
