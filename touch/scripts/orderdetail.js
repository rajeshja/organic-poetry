$(document).ready(function(){
$("#product-image").click( function(event) {
event.preventDefault();
$(".hproduct").before('<div id="large-image"><div id="contents"><a href="#close">Close</a><br /><img src="'+this.href+'" alt="'+this.title+'" align="top"/></div><div id="underlay">&nbsp;</div></div>');
$("#large-image").fadeIn("slow");
$("#large-image").click( function(event) {
event.preventDefault();
$("#large-image").fadeOut("slow");
});
});
//Toggle the closed and open states
$("#product-overview").click( function() { toggleBox.normal(this.id); });
$("#customer-overview-summary").click( function() { toggleBox.normal("customer-overview"); });
$("#customer-overview-closed").click( function() { toggleBox.normal("customer-overview"); });
$("#hide-reviews").click( function() { toggleBox.normal("customer-overview"); });
$("#specs-overview").click( function() { toggleBox.normal(this.id); });
//Toggle each summary
$(".hreview").click (function () {
//Toggle the Review
$("#"+this.id+"-hidden").toggle();
//Force Anchor
location.href="#"+this.id;
});
});
var toggleBox = {
normal:function(id){
//Toggle Elements
$("#"+id+"-closed").toggle();
$("#"+id+"-open").toggle();
//Toggle Header Classes
$('#'+id+'-head').toggleClass("right").toggleClass("down");
//Force Anchor
location.href="#"+id;
},
review:function(id){
//Toggle Elements
$("#"+id+"-closed").toggle();
$("#"+id+"-open").toggle();
//Toggle Header Classes
$('#'+id+'-head').toggleClass("right").toggleClass("down");
//Force Anchor
location.href="#"+id;
}
}

function toggleBoxPDP(open, closed) {
var openState = document.getElementById(open);
var closedState = document.getElementById(closed);
if(openState.style.display != 'block') {
closedState.style.display = 'none';
openState.style.display = 'block';
} else {
closedState.style.display = 'block';
openState.style.display = 'none';
}
}
function changeClass(element, down, right) {
var headerGraphic = document.getElementById(element);
var downName = down;
var rightName = right;
if ( headerGraphic.className != downName ) {
headerGraphic.className = downName;
} else {
headerGraphic.className = rightName;
}
}
