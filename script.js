// string=""
// const button = document.querySelectorAll(".num");
// button.addEventListener("click",function(e){

// })


let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");


const seven= document.getElementById("7");
console.log(seven);
seven.addEventListener("click",()=>{
    console.log("seven");
});


let string = " ";

// let arr= Array.from(buttons);
buttons.forEach((button) =>{
    button.addEventListener("click",(e)=>{
        
        if (e.target.innertext === "="){   
            // console.log(e.target.innertext);       //this target the content
            string= eval(string);
            input.value= string;
        }

        else if(e.target.innertext==="RESET"){
            // console.log(e.target.innertext);
            string="";
            input.value=string;
        }

        else if(e.target.innertext==="DEL"){
            // console.log(e.target.innertext);
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            // console.log(e.target.innertext);
            string += e.target.innertext;
            input.value= string;
        }
    })
})






























// // const calculation=[]
// function result() {
//     var v = document.getElementById('.answer');
// }
// console.log(v)


//     const zero=document.querySelector("#0");
//     zero.addEventListener("click",function(zero){
//         calculation.push(zero);
//     })



//     const one=document.querySelector("#1");
//     const two=document.querySelector("#2");
//     const three=document.querySelector("#3");
//     const four=document.querySelector("#4");
//     const five=document.querySelector("#5");
//     const six=document.querySelector("#6");
//     const seven=document.querySelector("#7");
//     const eight=document.querySelector("#8");
//     const nine=document.querySelector("#9");
//     const add = document.querySelector("#+");
//     const sub=document.querySelector("#-");
//     const mul=document.querySelector("#*");
//     const div=document.querySelector("#/");

   
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let string = "";
// let buttons = document.querySelectorAll('.num');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'DEL'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
    
