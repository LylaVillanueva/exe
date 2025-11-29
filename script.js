Audio('sounds/ikawatako.mp3').play();
function startCakeGame() {
  const btn   = document.getElementById('start');
  const cake  = document.getElementById('cakegif');
  const meter = document.getElementById('meter');

  function blowCake() {
    // prevent double-click
    btn.disabled = true;

    // 1️⃣ change to blown cake GIF
    cake.src = cake.dataset.blown;

    // 3️⃣ after 3 seconds, show final cake & make it clickable
    setTimeout(() => {
      cake.src = cake.dataset.final;
      btn.style.display = 'none'; // hide button
      meter.textContent = "Yey! Click the cake to open your surprise!";

      cake.style.cursor = 'pointer';
      cake.addEventListener(
        'click',
        () => {
          window.location.href = 'envelope.html';
        },
        { once: true } // make sure it only runs once
      );
    }, 3000);
  }

  // use CLICK only (no keydown listener)
  btn.addEventListener('click', blowCake);
}

// wait for HTML to load before running
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




