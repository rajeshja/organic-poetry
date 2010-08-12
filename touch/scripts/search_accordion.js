$(document).ready(function() {		
	$(".trigger").click(function() {
		$(".trigger").toggleClass("closed, opened");
		$(".dropdownis").toggleClass("closed, opened");		
		$(".dropdown-opened").toggle();		
		$("#narrowby-accordion").accordion({
			header: 'h3', 
			active: false, 
			collapsible: true
		});

	});
	
});

