let votes = 0;
let extraVote = 10;
let vpc = 1;
let multVote = 100;
let wina = 183000000
function pointAdd(){
    votes += vpc;
    document.getElementById("score").innerHTML = votes;
}

function buyVotes(){
    if(votes >= extraVote){
        votes -= extraVote;
        extraVote+=2; 
        document.getElementById("exCost").innerHTML = extraVote;
        vpc++;
    }
}

function buyMulti(){
    if(votes>= multVote){
        votes -= multVote;
        multVote += 15;
        document.getElementById("multi").innerHTML = multVote;
        vpc = vpc * 1.2; 
    }
}

function win(){
    if(votes>=wina){
        votes -= wina
        alert("Congrats misterpresident")
    }
}