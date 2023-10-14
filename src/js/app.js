/* Импорт webpack */
 import * as flsFunctions from "./modules/function.js";
 flsFunctions.isWebp();

/*Импорт select-pure.js*/
import SelectPure from "select-pure";

// sidebar

const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar__list-item-link");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  })
});
//search
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', () => {
  const inputSearch = document.getElementById('input-search');
  inputSearch.classList.toggle('input-search-active');
});