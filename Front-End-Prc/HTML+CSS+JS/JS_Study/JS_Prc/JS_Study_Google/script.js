const searchInput = document.querySelector(".search");


const showSearchResult = () => {
    let searchWord = searchInput.value;
    location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = "";
}

const enterKey = (event) => {
    if(event.code === "Enter"){
        showSearchResult();
    }
}

searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
})
