'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var URL = "http://localhost:3000/project/" + idNumber;
	// console.log(URL);
	$.get(URL, callBackFn);
	console.log("User clicked on project " + idNumber);
	//Insert the project details

	//$("#" + projectID + " .details").html(callBackFn);

}

function callBackFn(result) {
	console.log(result);
	if (result['title'] != undefined) {
		var projectHTML =
		'<article>'+
			'<header>' +
				'<h4>' + result['title'] + '</h4>' +
				'<h4>' + result['date'] + '</h4>' +
			'</header>' +
			'<main>' +
				'<img class="detailsImage" src="' + result['image'] + '"alt="picture">' +
				result['summary'] +
			'</main>' +
		'</article>';

		var pID = 'project' + result['id'];
		console.log('pid is:' + pID);
		$("#" + pID + " .details").html(projectHTML);

	}

}
