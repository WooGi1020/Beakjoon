const amountInput = document.querySelector('.input-amount input');
const selectInput = document.querySelector('.select-money select');
const resultOutput = document.querySelector('.result-container p');

function handleExchange(e){
  if(e.key === 'Enter'){
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    const URL = 'https://v6.exchangerate-api.com/v6/a79a246814ae04aa071d390e/latest/KRW';
    fetch(URL)
    .then(response => response.json())
    .then((data) => {
      const amountValue = amountInput.value;
      const selectedMoney = selectInput.value;
      const result = data.conversion_rates[selectedMoney];

      if(isNaN(amountValue)){
        resultOutput.textContent = '숫자만 입력 가능합니다.';
        
      }else{
      resultOutput.textContent = `${(result * amountValue).toFixed(2)} ${selectedMoney}`;
      }
    })
    .catch(error => {
      console.error('[에러]', error);
    })
  }
}

amountInput.addEventListener('keypress', handleExchange);
