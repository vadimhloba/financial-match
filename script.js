// Timer
(function(){

  const timer_counter = e => {
    const deadTime = '<i>00</i>';
    if(!e.dataset.time) return deadTime;
    const
      now = new Date(),
      timer = setInterval(() => {
        const
          deadline = new Date( now.getTime() + Number(e.dataset.time) * 60000 ),
          dateNow = new Date(),
          t = deadline - dateNow;

        let
          s = Math.floor((t % (1000 * 90)) / 1000);

        s = (s < 10) ? `0${s}` : s;

        if (t < 0) clearInterval(timer);
				if (t < 0) window.location.reload();
        e.innerHTML = (t < 0) ? deadTime : `<i>${s}</i>`;
      }, 1000);
  }

  const Timers = document.querySelectorAll('[data-time]');
  Timers.forEach(timer => {
    timer_counter(timer);
  });

})()