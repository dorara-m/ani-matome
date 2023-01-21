
const blockEl = document.querySelector('.wrap')!;
const coefPram = getComputedStyle(blockEl);
console.log(coefPram)

window.addEventListener('scroll', () => {
  let scrollPos = window.pageYOffset;
  const coefStyle = coefPram.getPropertyValue("--coef-base-width");
  document.documentElement.style.setProperty('--coef-base-width',String(scrollPos*0.001));
  console.log(coefStyle)
})
