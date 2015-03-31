$("#login").click(function() {
	$.get("/rest/login", {username: $("#username").val(), password: $("#password").val()}, function(data) {
		if (data.success === true) {
			console.log(data.success);
			window.location = "/chat.html?username=" + $("#username").val();
		} else {
			$("#signInForm").html(
                            "<div class=\"alert alert-danger alert-dismissable\">" +
                                "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>" +
                                "wrong username or password" +
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