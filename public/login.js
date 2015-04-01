$("#login").click(function () {
    $.post("/rest/login", {mobile: $("#mobile").val(), password: $("#password").val()}, function (data) {
        if (data.success === true) {
            // if (typeof (Storage) != "undefined") {
                // Store
            localStorage.user = JSON.stringify(data.user);
            console.log(JSON.parse(localStorage.user));
            // }
            console.log(data.success);
            window.location = "/view.html";
        } else {
            $("#signInForm").html(
                    "<div class=\"alert alert-danger alert-dismissable\">" +
                    "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" +
                    data.error +
                    "</div>"
                    )
        }
    })
})

// $(document).ready(function () {
//     // send button
//     $("#send").click(function() {
//         $.post("/chat", {message: $("#message").val(), source: $("#username").val()}, function(data) {
//             console.log(data);
//             $("#message").val("").focus();
//         });
//     });

//     setInterval(
//         function() {
//             $.get("/chat", function (data) {
//                 var messages = JSON.parse(data);
//                 $("#chat").html("");
//                 for (var i = 0; i < messages.length; i++)
//                 {
//                     $("#chat").prepend("<div>" + messages[i].source + ": " + messages[i].data + "</div>");
//                 }
//             })},
//         500);
// });