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

const range = document.getElementById('volume'),
      rangeValue = document.getElementById('rangeValue')
range.addEventListener('input', e => {
  e.preventDefault()
  rangeValue.innerHTML = `$${e.target.value}`
})