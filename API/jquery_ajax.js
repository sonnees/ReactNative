const urlBacon = "https://jsonplaceholder.typicode.com/todos";

(function() {
    $.ajax({

        method: "GET",

        url: urlBacon,

        dataType: "json"

    })

    .done(function(data) {

        console.log(data);

    })

    .fail(function() {

        alert("no good");

    });

})()



$.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text;charset = x - user - defined ");
        }
    })
    .done(function(data) {
        console.log("Sample of data:",
            data.slice(0, 100))
    });