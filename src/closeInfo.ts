const observer = new MutationObserver((mutations, observer) => {
  for (const mutation of mutations) {
    if (mutation.type !== "childList") continue;
    if (mutation.addedNodes.length > 0) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i] as HTMLElement;
        if (node.querySelector('a[href*="twitter-blue-labs#nft"]')) {
          node.parentElement?.removeChild(node);
          observer.disconnect();
        }
      }
    }
  }
});
observer.observe(window.document.body, {
  subtree: true,
  childList: true,
});
