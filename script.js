const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";


const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getrandumdata =(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const passwordgenerter = (password = "")=>{
    if (upperInput.checked){
        password += getrandumdata(upperSet);
    }
    if(lowerInput.checked){
        password+=getrandumdata(lowerSet);
    }
    if(numberInput.checked){
        password+=getrandumdata(numberSet);
    }
    if(symbolInput.checked){
        password+=getrandumdata(symbolSet);
    }
    if(password.length < totalChar.value){
        return passwordgenerter(password);
    }

    passBox.innerText = truncateString(password, totalChar.value);
    // console.log(password)
}
document.getElementById("btn").addEventListener('click', function(){
    passwordgenerter();
})
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}