import React, { useEffect } from 'react';
const button = document.querySelector('.click-to-copy');

const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add('is-copied');
  setTimeout(() => { e.target.classList.remove('is-copied') }, 1200);
}


const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}


button.addEventListener('click', clickToCopy);