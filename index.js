
let countEl = document.getElementById("count-el");
let count=0;
count++;
function increment(){
    count +=1;
    countEl.textContent = count;
}
function save(){
    let saveEl = document.getElementById("save-el");
    let countStr = count + "-";
    saveEl.innerHTML += countStr;
    countEl.textContent = 0;
    count = 0;
}