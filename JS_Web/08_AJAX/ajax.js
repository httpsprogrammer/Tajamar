
function app() {

        document.querySelector('#btnAjax').addEventListener('click',getDatos)
        
    

function getDatos() {
    let ajax = new XMLHttpRequest()//Esto es una función constructora
    ajax.onreadystatechange = stateChanged

    function stateChanged () {
    console.log('Cambio de estado')


}
ajax.open('GET','http://localhost:3000/post')
ajax.send(null)
}

}









window.addEventListener('load',app,false)