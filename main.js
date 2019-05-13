//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let person_template = _.template($("#person_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html());

	_.each(data, function (person) {
		$("#character").append(option_template({ state: person.state }));
	});

	$('.Alabama').css('display', 'block');
	$('#character').on("change", function (e) {
		$('.Alabama').css('display', 'none');
		e.preventDefault(); //disable the button's default behavior
		// DO STUFF...
		persons_name = $("#character").val();
		result = _.find(data, { state: persons_name });
		// result2 = _.find(data, { number: persons_name })
		// console.log(result);
		// console.log(result2);
		// $("#favorites").html(person_template({ Alabama: result }));
		$("#favorites").html(person_template({ person: result }));

	});

	$("#character").val($("#character option:first").val());

}); // closes document ready

$("body").on("click", ".start-btn", function (e) {
	e.preventDefault();

	const myPath = $(this);
	mySlide = myPath.data('id'),
		mySlideBackground = mySlide + "-background";

	$("#" + mySlideBackground).addClass('active');
	$("#" + mySlide).addClass('active');

	$('html, body').animate({
		scrollTop: $("#" + mySlideBackground).offset().top
	}, 400);
});