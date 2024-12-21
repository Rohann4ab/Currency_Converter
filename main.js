import { fstring } from './variable.js'

console.log("Main.js Working")

const populate = async (value, currency)=>{
    let myStr = ""
    // let url = fstring(currency);
    let url = fstring(currency) ;

    let response = await fetch(url)
    let rJson = await response.json();
    document.querySelector(".output").style.display = "block"

    for(let key of Object.keys(rJson["data"])){
        myStr += `<tr>
        <td>${key}</td>
        <td>${rJson["data"][key]["code"]}</td>
        <td>${rJson["data"][key]["value"]*value}</td>
        </tr>`
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Button is clicked");
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    if(value>=0){
        populate(value, currency)
    }
    else{
         return;
    }
})