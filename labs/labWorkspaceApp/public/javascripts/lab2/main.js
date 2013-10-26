$(document).ready(function() {
	/* Write code here */
	$.ajax({
		url : "http://localhost:3000/employees",
		method: "POST",
		data : {
			name : "Rolo",
			email : "rkalkur@mitre.org",
			rank : 6,
			title : "Engineerred"
		},
		success : function(response) {
			console.log(response);
		}
	});
});