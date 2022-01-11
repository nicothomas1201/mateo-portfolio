const $menu = document.querySelector(".fas.fa-bars");
const $close = document.querySelector(".fas.fa-times");
const $headerMobileList = document.querySelector(".headerMobile-list");

$headerMobileList.style.opacity = '0';

$menu.addEventListener('click', (e)=>{
  $menu.classList.toggle('none');
  $close.classList.toggle('none');
  $headerMobileList.style.opacity = '1';
  $headerMobileList.style.transition = '.2s opacity linear';
});

$close.addEventListener('click', ()=>{
  $close.classList.toggle('none');
  $menu.classList.toggle('none');
  $headerMobileList.style.opacity = '0';
});

