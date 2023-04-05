const detectMobile = () => {
  return window && window.innerWidth <= 800 && window.innerHeight <= 600;
};
export { detectMobile };
