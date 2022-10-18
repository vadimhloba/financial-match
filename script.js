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


const popupLink = document.querySelectorAll('.popup-link'),
			popup = document.querySelector('.popup'),
			popupContent = document.querySelector('.popup__content'),
			body = document.querySelector('body'),
			closePopup = document.querySelector('.close-popup')

popupLink.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.add('open')
		popupContent.classList.add('active')
		body.classList.add('active')
		window.scrollBy(0, 100);
  })
})

closePopup.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.remove('open')
		popupContent.classList.remove('active')
		body.classList.remove('active')
  })

popup.addEventListener('click', e => {
  e.preventDefault();
	let a = e.target.style.backgroundColor
	console.log(a)
  popup.classList.remove('open')
	popupContent.classList.remove('active')
	body.classList.remove('active')
})
/*

// Popup START
const popupLink = document.querySelectorALL('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 500

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index]
		popupLink.addEventListener('click', e => {
			const popupName = popupLink.getAttribute('href').replace('#', '')
			const curentPopup = document.getElementsById(popupName)
			popupOpen(curentPopup)
			e.preventDefault()
		})
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index]
		el.addEventListener('click', e => {
			popupClose(el.closest('.popup'))
			e.preventDefault()
		})
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open')
		if (popupActive) {
			popupClose(popupActive, false)
		} else {
			bodyLock()
		}
		curentPopup.classList.add('open')
		curentPopup.addEventListener('click', e => {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'))
			}
		})
	}
}

popupClose(popupActive, doUnlock = true); {
	if (unlock) {
		popupActive.classList.remove('open')
		if (doUnlock) {
			bodyUnlock()
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerHTML - document.querySelector('wrapper').offsetWidth + 'px'

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index]
			el.style.paddingRight = lockPaddingValue
		}
	}
	body.style.paddingRight = lockPaddingValue
	body.classList.add('lock')

	unlock = false
	setTimeout(function () {
		unlock = true
	}, timeout)
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index]
				el.style.paddingRight = '0px'
			}
		}
		body.style.paddingRight = '0px'
		body.classList.remove('lock')
	}, timeout)
	unlock = false
	setTimeout(function () {
		unlock = true
	}, timeout)
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open')
		popupClose(popupActive)
	}
})
// Popup END

*/