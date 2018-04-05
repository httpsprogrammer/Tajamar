
function app() {
    let count =0
    let aLink = document.querySelector('.social')
const ITEM = aLink.lenght 
function cambiaLista(ev) {
    let nodeItem = ev.target
    if (nodeItem.textContent.indexOf('Ops') >=0) {
        return
    }
    nodeItem.textContent = 'Opps, no tengo '+nodeItem.textContent;
    count++
    if (count === ITEMS) {
        
    }
    
}


}

window.addEventListener('load', app)




