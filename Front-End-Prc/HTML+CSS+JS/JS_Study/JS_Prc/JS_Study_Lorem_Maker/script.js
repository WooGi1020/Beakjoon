const loremArray = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum 
  volutpat eros. Curabitur mattis mauris sed justo tempor feugiat. Aenean finibus
  velit ut elit posuere, aliquam venenatis justo feugiat. Proin vel enim ex. 
  Duis eget dapibus augue. In tincidunt nulla quis dui molestie lacinia. Proin
  et venenatis ipsum. Aliquam quis sollicitudin justo, sit amet porta velit.
  Praesent venenatis nisi erat, sed maximus purus scelerisque nec. Ut suscipit 
  molestie nulla eu dignissim. Quisque ut diam ut ligula porta hendrerit. 
  Phasellus ac maximus nunc. Donec tempus, leo nec imperdiet sodales, nisi diam 
  placerat tortor, et bibendum velit nisi quis urna. Phasellus vestibulum mauris
  a dolor ullamcorper, eu tristique ipsum convallis.\n\n`,
  `Vestibulum ut interdum est. Morbi in ultrices dui. Suspendisse dui erat, 
  pulvinar ut pellentesque ut, bibendum sed turpis. Aenean ipsum tellus, elementum 
  eget rhoncus viverra, tempor quis arcu. Nunc egestas vel velit in fermentum.
  Phasellus at imperdiet mi. Class aptent taciti sociosqu ad litora torquent per
  conubia nostra, per inceptos himenaeos. Vivamus metus odio, condimentum id est 
  in, scelerisque facilisis lectus. Integer consequat ligula nibh. Nullam a 
  enim non sapien suscipit aliquet. Ut blandit erat nisl, vitae porta lorem 
  vestibulum nec. Fusce vitae ipsum a diam posuere consectetur.\n\n`,
  `Phasellus in porta dolor, at malesuada velit. Nam vestibulum eleifend egestas. 
  Phasellus eget posuere tellus, vitae accumsan tellus. Aliquam tortor nisi, 
  dignissim eget libero placerat, efficitur mattis augue. Mauris quis elit odio.
  Fusce tortor dui, ultrices et dui vehicula, mattis varius ex. Maecenas ullamcorper
  quam sit amet ullamcorper ullamcorper. Duis convallis tempus odio, nec fringilla
  nibh auctor in.\n\n`,
  `Curabitur fermentum augue et eleifend iaculis. Nulla condimentum, ex at feugiat
   viverra, arcu nisi tincidunt felis, sit amet dapibus augue lacus eget mauris. 
   Pellentesque sodales dolor consequat magna vehicula, in sagittis nibh volutpat. 
   Nunc rutrum consectetur purus aliquet consequat. Orci varius natoque penatibus 
   et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pretium est 
   eleifend malesuada imperdiet. Fusce faucibus augue quis elit tincidunt, in mattis 
   magna egestas. Vivamus non metus eu neque pretium consequat. Duis bibendum lectus 
   sit amet urna vestibulum rutrum. Donec porta lorem ligula, vel pulvinar nunc 
   dapibus in. Donec lobortis, erat et molestie dignissim, purus felis accumsan nisi, 
   eget porta nisi turpis id tortor. Interdum et malesuada fames ac ante ipsum primis 
   in faucibus. Sed turpis nisl, commodo ac enim eu, finibus lobortis leo.\n\n`,
   `Ut sit amet aliquam nibh. Sed eu consectetur arcu, non mollis enim. Morbi sit 
   amet fermentum massa. Nulla et magna purus. Quisque tincidunt libero tempor 
   lorem consectetur, ac iaculis orci dignissim. Praesent interdum justo fringilla, 
   blandit neque quis, ornare dolor. Nunc ut fringilla odio. Ut facilisis semper 
   elit eu mollis. Pellentesque blandit efficitur orci. Maecenas finibus magna purus, 
   nec consequat dui convallis eget. Nulla dolor dui, fringilla vitae nunc sed, 
   sollicitudin posuere est. Orci varius natoque penatibus et magnis dis parturient 
   montes, nascetur ridiculus mus. Vivamus porttitor at magna vel malesuada. Maecenas 
   sodales urna a rutrum feugiat.\n\n`,
   `Sed gravida mauris viverra ligula fringilla ornare. In in lectus metus. 
   Aliquam sapien mi, laoreet ac nisi sed, volutpat semper est. Aenean lacus leo, 
   maximus id mattis id, imperdiet non diam. Nullam condimentum tellus sit amet 
   risus commodo consequat. Nullam tristique nunc et urna suscipit, non congue nunc 
   ultrices. Vestibulum at nunc turpis. Fusce placerat, nulla quis rhoncus aliquet, 
   ante lacus efficitur eros, quis hendrerit urna libero at sem. Donec posuere 
   ipsum vitae magna pharetra pharetra. Pellentesque tortor ante, feugiat et diam 
   vulputate, accumsan luctus turpis. Mauris maximus nunc sit amet velit auctor 
   vestibulum. Morbi tempus ligula vitae velit tempus feugiat sed non eros. Maecenas 
   scelerisque nunc mi, id volutpat enim vulputate nec. In in ex a dolor consequat 
   feugiat nec id justo. Aliquam feugiat dolor non accumsan convallis.\n\n`,
   `Morbi auctor velit quis nisi rhoncus faucibus. Duis ornare ultrices fermentum. 
   Quisque non elit sed sem fermentum aliquet in in augue. Curabitur vitae gravida 
   augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non leo 
   ac ante gravida hendrerit ut ac leo. In hac habitasse platea dictumst. Nam 
   pulvinar, nulla vitae placerat pellentesque, augue velit iaculis arcu, ac accumsan 
   ex purus at velit. Cras bibendum elit eu purus mollis rutrum vel sed lacus. Cras 
   posuere aliquet venenatis. Nam faucibus bibendum accumsan.\n\n`,
   `Aliquam vitae eros ut mauris fermentum venenatis quis non lorem. Donec ut ante 
   ac risus vulputate convallis nec eu mauris. Donec finibus iaculis blandit. 
   Phasellus tellus nunc, facilisis eget semper sed, vulputate non metus. Praesent 
   finibus consequat vestibulum. Donec dui nisi, consequat sed metus vitae, rhoncus 
   accumsan diam. In hac habitasse platea dictumst. Donec ultricies purus nec sem 
   mollis consectetur. Etiam rutrum velit sit amet lorem accumsan, id sodales odio 
   bibendum. Ut ut augue eget arcu pretium blandit. Cras sit amet odio sodales, 
   mollis dolor sed, semper justo. Pellentesque convallis vitae purus a interdum. 
   Praesent sed volutpat sem. Duis vehicula, elit a luctus ultricies, tortor ligula 
   mollis tellus, sit amet dapibus neque diam sollicitudin lectus. Nullam at auctor 
   tellus.\n\n`,
   `Vestibulum efficitur, enim sit amet mattis viverra, lectus orci ultricies 
   sapien, vitae aliquam massa lacus sit amet risus. Orci varius natoque penatibus 
   et magnis dis parturient montes, nascetur ridiculus mus. Duis commodo vitae metus 
   et porta. Quisque varius mi nec risus gravida bibendum. Phasellus maximus hendrerit 
   ante, ac venenatis sapien volutpat in. Etiam rhoncus interdum lorem nec ultricies. 
   Etiam varius felis et neque sollicitudin, commodo volutpat tortor consectetur. 
   Aliquam sit amet eros eget massa aliquam tempor sed et sapien. Maecenas ac sem non 
   dui molestie convallis sed at leo. Quisque maximus tempus luctus. Nam fermentum 
   nisl vitae tempor porttitor. Integer hendrerit ligula in magna venenatis vulputate. 
   Fusce eget lacus condimentum lorem venenatis tincidunt. Vestibulum quis dolor 
   blandit, congue felis vel, maximus risus. Etiam a nunc at nibh vestibulum posuere.\n\n`
]

const textArea = document.querySelector('.output textarea');
const loremParagraph = document.querySelector('.lorem-option input#paragraph');
const makinglorem = document.querySelector('.main-container form');

function makeLorem(e) {
  e.preventDefault();

  const arrNum = parseInt(loremParagraph.value);
  const random = Math.floor(Math.random() * loremArray.length);

  if(arrNum == 0 || arrNum > 9 || arrNum < 0){
    textArea.textContent = loremArray[random];
  }else{
    const arrayText = loremArray.slice(0, arrNum).join("");
    textArea.textContent = arrayText;
  }
}

makinglorem.addEventListener("submit", makeLorem);
