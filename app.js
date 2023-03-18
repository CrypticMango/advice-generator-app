fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   
    let quote = data.slip.advice;
    let advice = document.querySelector(".quote-container");
    advice.innerHTML = `"${quote}"`
  
    let id = data.slip.id;
    let adviceId = document.querySelector(".advice-id");
    adviceId.innerHTML = `ADVICE #${id}`;
   
  })
