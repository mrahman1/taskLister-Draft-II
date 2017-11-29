// const window =   window.onload = getLists()
//window.addEventListener('load', event => console.log(event));
//
// let element = document.createElement('p');
// element.innerText = "testing javascript";
// document.body.appendChild(element);
function getLists(){
  //  debugger;
  fetch ('http://localhost:3000/lists')
    .then(res => res.json()).then(json => showLists(json))
}
function showLists(json){
  // debugger;
  let div = document.getElementById('List')
  let ul = document.createElement('ul')
  div
  json.forEach(list => {
    // <li><a href="#" onclick="getLists()">Get Lists</a></li>
    // debugger;
    link = `<li><a href="#" onclick = "getList(${list.id})">${list.name}</a></li>`
    ul.innerHTML += link
  })
  div.appendChild(ul)

}

function getList(id){
  fetch (`http://localhost:3000/lists/${id}`)
    .then(res => res.json()).then(json => showList(json))
}


function showList(json){
  let div = document.getElementById("List")
  //debugger;
  div.innerHTML = ""
  let link = `<h1>${json.list_info.name}</h1> <p>${json.list_info.description}</p>`
  div.innerHTML= link

  let table = document.getElementById("1")
  // debugger;
  if (table === null){
    table = document.createElement('table')
  }
  else {
    // debugger;
    table.innerHTML = " ";
  }

  table.style = "width:100%"
  table.id = "1"

  //debugger;
  let header = `<tr>
                <th> Name </th>
                <th> Date </th>
                <th> Description </th>
                </tr>`
  table.innerHTML = header


  json.tasks.forEach(task => {
    // <li><a href="#" onclick="getLists()">Get Lists</a></li>
    let tr = document.createElement('tr')
    let row = `<td>${task.name}</td><td>hey</td><td>there</td>`
    tr.innerHTML += row
    table.appendChild(tr)

  })

  div.appendChild(table)

}

function createList(form){
   debugger;
  fetch ('http://localhost:3000/lists',{method: "POST", body: JSON.stringify(list)})
  .then(res => res.json()).then(json => showList(json))
}

function createNewList(){

  let newForm = document.createElement('FORM')
  let name = `<label><input type="text" name="name"></label>
        <input type="submit" onclick="createList(newForm)">`
  let list = document.getElementById("List")
  newForm.innerHTML = name
  list.appendChild(newForm)
}
