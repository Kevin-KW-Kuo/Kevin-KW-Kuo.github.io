function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("pocker", ev.target.id);
}

function dropRedBlock(ev) {
    const dropzone = document.querySelector('.red_place_block');
    ev.preventDefault();
    const data = ev.dataTransfer.getData("pocker");
    dropzone.appendChild(document.getElementById(data));
}

function dropBlackBlock(ev) {
    const dropzone = document.querySelector('.black_place_block');
    ev.preventDefault();
    const data = ev.dataTransfer.getData("pocker");
    dropzone.appendChild(document.getElementById(data));
}

function dropCardContainer(ev) {
    const dropzone = document.querySelector('.card-container');
    ev.preventDefault();
    const data = ev.dataTransfer.getData("pocker");
    dropzone.appendChild(document.getElementById(data));
}