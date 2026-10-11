document.addEventListener('DOMContentLoaded', ()=>{
  // Hero simple fade-in already handled by CSS; reveal other sections
  const revealEls = document.querySelectorAll('.section');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        entry.target.classList.remove('reveal');
      }
    });
  },{threshold:0.12});

  revealEls.forEach(el=>{el.classList.add('reveal');io.observe(el)});

  // Smooth anchor scrolling (if needed later)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
});
