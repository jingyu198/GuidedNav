(function () {
  function setup() {
    const button = document.getElementById('copy-bibtex');
    const code = document.getElementById('bibtex');
    const status = document.getElementById('copy-status');
    if (!button || !code || button.dataset.ready) return;
    button.dataset.ready = 'true';
    button.addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = 'Copied!';
        status.textContent = 'BibTeX copied to clipboard.';
        window.setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2000);
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Select and copy the highlighted BibTeX.';
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
})();
