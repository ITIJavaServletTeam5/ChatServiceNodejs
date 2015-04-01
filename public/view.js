$(document).ready(function () {
    var user = JSON.parse(localStorage.user)
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