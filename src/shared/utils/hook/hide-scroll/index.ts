const className = "overflow-hidden";

const useHideScroll = (element: HTMLElement) => {
  const handleHideScroll = () => {
    element.classList.add(className);
  };
  const handleVisibleScroll = () => {
    element.classList.remove(className);
  };

  return {
    handleHideScroll,
    handleVisibleScroll,
  };
};

export { useHideScroll };
