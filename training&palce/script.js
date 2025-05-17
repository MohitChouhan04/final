const pdfs = document.querySelector('.pdfs');
const mainbutton = document.querySelector('.main-button');

const pdfbtn = document.querySelector('.btn');

const addpdfs = () =>{
    const adding = document.createElement("li")
    adding.innerHTML = pdfs.value;
    document.append(adding);
}
mainbutton.addEventListener('click' , () => {
    addpdfs();
})