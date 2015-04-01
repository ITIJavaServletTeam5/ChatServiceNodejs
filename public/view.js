$(document).ready(function () {
    var user = JSON.parse(localStorage.user)
    $("#username").val(user.displayName);
    $("#password").val(user.password);
    $("#mobile").val(user.mobile);
    $("#image").val(user.profileImage);
})

$("#edit").click(function() {
	window.location = "/edit.html";
})