// Router
var ul = document.querySelector("#links");
var baseUrl = "https://rawgit.com/1dv022/syllabus/master/lectures/05/example/pushstate/";

ul.addEventListener("click", function(event){
	event.preventDefault();

	var stateObj =  { 
		accountnbr: event.target.getAttribute("data-account"),
		account: event.target.getAttribute("data-account-title")
	}

	history.pushState(stateObj, 
		"Account information: "+stateObj.account, 
		baseUrl+"account/"+stateObj.accountnbr);
	
	// Load accountinformation and show it
	console.log(stateObj);
});


window.addEventListener("popstate", function(event){

	// When an old state is triggered. 
	console.log(event.state.account + " with account number " + event.state.accountnbr);

});
