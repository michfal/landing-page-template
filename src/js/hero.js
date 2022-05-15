const windowHeight = window.innerHeight;

export function scrollPage() {
  window.scrollTo({ top: windowHeight, behavior: 'smooth' });
}
