// // Post a user

// var url = "http://localhost:8080/api/v1/users";

var url = 'https://my-json-server.typicode.com/typicode/demo/posts';

var data = {
    id: "4",
    title: "Post 4"
};

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();

xhr.open("POST", url, true);

xhr.setRequestHeader('Content-type', 'application/json; charset = utf - 8 ');

xhr.onload = function() {

    var users = JSON.parse(xhr.responseText);

    if (true) {

        console.table(users);

    } else {

        console.error(users);

    }

}
xhr.send(json)