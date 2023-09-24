const titleButton = document.querySelector("#showTitle");
const titulo = document.querySelector("h1");
const noteButton = document.querySelector("#createButton");
const resetButton = document.querySelector("#resetButton");
const container = document.querySelector("#notesContainer");

createButton.addEventListener("click",addNote);
resetButton.addEventListener("click",resetTextArea)

function showTitle () {
    titulo.classList.add("moveTitle");
}

function addNote (event) {
    event.preventDefault();

    const note = document.createElement("div");

    const topSettings = document.createElement("aside");
    topSettings.classList.add("topSettings");
    topSettings.style.backgroundColor = randomColor();
    note.appendChild(topSettings);

    const dots = document.createElement("i");
    dots.setAttribute("id","noteMenu"); dots.setAttribute("class","bx bx-dots-horizontal-rounded");
    topSettings.appendChild(dots);

    const close = document.createElement("p");
    close.innerHTML = "X"
    close.setAttribute("id","closeNote");
    topSettings.appendChild(close);

    const textArea = document.querySelector("textArea");
    const text = textArea.value;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;
    paragraph.classList.add("noteText");
    paragraph.setAttribute("contenteditable","true");
    note.appendChild(paragraph);

    const bottomSettings = document.createElement("aside");
    bottomSettings.classList.add("bottomSettings");
    note.appendChild(bottomSettings);

    const bold = document.createElement("i");
    bold.setAttribute("id","boldNote"); bold.setAttribute("class","bx bx-bold");
    bottomSettings.appendChild(bold);

    const italic = document.createElement("i");
    italic.setAttribute("id","italicNote"); italic.setAttribute("class","bx bx-italic");
    bottomSettings.appendChild(italic);

    const underline = document.createElement("i");
    underline.setAttribute("id","underlineNote"); underline.setAttribute("class","bx bx-underline");
    bottomSettings.appendChild(underline);

    const strike = document.createElement("i");
    strike.setAttribute("id","strikeNote"); strike.setAttribute("class","bx bx-strikethrough");
    bottomSettings.appendChild(strike);

    bold.addEventListener("click", () => {
        if (paragraph.style.fontWeight === "bold") {
            paragraph.style.fontWeight = "normal";
        } else {
            paragraph.style.fontWeight = "bold";
        }
    });

    italic.addEventListener("click",() => {
        if (paragraph.style.fontStyle === "italic") {
            paragraph.style.fontStyle = "normal";
        } else {
            paragraph.style.fontStyle = "italic";
        }
    });

    underline.addEventListener("click",() => {
        if (paragraph.style.textDecoration === "underline") {
            paragraph.style.textDecoration = "none";
        } else {
            paragraph.style.textDecoration = "underline";
        }
    });

    strike.addEventListener("click",()=> {
        if (paragraph.style.textDecoration === "line-through") {
            paragraph.style.textDecoration = "none";
        } else {
            paragraph.style.textDecoration = "line-through";
        }
    });
    

    note.classList.add("note");
    
    container.appendChild(note);

    note.addEventListener("dblclick", ()=>{
        container.removeChild(note);
    });
}

function resetTextArea () {
    const textArea = document.getElementById("textArea");
    textArea.value = "";
    textArea.setAttribute("style","");
    container.innerHTML = "";
}



const randomColor = () => {
    const numbersLetters = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
    let colorCode = "#";
    for (let i=0; i<6;i++){
        let digitPosition = Math.floor(Math.random()*(numbersLetters.length));
        colorCode += numbersLetters[digitPosition];
    }
    return colorCode;
};



