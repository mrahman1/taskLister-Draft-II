// const window =   window.onload = getLists()
let element = document.createElement('p')
element.innerText = "testing javascript"
document.body.appendChild(element)

function getLists(){
  fetch ('http://localhost:3000/lists')
    .then(res => res.json()).then(json => showList(json))
}


function showList(json){
  debugger;
div = document.getElementById('List')
let ul = document.createElement('ul')
json.forEach(function(list){
  link = `<li><a href="${list.url}">${list.name}</a></li>`
  ul.innertHTML += link
})
div.appendChild(ul)
}
