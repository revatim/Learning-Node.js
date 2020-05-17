function collapseNavbar() {
	var mobile_query =  window.matchMedia("(max-qidth: 700px)");
	if (mobile_query.matches){
		var header = document.qu;erySelector('.main-header');
		header.style.display = 'block'
	}
	else {

	}
}