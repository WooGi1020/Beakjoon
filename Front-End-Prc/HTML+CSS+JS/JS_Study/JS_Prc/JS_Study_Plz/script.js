document.body.addEventListener('mousemove', function(e) {
  document.querySelector('.harry').style.left = e.pageX + 'px';
  document.querySelector('.harry').style.top = e.pageY + 'px';
})

const snichi = document.querySelector('.snichi');

function handleSnichi() {
  const randomLeft = Math.floor(Math.random() * 1200);
  const randomTop = Math.floor(Math.random() * 600);

  snichi.style.left = randomLeft + 'px';
  snichi.style.top = randomTop + 'px';
  snichi.style.transition = 'all 0.3s ease';
}

snichi.addEventListener('mouseover', handleSnichi);