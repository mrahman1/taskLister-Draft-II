// const window =   window.onload = getLists()
//window.addEventListener('load', event => console.log(event));
//
// let element = document.createElement('p');
// element.innerText = "testing javascript";
// document.body.appendChild(element);

function getLists(){
  //  debugger;
  fetch ('http://localhost:3000/lists')
    .then(res => res.json()).then(json => showList(json))
}


function showList(json){
  // debugger;
  div = document.getElementById('List')
  let ul = document.createElement('ul')
  json.forEach(list => {
    link = `<li><a href="http://localhost:3000/lists/${list.id}">${list.name}</a></li>`
    ul.innerHTML += link
  })
  div.appendChild(ul)
}
