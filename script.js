// Timer START
  const timer_counter = e => {
    const deadTime = '<i>00</i>'
    if(!e.dataset.time) return deadTime;
    const
      now = new Date(),
      timer = setInterval(() => {
        const
          deadline = new Date( now.getTime() + Number(e.dataset.time) * 60000 ),
          dateNow = new Date(),
          t = deadline - dateNow

        let s = Math.floor((t % (1000 * 90)) / 1000)

        s = (s < 10) ? `0${s}` : s;

        if (t < 0) clearInterval(timer);
				if (t < 0) window.location.reload();
        e.innerHTML = (t < 0) ? deadTime : `<i>${s}</i>`;
      }, 1000);
  }
// Timer END


// Tab-block START
const btnNext = document.querySelector('.great-news .def-wrapper .btn-next'),
			wrapperTab = document.querySelector('.great-news .tab-wrapper'),
			wrapperDef = document.querySelector('.great-news .def-wrapper')
btnNext.addEventListener('click', () =>{
	wrapperTab.style.display = 'block'
	wrapperDef.style.display = 'none'
  timer_counter(document.querySelector('[data-time]'));
})
// Tab-block END

// Input [type='range'] START
const range = document.getElementById('volume'),
      rangeValue = document.getElementById('rangeValue')
range.addEventListener('input', e => {
  e.preventDefault()
  rangeValue.innerHTML = `$${e.target.value}`
})
// Input [type='range'] END

// popup START
const popupLink = document.querySelectorAll('.popup-link'),
			popup = document.querySelector('.popup'),
			closePopup = document.querySelectorAll('.close-popup'),
			popupTitle = document.querySelector('.popup__title'),
			popupText = document.querySelector('.popup__text')

popupLink.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    popupTitle.innerHTML = e.target.innerHTML
    popupText.innerHTML = document.getElementById(e.target.dataset.popup).innerHTML
    popup.classList.add('open')
		document.body.classList.add('active')
  })
})

closePopup.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.remove('open')
		document.body.classList.remove('active')
		popupTitle.innerHTML = ''
		popupText.innerHTML = ''
  })
})
// popup END