function Add_note(){
    const name = document.querySelector('.add_note')
    console.log(name);
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