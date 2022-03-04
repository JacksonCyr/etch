const container = document.querySelector('#container');

makeBoard(16);

function makeBoard(num) {
    for (let j = 0; j < num; j++) {
        for (let i = 0; i < num; i++) {
            const di = document.createElement('div');
            container.appendChild(di);
        }
    }

    var strr = 'repeat(' + num.toString() + ', 1fr)';
    console.log(strr);
    container.style.gridTemplateColumns = strr;
    //container.style.gridTemplateRows = '16 1fr';
}

container.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "black";
});


function clearBoard() {
    var children = container.children;
    for (var i = 0; i < children.length; i++) {
        var tableChild = children[i];
        tableChild.style.backgroundColor = 'white';
    }
    container.innerHTML = '';
    var size = prompt('Enter size of each side for new grid');
    makeBoard(size);
}