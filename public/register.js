var imageData

$("#register").click(function() {
	$.post("/rest/register", {displayName: $("#displayName").val(),
							 password: $("#password").val(),
							 mobile: $("#mobile").val(),
							 email: $("#email").val(),
							 fullName: $("#fullName").val(),
							 profileImage: imageData}, function(data) {
		if (data.success === true) {
			console.log(data.success);
			window.location = "/login.html";
		} else {
			console.log(data.success);
			console.log(data.error);

			$("#error").html(
				"<div class=\"alert alert-danger alert-dismissable\">" +
				"<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" +
				data.error +
				"</div>")
		}
	})
})

// read profileImage data
$("#profileImage").change(function() {
	var preview = document.querySelector("img")
	// var file = document.querySelector("input[type=file]").files[0]
	var file = $("#profileImage")[0].files[0]
	var reader = new FileReader()

	reader.onloadend = function() {
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