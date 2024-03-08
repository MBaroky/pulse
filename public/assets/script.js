function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm(".sticky-top").then(elm => {
  const observer = new IntersectionObserver(
    ([e]) =>
      e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );

  observer.observe(elm);
});
