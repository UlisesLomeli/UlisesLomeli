console.log("Hola");

let li;
const http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
http.open("GET", url);
http.send();
http.onreadystatechange = (e) => {
    let divItem = document.getElementById("lista");
    let ul = document.createElement("ul");
    let data1 = JSON.parse(http.responseText)
    console.log(data1[0]);

    for (let item of data1) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(item.title));
        ul.appendChild(li);
    }

    divItem.appendChild(ul);
}