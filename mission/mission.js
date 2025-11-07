const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target); // Stop watching once triggered
    }
  });
}, { threshold: 0.5 }); // 50% visible before triggering

document.querySelectorAll('.mission-sec__info--color-block').forEach((el) => {
  observer.observe(el);
});
document.querySelectorAll('.mission-sec__info--block').forEach((el) => {
  observer.observe(el);
});
