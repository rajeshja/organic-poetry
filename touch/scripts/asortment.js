function constructQueryForAssortionNarrow()
{
	var c_value ="";
	var url ="/m/e/assortment/assortmentCount.jsp?query="
	c_value=sliderbarvalue(c_value,document.getElementById('amount1').value,document.getElementById('amount').value,"pricerange=");
	c_value=sliderbarvalue(c_value,document.getElementById('amount3').value,document.getElementById('amount2').value,"screenrange=");

	for(i=0;i<document.forms.length;i++){
	if(!(document.forms[i].name.indexOf("formName")== -1)){
	c_value=constructurl(c_value,document.forms[i].elements);
	}
	}
	
	var messages = document.getElementById("messages");
	if(messages != null && messages != 'undefined' && messages.style.display=="none"){		
		messages.style.display="block";
		document.getElementById("error_loc").innerHTML='';
	}
	
	url =url + c_value;
	if(document.getElementById('expandSearch').checked){
	 url =url + "expandSearch =true;";
	document.getElementById("onlineonlyitems").style.display="block";	
	document.getElementById("storeonlyitems").style.display="none";	
	document.getElementById("onlineId").style.display="none";	
	}else{
	document.getElementById("storeonlyitems").style.display="none";	
	document.getElementById("onlineonlyitems").style.display="none";
	document.getElementById("onlineId").style.display="block";	
	}
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(xmlhttp)
	{
		xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			var filteredCount =  trim(xmlhttp.responseText);
			if(document.getElementById('expandSearch').checked){
			
			if(filteredCount == 0){
				document.getElementById("expandId").style.display="block";
				if(document.getElementById("formException") != undefined){
					document.getElementById("formException").style.display="none";
				}
				if(document.getElementById("noItemsId") != undefined){
					document.getElementById("noItemsId").style.display="none";
				}
				if(document.getElementById("displayResultsDisableId") != undefined){
					document.getElementById("displayResultsDisableId").style.display="block";
				}
				if(document.getElementById("displayResultsEnableId") != undefined){
					document.getElementById("displayResultsEnableId").style.display="none";
				}

			}else{
				if(document.getElementById("formException") != undefined){
					document.getElementById("formException").style.display="none";
				}
				if(document.getElementById("noItemsId") != undefined){
				document.getElementById("noItemsId").style.display="none";
				}
				if(document.getElementById("expandId") != undefined){
				document.getElementById("expandId").style.display="none"; 
				}
				if(document.getElementById("displayResultsDisableId") != undefined){
					document.getElementById("displayResultsDisableId").style.display="none";
				}
				if(document.getElementById("displayResultsEnableId") != undefined){
					document.getElementById("displayResultsEnableId").style.display="block";
				}
			}
			 document.getElementById("acquiringId").style.display="none";
			 document.getElementById("displayResultsId").style.display="block";
			 document.getElementById("expand").innerHTML=xmlhttp.responseText;
			}else{
			if(filteredCount == 0){
				document.getElementById("noItemsId").style.display="block";
				if(document.getElementById("formException") != undefined){
					document.getElementById("formException").style.display="none";
				}
				if(document.getElementById("expandId") != undefined){
					document.getElementById("expandId").style.display="none";
				}
				if(document.getElementById("displayResultsDisableId") != undefined){
					document.getElementById("displayResultsDisableId").style.display="block";
				}
				if(document.getElementById("displayResultsEnableId") != undefined){
					document.getElementById("displayResultsEnableId").style.display="none";
				}
			}else{
				document.getElementById("expandId").style.display="none";
				document.getElementById("noItemsId").style.display="none";
				if(document.getElementById("displayResultsDisableId") != undefined){
					document.getElementById("displayResultsDisableId").style.display="none";
				}
				if(document.getElementById("displayResultsEnableId") != undefined){
					document.getElementById("displayResultsEnableId").style.display="block";
				}
			}
			 document.getElementById("acquiringId").style.display="none";
			 document.getElementById("displayResultsId").style.display="block";
			 document.getElementById("expand").innerHTML=xmlhttp.responseText;
			}
			}else if(xmlhttp.readyState==3){
				document.getElementById("displayResultsId").style.display="none";
				document.getElementById("acquiringId").style.display="block";
				}
		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send(null);
	}
}

function constructurl(c_value,option){
 var c =0;
 for (var i=0; i < option.length; i++)
   {
	
	if(option[i].type=="checkbox")
	{
	if (option[i].checked)
      {
	if(c>0){
		  c_value = c_value + "," + option[i].value;
	}else{
	  
	  c_value = c_value + option[i].name+"=";
	  c_value = c_value + option[i].value;
	}
	c++;
      }
   if(i==option.length-2 && c>0){
		c_value = c_value +";";
	}
   }
}	
return c_value;
}

function sliderbarvalue(c_value,minvalue,maxvalue,rangetype){
	var min = minvalue;
	var max= maxvalue;
	min = min.replace("\"", "inches");
	max = max.replace("\"", "inches");
c_value =c_value + rangetype +min+","+max+";";
return c_value;
}
function checkRefineFacets(startOver){
 var refineCount=1;
    for(index=0;index<document.forms.length;index++){
    if(!(document.forms[index].name.indexOf("formName")== -1)){
	  if (startOver == 'yes') {
		startOverRefine(document.forms[index].elements,refineCount);
	  }else{
		makeFacetsSelected(document.forms[index].elements,refineCount);
	  }
         refineCount++;
         }
      }
}
function makeFacetsSelected(option,tickboxId){
      for (var index=0; index < option.length; index++) {
      if(option[index].type=="checkbox") {
           if (option[index].checked) {
              filterChecked(tickboxId);
          }
        }
     }             
}
function startOverRefine(option,tickboxId){
      for (var index=0; index < option.length; index++) {
      if(option[index].type=="checkbox") {
           if (option[index].checked) {
             option[index].checked=false;
          }
        }
     }             
}

function disableDisplayResults(filteredCount){
if(filteredCount > 100 || filteredCount == 0){

	if(document.getElementById("displayResultsDisableId") != undefined){
		document.getElementById("displayResultsDisableId").style.display="block";
	}
	if(document.getElementById("displayResultsEnableId") != undefined){
		document.getElementById("displayResultsEnableId").style.display="none";
	}
}else{
	if(document.getElementById("displayResultsDisableId") != undefined){
		document.getElementById("displayResultsDisableId").style.display="none";
	}
	if(document.getElementById("displayResultsEnableId") != undefined){
		document.getElementById("displayResultsEnableId").style.display="block";
	}

}

}

$(document).ready(function() { //When page loads...
 $(".tab_content").hide(); //Hide all content
 $("ul.tabs li:first").addClass("active").show(); //Activate first tab
 $(".tab_content:first").show(); //Show first tab content
 //On Click Event
 $("ul.tabs li").click(function() {
 $("ul.tabs li").removeClass("active"); //Remove any "active" class
 $(this).addClass("active"); //Add "active" class to selected tab
 $(".tab_content").hide(); //Hide all tab content
 var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
 $(activeTab).show(); //Fade in the active ID content
 return false;
 });
}); 
/*function for checking the technology starts*/
<!--function Check(chk){if(document.myform.Check_ctr.checked==true){for (i = 0; i < chk.length; i++)chk[i].checked = false ;}}-->
/*function for checking the technology ends*/


function setSliderRange(min, max, refreshType){
	
	if (refreshType == 'pageOnload') {
		$(function() {
			$("#slider-range").slider({
				range: true,
				orientation: "vertical",
				min: 1,
				max: 3000,
				values: [min, max],
				slide: function(event, ui) {
					$("#amount").val('$' + ui.values[0]);
					$("#amount1").val('$' + ui.values[1]);
				},
				stop: function(event, ui){
					constructQueryForAssortionNarrow();
				},
				change: function(event, ui) {
					$("#amount").val('$' + ui.values[0]);
					$("#amount1").val('$' + ui.values[1]);
					$("#slider1").show();
					constructQueryForAssortionNarrow();
				}

			});
			$("#amount").val('$' + $("#slider-range").slider("values", 0));		
			$("#amount1").val('$' + $("#slider-range").slider("values", 1));
			$("#slider-range").draggable({helper: 'clone'}).addTouch();

		});
	}
}
/*slider1 function ends*/
/*slider2 function starts*/

function setSCrSizeSliderRange(min1, max1, refreshType1){
	if (refreshType1 == 'pageOnload') {
		$(function() {			
			$("#slider-range2").slider({
				range: true,
				orientation: "vertical",
				min: 1,
				max: 60,
				values: [min1, max1],
				slide: function(event, ui) {
					$("#amount2").val(ui.values[0] + '"');
					$("#amount3").val(ui.values[1] + '"');
				},
			stop: function(event, ui){
				constructQueryForAssortionNarrow();
				},
			change: function(event, ui) {
				$("#amount2").val(ui.values[0] + '"');
				$("#amount3").val(ui.values[1] + '"');
				$("#slider2").show()			
				var screensize1 = document.getElementById('amount2');				
				var screensize2 = document.getElementById('amount3');				
				if((screensize1.value == '1' + '"') && (screensize2.value == '60' + '"') )
				{
					$('#slider2').hide();
					$("#amount3").val(ui.values[1] + '"');					
					}
				else{
					$('#slider2').show();					
				}
				constructQueryForAssortionNarrow();
			}

			});
			$("#amount2").val($("#slider-range2").slider("values", 0) + '"');		
			$("#amount3").val($("#slider-range2").slider("values", 1) + '"');
			$("#slider-range2").draggable({helper: 'clone'}).addTouch();
		});
	}
}
/*slider2 function ends*/
/*reset zip starts*/
$(document).ready(function() {
$(".TVsrchfltr").click(function (){
      $(".TVsrchfltr-param").toggle("slide", { direction: "up" }, 500);
	if ($(this).hasClass("ron")){   		
	}else{
		$('#noItemsId').hide();
		$('#expandId').hide();
		$('#formException').hide();		
		findLocation('tvzip','city','state');
	} 	
	  $(this).toggleClass('ron');
/*      $(".TVsrchfltr-param").toggle();*/
});
});
/*reset zip ends*/
/*class for radio image starts*/
    function setupLabel() {
	if ($('#label_radio input').length) {
            $('#label_radio').each(function(){ 
                $(this).removeClass('r_on');
            });
            $('#label_radio input:checked').each(function(){ 
                $(this).parent('div').addClass('r_on');
				  $('#tickbox1').hide();
				  $(".param").removeAttr("checked");
			});
        };
    };
    $(document).ready(function(){
        $('body').addClass('has-js');        
        //setupLabel(); 
    });

function filterChecked(id) {
	var labelRadioId= "label_radio"+id;
	var labelRadioObj=document.getElementById(labelRadioId);
	var tickboxId= "tickbox"+id;
	var tickboxObj=document.getElementById(tickboxId);
	$(labelRadioObj).removeClass('r_on');
	$(tickboxObj).show();
}

function noPreference(id) {
	var labelRadioId= "label_radio"+id;
	var labelRadioObj=document.getElementById(labelRadioId);
	var tickboxId= "tickbox"+id;
	var tickboxObj=document.getElementById(tickboxId);	
	$(labelRadioObj).addClass('r_on');
	$(tickboxObj).hide();
	$(".param"+id).removeAttr("checked");
	constructQueryForAssortionNarrow();
}
/*class for radio image ends*/
/*hide tickbox and check radio when no checkbox is checked starts*/
/*for technology starts */
$(document).ready(function(){
$(function() {
  $('.param1').click(function() {
    var satisfied1 = $('#tvType1:checked').val();
    var satisfied2 = $('#tvType2:checked').val();
    var satisfied3 = $('#tvType3:checked').val();
    var satisfied4 = $('#tvType4:checked').val();
    var satisfied5 = $('#tvType5:checked').val();
    var satisfied6 = $('#tvType6:checked').val();	
	
    if((satisfied1 != undefined) || (satisfied2 != undefined) || (satisfied3 != undefined) || (satisfied4 != undefined) || (satisfied5 != undefined) || (satisfied6 != undefined) ) 
	{
	$('#tickbox1').show();
	$('#label_radio1').removeClass('r_on')
	}
    else {
	$('#tickbox1').hide();
       $('#label_radio1').each(function(){ 
           $(this).addClass('r_on');
        });
	}
  });
});
});
/*for technology ends*/
/*for brand starts*/
$(document).ready(function(){
$(function() {
  $('.param2').click(function() {
    var satisfied1 = $('#manufacturer1:checked').val();
    var satisfied2 = $('#manufacturer2:checked').val();
    var satisfied3 = $('#manufacturer3:checked').val();	
    var satisfied4 = $('#manufacturer4:checked').val();	
    var satisfied5 = $('#manufacturer5:checked').val();	
    var satisfied6 = $('#manufacturer6:checked').val();		
    var satisfied7 = $('#manufacturer7:checked').val();		
	
	
    if((satisfied1 != undefined) || (satisfied2 != undefined) || (satisfied3 != undefined) || (satisfied4 != undefined) || (satisfied5 != undefined) || (satisfied6 != undefined) || (satisfied7 != undefined) ) 
	{
	$('#tickbox2').show();
	$('#label_radio2').removeClass('r_on')
	}
    else {
	$('#tickbox2').hide();
       $('#label_radio2').each(function(){ 
           $(this).addClass('r_on');
        });
	}
  });
});
});
/*for brand ends*/
/*for vertical resoultion starts*/
$(document).ready(function(){
$(function() {
  $('.param3').click(function() {
    var satisfied1 = $('#verticalResolution1:checked').val();
    var satisfied2 = $('#verticalResolution2:checked').val();
    var satisfied3 = $('#verticalResolution3:checked').val();	
	
    if((satisfied1 != undefined) || (satisfied2 != undefined) || (satisfied3 != undefined) ) 
	{
	$('#tickbox3').show();
	$('#label_radio3').removeClass('r_on')
	}
    else {
	$('#tickbox3').hide();
       $('#label_radio3').each(function(){ 
           $(this).addClass('r_on');
        });
	}
  });
});
});
/*for vertical resolution ends*/
/*for refresh rate starts*/
$(document).ready(function(){
$(function() {
  $('.param4').click(function() {
    var satisfied1 = $('#screenRefreshRate1:checked').val();
    var satisfied2 = $('#screenRefreshRate2:checked').val();
    var satisfied3 = $('#screenRefreshRate3:checked').val();	
    var satisfied4 = $('#screenRefreshRate4:checked').val();		
	
    if((satisfied1 != undefined) || (satisfied2 != undefined) || (satisfied3 != undefined) || (satisfied4 != undefined) ) 
	{
	$('#tickbox4').show();
	$('#label_radio4').removeClass('r_on')
	}
    else {
	$('#tickbox4').hide();
       $('#label_radio4').each(function(){ 
           $(this).addClass('r_on');
        });
	}
  });
});
});
/*for refresh rate ends*/
/*for HDMI starts*/
$(document).ready(function(){
$(function() {
  $('.param5').click(function() {
    var satisfied1 = $('#hdmiInputs1:checked').val();
    var satisfied2 = $('#hdmiInputs2:checked').val();
    var satisfied3 = $('#hdmiInputs3:checked').val();	
    var satisfied4 = $('#hdmiInputs4:checked').val();		
	
    if((satisfied1 != undefined) || (satisfied2 != undefined) || (satisfied3 != undefined) || (satisfied4 != undefined) ) 
	{
	$('#tickbox5').show();
	$('#label_radio5').removeClass('r_on')
	}
    else {
	$('#tickbox5').hide();
       $('#label_radio5').each(function(){ 
           $(this).addClass('r_on');
        });
	}
  });
});
});

/*for HDMI nds*/
/*hide tickbox and check radio when no checkbox is checked ends*/
/*script for start over button starts*/
function startOver(stOver){
	if(stOver == 'true'){
		document.formName3.reset()
		document.formName4.reset()
		document.formName5.reset()
		document.formName6.reset()
		document.formName7.reset()
		$('#tickbox1').hide();$('#tickbox2').hide();$('#tickbox3').hide();$('#tickbox4').hide();$('#tickbox5').hide();
		$('#label_radio1').each(function(){ 
           		$(this).addClass('r_on');
        	});
		$('#label_radio2').each(function(){ 
           		$(this).addClass('r_on');
        	});
		$('#label_radio3').each(function(){ 
           		$(this).addClass('r_on');
        	});
		$('#label_radio4').each(function(){ 
           		$(this).addClass('r_on');
        	});
		$('#label_radio5').each(function(){ 
           		$(this).addClass('r_on');
        	});
		checkRefineFacets("yes");
		setSliderRange(defaultPriceMin,defaultPriceMax,'pageOnload');
		setSCrSizeSliderRange(defaultScreenMin,defaultScreenMax,'pageOnload');
		if(defaultParentList){	
			document.getElementById('expandSearch').checked = true;
		}else{	
			document.getElementById('expandSearch').checked = false;
		}
		constructQueryForAssortionNarrow();	
	}
}
$(document).ready(function(){
	$('#start_over').click(function() {
		startOver('true');
	});
});
/*script for start over button ends*/

/*Laptop - slider2 function starts*/

function setSCrSizeSliderRangeLT(min1, max1, refreshType1){
	if (refreshType1 == 'pageOnload') {
		$(function() {			
			$("#slider-range2").slider({
				range: true,
				orientation: "vertical",
				min: 1,
				max: 18,
				values: [min1, max1],
				slide: function(event, ui) {
					$("#amount2").val(ui.values[0] + '"');
					$("#amount3").val(ui.values[1] + '"');
				},
			stop: function(event, ui){
				constructQueryForAssortionNarrow();
				},
			change: function(event, ui) {
				$("#amount2").val(ui.values[0] + '"');
				$("#amount3").val(ui.values[1] + '"');
				$("#slider2").show()			
				var screensize1 = document.getElementById('amount2');				
				var screensize2 = document.getElementById('amount3');				
				if((screensize1.value == '1' + '"') && (screensize2.value == '18' + '"') )
				{
					$('#slider2').hide();
					$("#amount3").val(ui.values[1] + '"');					
					}
				else{
					$('#slider2').show();					
				}
				constructQueryForAssortionNarrow();
			}

			});
			$("#amount2").val($("#slider-range2").slider("values", 0) + '"');		
			$("#amount3").val($("#slider-range2").slider("values", 1) + '"');
			$("#slider-range2").draggable({helper: 'clone'}).addTouch();
		});
	}
}
/*Laptop - slider2 function ends*/