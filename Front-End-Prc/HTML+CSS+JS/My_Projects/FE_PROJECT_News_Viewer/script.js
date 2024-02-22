const selectCategory = document.querySelector('#category');
const searchBtn = document.querySelector('.search-btn');
const newsViewer = document.querySelector('.news-viewer');

// 검색 버튼
function handleSearch() {
  const API_KEY = '91aba9a0620a426a970bbd835600f98c';
  const categoryValue = selectCategory.value;
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${categoryValue}&apiKey=${API_KEY}`;
  while (newsViewer.firstChild) {
    newsViewer.removeChild(newsViewer.firstChild);
  }

  // 뉴스 기사 불러오기
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    if(data.status === 'ok'){
      Array.from(data.articles).forEach((arr) => {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.onerror = () => {
          img.src = 'https://graphicriver.img.customer.envatousercontent.com/files/413754196/590.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=7e250cafe9c20103fdbc966d1bf9de0a';
        } 
        img.src = arr.urlToImage != null ? arr.urlToImage : 'https://graphicriver.img.customer.envatousercontent.com/files/413754196/590.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=7e250cafe9c20103fdbc966d1bf9de0a';

        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');

        const h2El = document.createElement('h2');
        const pEl = document.createElement('p');
        h2El.textContent = arr.title;
        pEl.textContent = arr.description != null ? arr.description.length > 100 ?
        `${arr.description.slice(0, 120)}...` : arr.description + '...' : 'no Content';

        const urlBtn = document.createElement('button');
        const aEl = document.createElement('a');

        aEl.href = arr.url;
        aEl.textContent = '바로 가기';
        aEl.target = '_newtab';

        urlBtn.appendChild(aEl);
        newsArticle.appendChild(h2El);
        newsArticle.appendChild(pEl);

        cardDiv.appendChild(img);
        cardDiv.appendChild(newsArticle);
        cardDiv.appendChild(urlBtn);

        newsViewer.appendChild(cardDiv);
      })
    }
  })
}



searchBtn.addEventListener('click', handleSearch);