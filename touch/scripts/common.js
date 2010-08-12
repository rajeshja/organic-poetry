function validate(thisform)
{
if (thisform.id.selectedIndex == 0 ){
      document.getElementById("errorMsg").style.display = "block";
	  document.getElementById("noSearch").style.display = "none";
	  if(document.getElementById("formError") != null){
		document.getElementById("formError").style.display = "none";
	  }
	  window.location.hash ="errorMsg";
	   return false;
    } else {
		return true;
	}
}
function validateuber(thisform)
{
if (thisform.qp.selectedIndex == 0 ){
      document.getElementById("errorMsg").style.display = "block";
	  document.getElementById("noSearch").style.display = "none";
	  if(document.getElementById("formError") != null){
		document.getElementById("formError").style.display = "none";
	  }
	  window.location.hash ="errorMsg";
	   return false;
    } else {
		return true;
	}
}
function showPrice(count) {
    var realPrice = document.getElementById('priceValue'+count);
    var hiddenPrice = document.getElementById('priceHidden'+count);	
    hiddenPrice.style.display = 'none';
    realPrice.style.display = 'block';    
   // if(document.prdListFrm != null && document.prdListFrm != 'undefined'){
    //	document.prdListFrm.ctv.value="y";
   // }
}

function validate_form(thisform)
{
if (thisform.st.value == null || thisform.st.value=="" || thisform.st.value=="Enter keyword or item #"){
  document.getElementById("noSearch").style.display = "block";
  document.getElementById("errorMsg").style.display = "none";
   if(document.getElementById("formError") != null){
		document.getElementById("formError").style.display = "none";
   }
  window.location.hash ="noSearch";	   
	   return false;
    } else {
		return true;
	}
}
function checkCCType(val)
{
	if(val=='')
	{
		document.paymentform.selCreditCardType.value='';
	}
}

function updateCTV(contextPath,skuId)
{
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
		xmlhttp.onreadystatechange=function(){};
		xmlhttp.open("GET", contextPath+"/priceblock/ctvTracking.jsp?skuId="+skuId,true);
		xmlhttp.send(null);
	}
}

function showPricePDP() {
    var realPrice = document.getElementById('priceValue');
    var hiddenPrice = document.getElementById('priceHidden');	
    hiddenPrice.style.display = 'none';
    realPrice.style.display = 'block';
}
function sendSmsMessage()
{
	document.sendemailtofriend.submit();
}
function sendEmailMessage()
{
	document.sendemailtofriendname.submit();
	
}
function showPriceDetails() {
	var realPrice = document.getElementById('priceValue');
    var hiddenPrice = document.getElementById('priceHidden');	
    hiddenPrice.style.display = 'none';
    realPrice.style.display = 'block';
}
function orderSearch(){		
		document.ordernosearch.submit();
}
function searchSubmit()
{
		
if(validate_form(document.searchform))
{
document.searchform.submit();
}
}
function sortProducts(){

document.sortOption.submit();

}
function searchForFooter()
{
if(validate_form(document.searchFormFooter))
{
document.searchFormFooter.submit();
}
}
function browseAllProducts(){

document.browseallproducts.submit();

}
function signInOfUser()
{
document.frmSignIn.submit();
}

function signInbeforecheckout()
{
document.frmSignIn.submit();
}
function createAccountForUser()
{
document.frmCreateAccountExplicit.submit();
}
function addBillingAddress()
{
	if(document.getElementById("addOve")!=undefined)
	{
		var flag = document.getElementById("addOve").checked;
			if(flag){
				document.frmBillAddress.addOveFg.value="true";
			}else {
				document.frmBillAddress.addOveFg.value="false";
			}
		}
	document.frmBillAddress.submit();
}
function addPaymentMethod()
{
document.paymentform.submit();
}
function findStoreForZip(){
document.frmStoreLocatorzip.submit();
}

function findStoreForCityState(){
document.frmStoreLocatorstate.submit();
}
/*javascript changes for geolocation start*/

var zipCodeElement;
var cityElement;
var stateElement;
var zipCode;
var city;
var state;

// Check if the browser supports native geolocation and make a call to the geolocation service
function findLocation(zipCodeId, cityId, stateId) {
	if(navigator.geolocation) {  
		//reset ZipCode, City ans State fields.    	
		resetSearchFields(zipCodeId, cityId, stateId);	    		
		//timeout setting for geolocation API call
		positionOptions = { timeout: 10000 };
		//invoke geolocation    
		navigator.geolocation.getCurrentPosition(successCallback,errorCallback,positionOptions);
	} else {   
		//Unable to get the navigator object.
	}
}
function resetSearchFields(zipCodeId, cityId, stateId){
	zipCodeElement = document.getElementById(zipCodeId);
	cityElement = document.getElementById(cityId);
	stateElement = document.getElementById(stateId);
	if (zipCodeElement != null && zipCodeElement != 'undefined') {
		zipCode = zipCodeElement.value;
		zipCodeElement.value="";
	}
	if (cityElement != null && cityElement != 'undefined') {
		city = cityElement.value;
		cityElement.value="";
	}
	if (stateElement != null && stateElement != 'undefined') {
		state = stateElement.value;
		stateElement.value="";
	}
}

//method to show error msg and updatelocation link
function displayUpdateLocation(errorLoc, acquireLoc, updateLoc, updateBorder, displayResults, tvsrchfltr) {	
	var updateLocation = document.getElementById("update_location");
	var border=document.getElementById("update_border");	
	var assortmentResultsId = document.getElementById("displayResultsId");
	var tvsrchfilter= document.getElementById("tvsrchfltr-param");	
	var errorLocation = document.getElementById("error_loc");
	var messages = document.getElementById("messages");
	document.getElementById("acquiring_location").style.display=acquireLoc;
	
	if (updateLocation != null && updateLocation != 'undefined') {
		updateLocation.style.display=updateLoc;
	}	
	if (border != null && border != 'undefined') {
		border.style.display=updateBorder;
	}	
	if (assortmentResultsId != null && assortmentResultsId != 'undefined') {
		assortmentResultsId.style.display=displayResults;
	}
	if (tvsrchfilter != null && tvsrchfilter != 'undefined') {
		tvsrchfilter.style.display=tvsrchfltr;
	if (messages != null && messages != 'undefined') {
		if(errorLoc!=''){			
			messages.style.display="none";			
			errorLoc="Unable to acquire location.";	
					
		}else{				
			messages.style.display="block";
		}		
		}		
	}
	errorLocation.innerHTML=errorLoc;
}

// Extract the latitude and longitude from the response
function successCallback(position) {	
	displayUpdateLocation("", "block", "none", "none", "none", "none");
	makeZipCodeRequest(position.coords.latitude, position.coords.longitude);  
}
// There was an error
function errorCallback(error){
	if(error.code == 1) {
		//No error message shown here	
      		 zipCodeElement.value=zipCode;
      		 cityElement.value=city;
      		 stateElement.value=state;  
		 displayUpdateLocation('', "none", "block", "block", "block", "block");
		 displayBorder();

	} else {
		var msg = "Currently unable to find location.<br/>Please use form below.<br/><br/>";
		displayUpdateLocation(msg, "none", "block", "block", "none", "block");
		displayBorder();
	}
}
//This function makes ajax call to get the zip code from map point.
function makeZipCodeRequest(latitude,longitude){
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (xmlhttp){
		xmlhttp.open("POST","/m/e/autolocation.jsp",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("latitude="+latitude+"&"+"longitude="+longitude);
	}
	xmlhttp.onreadystatechange=function() {
		var msg='';		
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		var zipCode =  trim(xmlhttp.responseText);
		if (zipCode==''){
			msg="Currently unable to find location.<br/>Please use form below.<br/><br/>";			
		} else {
			zipCodeElement.value=trim(zipCode);
		}      
	} else if(xmlhttp.status==404){
		msg="Currently unable to find location.<br/>Please use form below.<br/><br/>";
	}	
	displayUpdateLocation(msg, "none", "block", "block", "block", "block");
	displayBorder();
	}
}
//This function is used to trim a string
function trim(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,"");
}

function getGeoLocation(storeZipCode,storeCity,storeState) { 
	if (!hasClicked) {		
		findLocation(storeZipCode,storeCity,storeState); 	 
	}
	hasClicked = true;
}

//This function is used to display border
function displayBorder() {			
	document.getElementById("update_border").style.display="block";	
}



