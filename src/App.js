import './tik.css';
let turnO = true;
let count =0;  
function fun(x){
  let doc=document.getElementById(x);  
  if(turnO){
    doc.innerText="O";
    turnO=false;
  }else{
    doc.innerText="X";
    turnO=true;
  }
  doc.disabled=true;
  count++;
  checkwin();
}

function checkwin(){
  const boxes=document.querySelectorAll(".box");
    const winPatterns = [
       [0, 1, 2],
       [0, 3, 6],
       [0, 4, 8],
       [1, 4, 7],
       [2, 5, 8],
       [2, 4, 6],
       [3, 4, 5],
       [6, 7, 8],
    ];
    for(let pattern of winPatterns){
      let[a,b,c]=pattern;
      if(boxes[a].innerText && boxes[a].innerText===boxes[b].innerText && boxes[a].innerText===boxes[c].innerText){
       setTimeout(()=> alert(`"congratulation the winner is ${boxes[a].innerText}"`),100);
        disable();
        return;
      }
      else if (count===9){
          setTimeout(()=>
          alert("the game is draw"),10);
      } 
    }}


function disable(){
  const boxes=document.querySelectorAll(".box");
  boxes.forEach((box)=>{
box.disabled=true;
  })
}
function enable(){
  const boxes=document.querySelectorAll(".box");
  boxes.forEach((box)=>{
box.disabled=false;
box.innerText="";
count=0;
  })
}


function Game(){
return(
  <>
  <br></br>  <center><button id="new-btn" onClick={enable}>New Game</button></center>
    <div class="container">
  <button class="box"  id="one" style={{color:'white'}} onClick={()=>fun('one')}></button>
  <button class="box"  id="two" style={{color:'white'}} onClick={()=>fun('two')}></button>
  <button class="box"  id="three" style={{color:'white' }} onClick={()=>fun('three')}></button>
  <button class="box"  id="four" style={{color:'white'}} onClick={()=>fun('four')}></button>
  <button class="box"  id="five" style={{color:'white'}} onClick={()=>fun('five')}></button>
  <button class="box"  id="six" style={{color:'white'}} onClick ={()=>fun('six')}></button>
  <button class="box"  id="seven" style={{color:'white'}} onClick={()=>fun('seven')}></button>
  <button class="box" id="eight" style={{color:'white'}} onClick={()=>fun('eight')}></button>
  <button class="box"  id="nine" style={{color:'white'}} onClick={()=>fun('nine')}></button>
    </div><br></br>
  <center><button id="reset-btn" onClick={enable}>Reset Game</button></center>

  </>
)}
export default Game;