let turn = "X";
let gameOver = false;

const Changeturn = () => {
    return turn === "X" ? "O" : "X";
}

const CheckWin = () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('#text').innerHTML = boxtexts[e[0]].innerHTML + " WON!";
            gameOver = true;

            boxtexts[e[0]].style.backgroundColor = "#dadada";
            boxtexts[e[1]].style.backgroundColor = "#dadada";
            boxtexts[e[2]].style.backgroundColor = "#dadada";

            document.querySelector("#congo").innerHTML = "Congrats!";
        }
    });
}

let boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = Changeturn();
            CheckWin();
            if (!gameOver) {
                document.querySelector('#text').innerHTML = turn + "'s Turn";
            }
        }
    });
})

function restart() {
    window.location.reload();
}