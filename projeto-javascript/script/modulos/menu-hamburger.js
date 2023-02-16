import outsideClick from './outsideClick.js';
export default function initMenuMobile(){
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  if(menuButton){
  function openMenu(event){
    menuList.classList.toggle('ativo');
    menuButton.classList.toggle('ativo');
    outsideClick(menuList, () =>{
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    })
  }
  menuButton.addEventListener('click', openMenu);
}
}