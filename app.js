const   p1 ={
    score :0,
    display:document.querySelector('#p1Display'),
    button:document.querySelector('#p1Button')
}

const p2={
    score:0,
    display : document.querySelector('#p2Display'),
    button : document.querySelector('#p2Button')
}

const winningScoreSelector = document.querySelector('#playTo');
const resetButton = document.querySelector('#reset');
let winningScore = 3;
let isGameOver=false;

function updateScores(player,opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningScore){
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score;

    }

}

p1.button.addEventListener('click', ()=>{
    updateScores(p1,p2);
});

p2.button.addEventListener('click',(e)=>{
    updateScores(p2,p1);
});

winningScoreSelector.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset()
})

resetButton.addEventListener('click',reset);

function reset(){
    isGameOver=false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
} 
