const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".reset")
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");


let turnO = true;

const winPattren =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
];

let count = 1;
const draw = () =>{
    if (count===10){
        msg.innerText ="The match is draw";
        msgContainer.classList.remove("msg-container");
    }
}
const resetGame = () =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("msg-container");
    count =1;
}

boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        (count++);
        if(turnO===true){
            box.innerText = "O";
            turnO=false;
            box.style.color = "red"
        }else{
            box.innerText = "X"
            turnO=true;
            box.style.color = "white"
        }
        box.disabled = true;
        checkWinner();
    })
})

const disabledbox = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner = (winner)=>{
    msg.innerHTML = `Congratulation, Winner is :  &nbsp; <b> ${winner} </b> `;
    msgContainer.classList.remove("msg-container");
    disabledbox();
}
    
const checkWinner = () =>{
    for(let pattern of winPattren){
            let pos1Val =  boxes[pattern[0]].innerText;
            let pos2Val =  boxes[pattern[1]].innerText;
            let pos3Val =  boxes[pattern[2]].innerText;
    
    if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
            console.log(pos1Val);
        }else{
            draw();
        }
        
    }
  }
};

resetBtn.addEventListener("click",resetGame);