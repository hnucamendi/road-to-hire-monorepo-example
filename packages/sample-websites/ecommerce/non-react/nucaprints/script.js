'use strict';

const primaryNav = document.querySelector('.nav-section_spacer');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', function () {
  const navVisibility = primaryNav.getAttribute('data-visible');
  if (navVisibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
  }
});

const dropdownToggle = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', function () {
  const dropDownVisibility = dropdownContent.getAttribute('data-visible');
  if (dropDownVisibility === 'false') {
    dropdownContent.setAttribute('data-visible', true);
  } else {
    dropdownContent.setAttribute('data-visible', false);
  }
});
