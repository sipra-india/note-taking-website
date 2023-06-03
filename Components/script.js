function Add_note(){
    const note = document.querySelector('.add_note').value;
    const name = note.trim();
    if (name === ""){
        alert('please enter a name for your note');
    } else {
        const place = document.querySelector('.nav_bar');
        const div = document.createElement('div');
        const li = document.createElement('li');
        const btn1 = document.createElement('button');
        const img1 = document.createElement('img');
        const btn2 = document.createElement('button');
        const img2 = document.createElement('img');
        const btn3 = document.createElement('button');
        const img3 = document.createElement('img');

        div.setAttribute('id',name);
        div.setAttribute('class','nav_item');
        btn1.setAttribute('class','btn');
        btn2.setAttribute('class','btn');
        btn3.setAttribute('class','btn');
        img1.setAttribute('class','btn_icon');
        img1.src = "icons8-edit-50.png";
        img2.setAttribute('class','btn_icon');
        img2.src = "icons8-download-24.png";
        img3.setAttribute('class','btn_icon');
        img3.src="icons8-delete-30.png";
        li.textContent = name;
        div.appendChild(li);
        div.appendChild(btn1);
        div.appendChild(btn2);
        div.appendChild(btn3);
        btn1.appendChild(img1);
        btn2.appendChild(img2);
        btn3.appendChild(img3);
        place.appendChild(div);
    }
}
function save(){

}
function delete_item(){

}
function open_dropdown(){
    const menu = document.querySelector('.dropdown_menu');
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
}
function cancel_dropdown(){
    const menu = document.querySelector('.dropdown_menu');
    menu.style.display = 'none';
}