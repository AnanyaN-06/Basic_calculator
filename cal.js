let result = document.getElementById("result")

function Calculator(res){
    const input1 = parseInt(document.getElementById("input1").value)
    const input2 = parseInt(document.getElementById("input2").value)

    let output ;
    if (res === "add"){
        output= input1+input2;
    }
    else if(res === "sub"){
        output = input1-input2;
    }
    else if(res === "mul"){
        output = input1*input2;
    }
    else if (res==="div"){
        if (input2 === 0)
        {
            output = "invalid"
        }
        else{
             output = input1/input2;
        }
       
    }
    result.innerHTML=output;
}
const o1 = document.getElementById("add")
const o2 = document.getElementById("sub")
const o3 = document.getElementById("mul")
const o4 = document.getElementById("div")

o1.addEventListener('click',()=>{Calculator("add");});
o2.addEventListener('click',()=>{Calculator("sub");});
o3.addEventListener('click',()=>{Calculator("mul");});
o4.addEventListener('click',()=>{Calculator("div");});
