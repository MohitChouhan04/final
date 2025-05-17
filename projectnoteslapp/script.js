const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main");
const savenote = () =>{
    const notes = document.querySelectorAll(".note textarea");
    const data =[];
    notes.forEach((note) => {
        data.push(note.value);
    }
)
// console.log(data);
   localStorage.setItem("notes",JSON.stringify(data));
}

addbtn.addEventListener(
    "click",
    function(){
        addNote();
    }

)

// (
//     function(){
    

//     }
// )()




const addNote = ()=>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = 
    `
    <div class="tool">
                <i class=" save fa-solid fa-floppy-disk"></i>
                <i class=" trash fa-solid fa-trash"></i>
            </div>
            <textarea></textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove();
            savenote();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            savenote();
        }
    )
    main.appendChild(note);
    savenote();
}