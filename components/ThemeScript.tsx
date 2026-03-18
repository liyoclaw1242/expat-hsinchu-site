// Inline script to prevent FOUC (flash of unstyled content) on dark mode
// Runs synchronously before first paint
export default function ThemeScript() {
  const script = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var dark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch(e) {}
})();
`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
