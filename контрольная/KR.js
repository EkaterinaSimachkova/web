let text = document.getElementById('text');
let mis = document.getElementById('mis');
let mist = 9;
let chosen = [];

let player;
if (Math.floor(Math.random() * 2) == 0){
    player = "x";
}else{
    player = "y";
}

let word = prompt("Введите слово");

function Click(symbol){
    let Mist = true;
    if (symbol in chosen == false) {
        chosen.push(symbol)
        for (let i = 0; i < word.length; i++) {
            if (symbol == word[i].toUpperCase()){
                List[i] = symbol;
                Mist = false
            }
        }
        if (Mist) {
            mist = mist - 1
        }
        mis.innerHTML = mist.toString();
        if (mist == 0) {
            alert("Вы проиграли")
        } else {
            let Win = true;
            for (let i = 0; i < word.length; i++) {
                if (List[i] == "_") {
                    Win = false;
                }
            }
            if (Win) {
                alert("Вы выиграли")
            }
        }

        text.innerHTML = List.join(" ");
    } else {
        alert("Вы уже выбирали эту букву")
    }

}

let List = [];
for (let i = 0; i < word.length; i++) {
    List[i] = "_";
}
mis.innerHTML = mist.toString();
text.innerHTML = List.join(" ");