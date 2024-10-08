const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
btn.addEventListener('click', function() {
    if(form.classList.contains("hidden")){
        form.classList.remove("hidden")
        btn.textContent = "CLOSE";
    }
    else{
        form.classList.add("hidden")
        btn.textContent = "SHARE A FACT";
    }
})

let votesInteresting = 24 //Changable variable because of let
let votesMindBlowing = 9 //Changable variable because of let

const fact = "Lisbon is a capital of Portugal" //Unchnangable variable because of let
