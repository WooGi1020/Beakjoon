const API_URL = "http://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/"
const quoteElement = document.getElementById("quote");
const quoteItem = localStorage.getItem("quote");

const NowDate = new Date();
const month = NowDate.getMonth() + 1;
const date = NowDate.getDate();

const setQuote = (result) => {
    let quote = {createDate: `${month}-${date}`, quoteData : result}
    localStorage.setItem("quote", JSON.stringify(quote));
    quoteElement.textContent = result;
}

const getQuote = async () => {
    try{
        const data = await fetch(API_URL).then((res) => res.json())
        const result = data[1].respond;
        setQuote(result);
    }catch(err) {
        console.log(`err : ${err}`);
        setQuote("작은 기회로부터 종종 위대한 업적이 시작된다. - 데모스테네스");
    }
}

if(quoteItem){
    let {createDate, quoteData} = JSON.parse(quoteItem);
    if(createDate === `${month}-${date}`){
        quoteElement.textContent = `"${quoteData}"`;
    }
    else{
        getQuote();
    }
}else{
    getQuote();
}



