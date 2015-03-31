var messages = [];

$("#send").click(function() {
	$.get("/rest/send", {username: $("#username").val(), message: $("#message").val()}, function(data) {
		if (data.success === true) {
			console.log(data.success);
		};
	})
})


setInterval(function() {
	$.get("/rest/receive", {username: $("#username").val()}, function(data) {
		if (data.success === true) {
			// $("#messages").html("")
			console.log(data.messages)
			$("#messages").html("")
			for (var i = 0; i < data.messages.length; i++) {
				$("#messages").prepend(
			        "<div class=\"row\">" +
			            "<div class=\"col-lg-offset-4 col-lg-4\">" +
			                "<div class=\"panel panel-primary\">" +
			                    "<div class=\"panel-heading\">" +
			                        data.messages[i].source +
			                    "</div>" +
			                    "<div class=\"panel-body\">" +
			                        "<p>" + data.messages[i].message + "</p>" +
			                    "</div>" +
			                "</div>" +
			            "</div>" +
			        "</div>"
				);
			};

			$("#online").html("")
			for (var i = 0; i < data.online.length; i++) {
				$("#online").prepend(
                    data.online[i] + "</br>"
				);
			};
		};
	})
}, 2000);


function getUrlParameter(param) {
	var sPageUrl = window.location.search.substring(1);
	var sUrlVariables = sPageUrl.split('&');
	for (var i = 0; i < sUrlVariables.length; i++) {
		var sParameterName = sUrlVariables[i].split(('='));
		if (sParameterName[0] == param) {
			return sParameterName[1];
		};
	};
}

$(document).ready(function() {
	$("#username").val(getUrlParameter('username'));
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