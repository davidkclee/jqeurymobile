$( document ).ready(function() {
	document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("menubutton", onMenuKeyDown, false);
	
    $("#btnEnter").click( function(){
		alert("hi");
	});
});

function onBackKeyDown() {
    // your code..
    alert('Back Button pressed..');
}
function onMenuKeyDown() {
	// your code..
	alert('Menu Button pressed..');
}