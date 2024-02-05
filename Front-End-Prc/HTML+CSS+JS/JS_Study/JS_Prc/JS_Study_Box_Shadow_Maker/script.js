const mainBox = document.querySelector('.main-container .box');

const horizon = document.querySelector('.main-container .option .range-option .horizon-container input');
const vertical = document.querySelector('.main-container .option .range-option .vertical-container input');
const blur = document.querySelector('.main-container .option .range-option .blur-container input');
const spread = document.querySelector('.main-container .option .range-option .spread-container input');

const shadowInfo = document.querySelector('.main-container .option .other-option textarea');
const copyBtn = document.querySelector('.main-container .option .other-option button');

function handleShadow() {
  const hOffset = `${horizon.value}px`;
  const vOffset = `${vertical.value}px`;
  const blurSet = `${blur.value}px`;
  const spreadSet = `${spread.value}px`;

  const boxShadow = `${hOffset} ${vOffset} ${blurSet} ${spreadSet}`;
  mainBox.style.boxShadow = boxShadow;

  shadowInfo.textContent = 'box-shadow: ' + boxShadow;
}

window.addEventListener('DOMContentLoaded',handleShadow);

function copyShadow() {
  shadowInfo.select();
  shadowInfo.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  copyBtn.textContent = "Copied!";
  setTimeout(() =>{
    copyBtn.textContent = "Copy!";
  }, 1000);
}

horizon.addEventListener("input", handleShadow);
vertical.addEventListener("input", handleShadow);
blur.addEventListener("input", handleShadow);
spread.addEventListener("input", handleShadow);

copyBtn.addEventListener("click", copyShadow);