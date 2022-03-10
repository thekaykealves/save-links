function modalDelete(id){
    document.querySelector(`[data-id="${id}"]`).classList.add('active');
}

function modalCancel(id){
    document.querySelector(`[data-id="${id}"]`).classList.remove('active');
}

function deleteLink(id){
    fetch('/' + id, { method: 'DELETE' }).then(res => {
    if(res.status == 200){
        res.text().then(linkId => {
            document.getElementById(linkId).remove();
        })
    } else if(res.status == 404){
        res.json().then(error => {
            alert(error.message)
        })
    }
})}