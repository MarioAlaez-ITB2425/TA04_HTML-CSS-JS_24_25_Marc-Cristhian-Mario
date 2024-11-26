document.getElementById("ver-mas").addEventListener("click", function() {
    var textoAdicional = document.getElementById("texto-adicional");
    if (textoAdicional.classList.contains("oculto")) {
      textoAdicional.classList.remove("oculto");
      textoAdicional.classList.add("aparece");
      this.style.display = "none";
    }
  });
  
  function particlesBackground() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    const ctx = canvas.getContext('2d');
  
    const particlesArray = [];
    for (let i = 0; i < 100; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 2
      });
    }
  
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i];
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.vx *= -1;
        }
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.vy *= -1;
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
  
  particlesBackground();