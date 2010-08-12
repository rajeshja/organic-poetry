function GetStoreInfoOfCityandState(){
document.weeklyadscityandstate.submit();
}

function GetStoreInfoOfZip(){
document.weeklyadszip.submit();
}
function WeeklyadsCategories(categoryid)
{
 document.weeklyadsCategories.catTreeId.value = categoryid;
 document.weeklyadsCategories.submit();
}
Event.observe(window, 'load', loadAccordions, false);
Event.observe(window, 'load', showNarrowMenu, false);
			
function loadAccordions() {
var bottomAccordion = new accordion('vertical_container');
var nestedVerticalAccordion = new accordion('vertical_nested_container', {
 classNames : {
 toggle : 'vertical_accordion_toggle',
 toggleActive : 'vertical_accordion_toggle_active',
 content : 'vertical_accordion_content'
}
});
}

var verticalAccordions = $$('.accordion_toggle');
verticalAccordions.each(function(accordion) {
    $(accordion.next(0)).setStyle({
        height: '0px'
    });
});

function sortProducts()
{
document.weeklyAdsSort.submit();
}

function showNarrowMenu(){
document.getElementById("vertical_nested_container").className = ""; 
}
