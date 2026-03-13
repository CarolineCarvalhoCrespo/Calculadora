const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function back(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try {
        const expression = display.value;
        const result = eval(expression); // pode evoluir para parser próprio depois
        display.value = result;
        addToHistory(expression + " = " + result);
    } catch {
        display.value = "Erro";
    }
}

function addToHistory(text){
    const li = document.createElement("li");
    li.textContent = text;
    historyList.prepend(li); // mostra o mais recente no topo
}

// Suporte ao teclado
document.addEventListener("keydown", function(event){
    const key = event.key;

    if(!isNaN(key) || "+-*/.".includes(key)){
        appendToDisplay(key);
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        back();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});