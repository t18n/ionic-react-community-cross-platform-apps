const fetchImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
};

const applyImage = (target: HTMLImageElement, src: string) => {
  return new Promise((resolve) => {
    target.src = src;
    target.onload = () => resolve();
  });
};

export const preload = (targetEl: Element, src: string) => {
  return fetchImage(src)
    .then(() => applyImage(targetEl as HTMLImageElement, src))
    .then(() => targetEl.classList.add('loaded'));
};
