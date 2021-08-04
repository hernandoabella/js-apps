const questions = document.querySelectorAll(".accordion-item");

// select the qn-btn for each question
questions.forEach(function (question) {
	const btn = question.querySelector(".question-btn");
	// add event listener to button
	btn.addEventListener("click", function () {
		// open only selected question otherwise close other
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		});

		// add class show-text to selected question
		question.classList.add("show-text");
	});
});

// // traversing the DOM - up and down the DOM tree
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
// 	btn.addEventListener("click", function (e) {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle("show-text");
// 	});
// });
