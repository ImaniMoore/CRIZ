const donationBtn = document.querySelectorAll('.donation-freq');

donationBtn.forEach((btn) => {

  btn.addEventListener('click', function() {
    donationBtn.forEach((b) => {
      b.classList.remove('donate-btn--selected')
    });
    this.classList.add('donate-btn--selected');
  });

});