// Router
window.addEventListener("hashchange", function(event){
	var hash = event.target.location.hash; // #!/account/47435675

	if(hash.substr(2,9) === "/account/"){
		var account = hash.substr(11); //47435675
		
		console.log(account);
		// Fetch account information from server
		// Display account information
	}
});