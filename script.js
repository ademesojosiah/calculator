const ac = document.querySelector("#ac");
const modulus = document.querySelector("#modulus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const del = document.querySelector("#del");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const input = document.querySelector("#input1");
const input2 = document.querySelector("#input2");


function addNum(num) {
    if(input.value.length > 1 && input2.value.length > 1){
        input2.value = ""
        input.value =""
    }

    input.value += `${num}`;
}






 
one.addEventListener("click",()=>{addNum(1)})
two.addEventListener("click",()=>{addNum(2)})
three.addEventListener("click",()=>{addNum(3)})
four.addEventListener("click",()=>{addNum(4)})
five.addEventListener("click",()=>{addNum(5)});
six.addEventListener("click",()=>{addNum(6)});
seven.addEventListener("click",()=>{addNum(7)});
eight.addEventListener("click",()=>{addNum(8)});
nine.addEventListener("click",()=>{addNum(9)});
zero.addEventListener("click",()=>{addNum(0)});
multiply.addEventListener("click",()=>{
    addNum("*")
    input2.value += input.value
    input.value =""
});
ac.addEventListener("click",()=>{input.value = "";
input2.value =""});
modulus.addEventListener("click",()=>{
    addNum("%")
    input2.value += input.value
    input.value =""
});
divide.addEventListener("click",()=>{
    addNum("/")
    input2.value += input.value
    input.value =""
});
equal.addEventListener("click",()=>{
    input2.value += input.value
    input.value = eval(input2.value,input.value);

    
});
plus.addEventListener("click",()=>{
    addNum("+")
    input2.value += input.value
    input.value =""
});
del.addEventListener("click",()=>{ 
    let arr = input.value.split("");
    arr.pop()
    input.value = arr.join("")
    if(input.value == ""){
        let arr = input2.value.split("");
        arr.pop()
        input2.value = arr.join("")
    }
});
minus.addEventListener("click",()=>{
    addNum("-")
    input2.value += input.value
    input.value =""
});
dot.addEventListener("click",()=>{
    addNum(".")
    input2.value += input.value
    input.value =""
});




