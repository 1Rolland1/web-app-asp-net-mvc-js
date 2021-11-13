function GetCreate(controllerName, actionName) {
    var x = new XMLHttpRequest();
    x.open("GET", `/${controllerName}/${actionName}`);
    x.onload = function () {
        var bodyModal = document.getElementById(`modal-body-${controllerName}`);
        bodyModal.innerHTML = x.responseText;
    }
    x.send(null);
}

function Post(controllerName, actionName, enctype) {
    var x = new XMLHttpRequest();

    var form = document.querySelector('form');
    var data = new FormData(form);
    x.open("POST", `/${controllerName}/${actionName}`);
    x.setRequestHeader('Content-Type', `${enctype}`);
    x.send(data);
}


function GetEdit(controllerName, actionName, id) {
    var x = new XMLHttpRequest();
    x.open("GET", `/${controllerName}/${actionName}?id=${id}`);
    x.onload = function () {
        var bodyModal = document.getElementById(`modal-body-${controllerName}`);
        bodyModal.innerHTML = x.responseText;
    }
    x.send(null);
}