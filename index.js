function addingEventListener() {

    let input = document.getElementById('input');
    
    alert('I was clicked!');
    input.addEventListener('click', addingEventListener);
}
