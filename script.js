Audio('sounds/ikawatako.mp3').play(); 
function startCakeGame() {
  const btn = document.getElementById('start');
  const cake = document.getElementById('cakegif');
  const meter = document.getElementById('meter');

  // Fallback: press Space/Enter if mic fails
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') blowCake();
  });

  // 🔹 define inner helper so it can be called from anywhere inside
  function blowCake() {
    // 1️⃣ show blown animation
    cake.src = cake.dataset.blown;

    // 2️⃣ after short delay, show final cake image
    setTimeout(() => {
      cake.src = cake.dataset.final;
      btn.style.display = 'none'; // hide button after success
      meter.textContent = "Yey! Click the cake to open your surprise!";
      // 3️⃣ make final cake clickable
      cake.style.cursor = 'pointer';
      cake.addEventListener('click', () => {
        window.location.href = 'envelope.html'; // 👈 your link
      });
    }, 3000);
  }

  // 🔹 main mic listener logic
  btn.addEventListener('click', async () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      await ctx.resume();

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true }
      });

      const mic = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      mic.connect(analyser);

      const data = new Uint8Array(analyser.frequencyBinCount);
      btn.textContent = 'Listening… blow toward the mic';

      let blown = false;

      function listen() {
        analyser.getByteFrequencyData(data);
        const volume = data.reduce((a, b) => a + b, 0) / data.length;
        meter.textContent = 'volume: ' + volume.toFixed(1);

        // Trigger once when loud enough
        if (!blown && volume > 120) {
          blown = true;
          blowCake();
        }
        if (!blown) requestAnimationFrame(listen);
      }

      listen();
    } catch (err) {
      console.error(err);
      meter.textContent = 'Mic error — press Space to blow';
    }
  });
}

// ✅ run the whole feature once the DOM is ready
document.addEventListener('DOMContentLoaded', startCakeGame);


document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('imgenvelope');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);

    setTimeout(() => {
      window.location.href = "cards.html"; // 👈 change this to your page
    }, 3000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all cards
  const cards = document.querySelectorAll('.card');

  // Load sound
  const clickSound = new Audio('sounds/bling.mp3'); // 👈 path to your sound

  // Add click event for each card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      clickSound.currentTime = 0; // restart sound if clicked quickly
      clickSound.play();          // play sound
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('card1');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('card2');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('card3');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('card4');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('card5');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('card6');

  img.addEventListener('click', () => {
    // Swap GIFs
    const current = img.getAttribute('src');
    const next = img.getAttribute('data-alt');
    img.setAttribute('src', next);
    img.setAttribute('data-alt', current);
  });
});




