const faqHeader = document.querySelectorAll(".faq-question");
const featureBtns = document.querySelectorAll(".features-select span");
const featureTabs = document.querySelectorAll(".features-tab");
const hamIcon = document.querySelector(".icon-ham");
const closeIcon = document.querySelector(".icon-close");
const hamMenuLinks = document.querySelectorAll(".menu-ham li");
const hamMenu = document.querySelector(".menu-ham");

console.log(hamMenuLinks);

const openMenu = () => {
	hamMenu.classList.add("open");
	closeIcon.addEventListener("click", closeMenu);
	hamMenuLinks.forEach((link) => link.addEventListener("click", closeMenu));
};

const closeMenu = () => {
	hamMenu.classList.remove("open");
};

const showAnswer = (e) => {
	const parent = e.target.closest(".faq-question");
	parent.querySelector(".faq-answer").classList.toggle("active");
	parent.querySelector("svg path").classList.toggle("active");
};

faqHeader.forEach((header) => {
	header.addEventListener("click", showAnswer);
});

hamIcon.addEventListener("click", openMenu);

for (let i = 0; i < featureBtns.length; i++) {
	featureBtns[i].addEventListener("click", () => {
		featureBtns.forEach((button) => button.classList.remove("active"));
		featureTabs.forEach((tab) => tab.classList.remove("active"));
		featureBtns[i].classList.add("active");
		featureTabs[i].classList.add("active");
	});
}
