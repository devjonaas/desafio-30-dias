// ===== FAQ (acordeão) =====
document.querySelectorAll('.faq-item').forEach(item=>{
  const question = item.querySelector('.faq-question');
  if(!question) return;
  question.addEventListener('click',()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

// ===== Barra fixa de CTA ao rolar (somente na landing principal) =====
const hero = document.querySelector('.hero');
const fixedBar = document.getElementById('fixedBar');
if(hero && fixedBar){
  window.addEventListener('scroll', ()=>{
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    if(window.scrollY > heroBottom){
      fixedBar.classList.add('show');
    } else {
      fixedBar.classList.remove('show');
    }
  });
}
