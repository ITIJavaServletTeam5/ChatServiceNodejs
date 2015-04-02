var imageData

if (localStorage.user === undefined) {
    window.location = "/login.html";
};

$(document).ready(function () {
    var user = JSON.parse(localStorage.user)
    $("#displayName").val(user.displayName);
    $("#password").val(user.password);
    $("#mobile").val(user.mobile);
    $("#email").val(user.email);
    $("#fullName").val(user.fullName);

    var preview = document.querySelector("img");
    preview.src = user.profileImage;
    imageData = user.profileImage;
});

$("#edit").click(function () {
    var user = {
            displayName: $("#displayName").val(),
            password: $("#password").val(),
            mobile: JSON.parse(localStorage.user).mobile,
            email: $("#email").val(),
            fullName: $("#fullName").val(),
            profileImage: imageData
        }
    $.post("/rest/edit", user
        , function (data) {
        if (data.success === true) {
            console.log(data.success);
            window.location = "/view.html";

            // update the local data with the new data
            localStorage.user = JSON.stringify(user);
        } else {
            $("#error").html(
                "<div class=\"alert alert-danger alert-dismissable\">" +
                "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" +
                data.error +
                "</div>"
                )
        }
    })
})

// read image data
$("#profileImage").change(function () {
    var preview = document.querySelector("img")
    // var file = document.querySelector("input[type=file]").files[0]
    var file = $("#profileImage")[0].files[0]
    var reader = new FileReader()

    reader.onloadend = function () {
        preview.src = reader.result
        imageData = reader.result
    }

    if (file) {
        reader.readAsDataURL(file)
    } else {
        preview.src = ""
    }
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
