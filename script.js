let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";

let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string).toString(); // after evaluating also the result will be in string format
            input.value=string;

        }
        else if(e.target.innerHTML=='AC'){
    string="";
    input.value=string;

        }

        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            input.value=string;

        }

    
else{
// is not = button
string=string+e.target.innerHTML;
input.value=string;
}
       

        
    })


})

document.addEventListener('keydown',(e)=>{
if((e.key>=0 && e.key<=9)|| e.key=='.'|| e.key=='+'|| e.key=='-'|| e.key=='*'|| e.key=='/'){
    string=string+e.key;
    input.value=string;
}

else if(e.key==='Backspace'){
    string=string.slice(0,-1);
    input.value=string;
}

else if(e.key==='Enter'){
    string=eval(string).toString();
    input.value=string;
}
}
)