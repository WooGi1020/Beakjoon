const mainBox = document.querySelector(".box-container .box");

const horizenOffset = document.querySelector(".option input#h-offset");
const verticalOffset = document.querySelector(".option input#v-offset");
const blur = document.querySelector(".option input#blur");
const spread = document.querySelector(".option input#spread");

const shadowResult = document.querySelector(".result-output");

function handleShadow () {
  let hOffset = horizenOffset.value;
  let vOffset = verticalOffset.value;
  let Blur = blur.value;
  let Spread = spread.value;

  mainBox.style.boxShadow = `${hOffset}px ${vOffset}px ${Blur}px ${Spread}px`;

  shadowResult.innerHTML = `<p>box-shadow:${hOffset}px ${vOffset}px ${Blur}px ${Spread}px`;
}

horizenOffset.addEventListener("input", handleShadow);
verticalOffset.addEventListener("input", handleShadow);
blur.addEventListener("input", handleShadow);
spread.addEventListener("input", handleShadow);
