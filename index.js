
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

function Display(){

}

Display.prototype.add=function(book){
    let tablebody=document.getElementById('tablebody')
    let uistring=` <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr> `;
  tablebody.innerHTML+=uistring;
}

Display.prototype.clear=function(){
    let libraryform=document.getElementById('libraryform');
    libraryform.reset();
}

//add submit event listener to libraryform
let libraryform=document.getElementById('libraryform');
libraryform.addEventListener('submit',libraryformsubmit);

function libraryformsubmit(e){
    let name=document.getElementById('bookName').value;
     let author=document.getElementById('authorName').value;
    //  let type=document.getElementById().value;
    let type;
    let fiction=document.getElementById('Fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');

    if(fiction.checked){
        type=fiction.value;
    }else if(programming.checked){
        type=programming.value;
    }else if(cooking.checked){
        type=cooking.value;
    }
    let book=new Book(name,author,type);
    console.log(book);

    let display=new Display();
    display.add(book);
    display.clear();
    e.preventDefault();
}