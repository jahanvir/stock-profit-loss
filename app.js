const initial_price = document.querySelector('#initial_price');
const current_price = document.querySelector('#current_price');
const quantity = document.querySelector('#stock_quantity');

const submit_btn = document.querySelector('#submit_btn');

const output = document.querySelector(".output_msg");
const error = document.querySelector(".error-msg");
const container = document.querySelector(".container");

submit_btn.addEventListener("click",submitHandler);

function submitHandler(){
    resetError();
    resetOutput();

    if(isValidInput()){
        calculateProfitLoss();
    }
}

function isValidInput(){
    if(initial_price.value === '' || current_price.value === '' || quantity.value ===''){
        SetError("Please enter all the values");
    }
    else if(Number(initial_price.value) <= 0 || Number(current_price.value) <= 0 || Number(quantity.value) <= 0){
        SetError("Please enter valid values, values should be greater than 0");
    }
    else{
        return true;
    }
}

function SetError(errorText){
    error.getElementsByClassName.display = "initial";
    error.innerText = errorText;
}

function resetError(){
    error.innerText="";
}

function calculateProfitLoss(){
    let i_price = Number(initial_price.value);
    let c_price = Number(current_price.value);
    let q = Number(quantity.value);

    if(i_price > c_price){
        let loss = ((i_price - c_price)*q).toFixed(2);
        let loss_per = ((loss/(i_price*q))*100).toFixed(2);
        setOutput("Loss",loss,loss_per);
    }
    else if(i_price < c_price){
        let profit = ((c_price - i_price)*q).toFixed(2);
        let profit_per = ((profit/(i_price*q))*100).toFixed(2);
        setOutput("Profit",profit,profit_per);
    }
    else{
        setOutput("Neutral");
    }
}


function setOutput(status,amount,percentage){
    switch(status){
        case "Profit":
            output.innerHTML = `<div><img src="./assets/Happy face_Flatline.svg"></div><div>The profit is ${amount} and the profit percentage is ${percentage} %</div>`
            if(percentage >= 50){
                container.style.background = '#32cd32';
            }
            break;
        
        case "Loss":
            output.innerHTML = `<div><img src="./assets/Sad face_Flatline.svg"></div><div>The loss is ${amount} and the loss percentage is ${percentage} %</div>`
            if(percentage >= 50){
                container.style.background = '#ef4444';
            }
            break;
        
        case "Neutral":
            container.style.background = '#fbbf24'
            output.innerHTML = `<div><img src="./assets/Neutral face_Outline.svg"></div><div> No Profit No Loss</div>`
            break;
        
        default:
            break;
    }
    document.querySelector(".footer").scrollIntoView();
}

function resetOutput(){
    container.style.background = 'white';
    output.innerText='';
}

initial_price.addEventListener('click', function(){
    resetError();
    resetOutput();
})

current_price.addEventListener('click', function(){
    resetError();
    resetOutput();
})

quantity.addEventListener('click', function(){
    resetError();
    resetOutput();
})

