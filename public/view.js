if (localStorage.user === undefined) {
	window.location = "/login.html";
};

$(document).ready(function () {

    var user = JSON.parse(localStorage.user);
    $("#displayName").html(user.displayName);
    $("#mobile").html(user.mobile);
    $("#email").html(user.email);
    $("#fullName").html(user.fullName);

    var preview = document.querySelector("img");
    preview.src = user.profileImage;
})

$("#edit").click(function() {
	window.location = "/edit.html";
})


$("#logout").click(function() {
	localStorage.removeItem("user");
	window.location = "/login.html";
})
