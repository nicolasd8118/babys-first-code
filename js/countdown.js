// 5-minute countdown that resets on every page load
(function(){
  const display = document.getElementById('countdown');
  if (!display) return;
  const TOTAL_SECONDS = 5 * 60;

  let endTime = Date.now() + TOTAL_SECONDS * 1000;
  let timer = null;

  function update(){
    const now = Date.now();
    const secsLeft = Math.max(0, Math.round((endTime - now) / 1000));
    const mins = String(Math.floor(secsLeft / 60)).padStart(2, '0');
    const secs = String(secsLeft % 60).padStart(2, '0');
    display.textContent = `${mins}:${secs}`;
    if (secsLeft <= 0) {
      if (timer) clearInterval(timer);
      display.textContent = "Time's up!";
    }
  }

  update();
  timer = setInterval(update, 1000);
})();
