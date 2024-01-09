const bookmarkBar = document.getElementById("bookmark-bar");
const bookmarkOpen = document.getElementById("bookmark-open");
const bookmarkClose = document.getElementById("bookmark-close");

const isBookMarkBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if(isBookMarkBarOpen === "close"){
        bookmarkBar.style.display = "none";
        bookmarkOpen.style.display = "none";
        bookmarkClose.style.display = "flex";
    } else{
        bookmarkBar.style.display = "block";
        bookmarkOpen.style.display = "flex";
        bookmarkClose.style.display = "none";
}

const bookmarkBarToggle = () => {
    const isBookBarOpen = localStorage.getItem("isBookMarkBarOpen");
    if(isBookBarOpen === "close"){
        localStorage.setItem("isBookMarkBarOpen", "open");
            bookmarkBar.style.display = "block";
            bookmarkOpen.style.display = "flex";
            bookmarkClose.style.display = "none";
            return;
    } localStorage.setItem("isBookMarkBarOpen", "close");
            bookmarkBar.style.display = "none";
            bookmarkOpen.style.display = "none";
            bookmarkClose.style.display = "flex";
}

document.getElementById("bookmark-open-btn").addEventListener("click", bookmarkBarToggle);
document.getElementById("bookmark-close-btn").addEventListener("click", bookmarkBarToggle);
