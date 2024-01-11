const reviewList = [
    {
        id:1,
        img:'img/0.jpg',
        author:'WooGi',
        job:'Baby Front-End Dev.',
        review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ullam natus iusto voluptas, veniam nemo rem delectus nostrum temporibus rerum, molestias sunt laboriosam tempora ipsum recusandae sed corrupti illo veritatis.'
    },
    {
        id:2,
        img:'img/1.jpg',
        author:'KangHo',
        job:'Transfer student',
        review:'Nulla faucibus, orci nec pellentesque maximus, urna lorem dapibus enim, eu dictum nulla nisi a mauris. Fusce tincidunt iaculis purus, sit amet feugiat massa. Proin convallis dapibus massa, vitae varius erat mollis.'
    },
    {
        id:3,
        img:'img/2.jpg',
        author:'Jason',
        job:'UX Designer',
        review:'Pellentesque nisl neque, bibendum vel purus nec, pretium rhoncus turpis. Curabitur eu ornare tellus. Nullam et porttitor urna. Pellentesque eget turpis eu nulla bibendum lobortis. Aenean suscipit augue neque, vitae lacinia est sagittis.'
    },
    {
        id:4,
        img:'img/3.jpg',
        author:'Jessie',
        job:'supermarket clerk',
        review:'Nulla mollis nisi eget tellus ultrices, ut ultrices metus aliquet. Donec eget lorem augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas, enim quis luctus pulvinar palse b.'
    }
];

const reviewerImg = document.querySelector(".img img");
const reviewerName = document.querySelector(".reviewer-info h2");
const reviewerJob = document.querySelector(".reviewer-info p");
const review = document.querySelector(".review p");

const twoBtn = document.querySelectorAll(".left-right-btn-container button");
const randomBtn = document.querySelector(".random-btn button");

let pageNum = 0;

function currentPage(pageNum){
    reviewerImg.src = reviewList[pageNum].img;
    reviewerName.textContent = reviewList[pageNum].author;
    reviewerJob.textContent = reviewList[pageNum].job;
    review.textContent = reviewList[pageNum].review;
}

currentPage(pageNum);

function prevPage(){
    if(pageNum === 0){
        pageNum = 4;
        currentPage(pageNum);
    }else{
        pageNum--;
        currentPage(pageNum);
    }
}

function nextPage(){
    if(pageNum === 4){
        pageNum = 0;
        currentPage(pageNum);
    }else{
        pageNum++;
        currentPage(pageNum);
    }
}

function randomPage(){
    const randomNum = Math.floor(Math.random() * reviewList.length);
    currentPage(randomNum);
}

twoBtn[0].addEventListener("click", prevPage);
twoBtn[1].addEventListener("click", nextPage);
randomBtn.addEventListener("click", randomPage);
