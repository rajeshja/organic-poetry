//
//  In my case I want to load them onload, this is how you do it!
// 
	Event.observe(window, 'load', loadAccordions, false);
	Event.observe(window, 'load', showNarrowMenu, false);

//
//	Set up all accordions
//
function loadAccordions(){
	
	var bottomAccordion = new accordion('vertical_container');
	
	var nestedVerticalAccordion = new accordion('vertical_nested_container', {
	  classNames : {
			toggle : 'vertical_accordion_toggle',
			toggleActive : 'vertical_accordion_toggle_active',
			content : 'vertical_accordion_content'
		}
	});
	if(collapse){
		
	// By commenting out the below, the first container is set to closed.
	bottomAccordion.activate($$('#vertical_container .accordion_toggle')[0]);
	nestedVerticalAccordion.activate($$('#vertical_nested_container .vertical_accordion_toggle')[accordionNo]);
	}
	else if(flag){
		// By commenting out the below, the first container is set to closed.
		bottomAccordion.activate($$('#vertical_container .accordion_toggle')[0]);
	}
	
}
var verticalAccordions = $$('.accordion_toggle');
verticalAccordions.each(function(accordion) {
    $(accordion.next(0)).setStyle({
        height: '0px'
    });
});

function showNarrowMenu(){
document.getElementById("vertical_nested_container").className = ""; 
}
