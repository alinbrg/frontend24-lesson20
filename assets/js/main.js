// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", (e) => {
	// console.log(e.target, deleteBtn);
	deleteBtn.remove();
});
// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/1/200/300   ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
const section = document.querySelector(".dom-actions");
const img = document.createElement("img");
img.src = "https://picsum.photos/id/1/200/300";
img.setAttribute("alt", "random image");
img.classList.add("img");
section.appendChild(img);
// 3. html-ში შექმენით <section id="countries-list"></section>
const countriesSection = document.querySelector("#countries-list");
// 4.
//     4.1 რეპოზიტორში => countries.js ფაილში ნახეთ countries   მასივი რომელიც შედგება 4 ობიექტისგან. ეს მასივი გადააკოპირეთ თქვენთან.
//     4.2. countries    მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (ფოტოზე მხოლოდ ორი ქვეყანაა, თქვენ ოთხივე უნდა დაამატოთ) (სტილები დაადეთ css ის საშუალებით, კლასები ჯავასკრიპტიდან).
//     4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section  id="countries-list"></section  >.
//     4.4 დიზაინში  country card ზე არის სურათი, ქვეყნის სახელი და დედაქალაქი (ასევე ღილაკები რომელიც მომდევნო დავალებისთვის გვჭირდება), თქვენ უნდა ჩასვათ  flag  , name   და   capital (ეს მასივია) რომელიც არის მასივის ობიექტ ელემენტში.
const countriesHtml = countries
	.map(
		(el) => `
			<div class="card">
				<img src="${el.flag}" alt="${el.name}'s flag" />
				<h2 class="country-name">${el.name}</h2>
				<h4 class="country-capital">${el.capital.join(", ")}</h4>
				<a class="map-link" href="${el.map}" target="_blank">see on map</a>
				<div class="btns">
					<button class="show btn">show more info</button>
					<button class="delete btn">delete card</button>
				</div>
			</div>
	`
	)
	.join("");

countriesSection.innerHTML = countriesHtml;

// 5.  (optional) #4 დავალებაში შექმნილ country   card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, წინა დავალებაში შექმნილ სტრინგთან ერთად, ფოტოზე როგორცაა), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  country card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ რუკის ლინკი (map )

const showMoreBtns = document.querySelectorAll(".show");
// console.log(showMoreBtns);
showMoreBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		// console.log(btn.closest(".card"));
		btn.closest(".card").classList.toggle("active");
		// btn.closest(".card").querySelector(".map-link").classList.toggle("active");
	});
});

const deleteBtns = document.querySelectorAll(".delete");
deleteBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btn.closest(".card").remove();
	});
});

function syncFn() {
	console.log("start fn");
	for (let i = 0; i < 10; i++) {
		// do nothing
		console.log("for");
	}
	console.log("end fn");
}

function asyncFn() {
	console.log("start fn");
	// setTimeout(() => {
	// 	for (let i = 0; i < 10; i++) {
	// 		// do nothing
	// 		console.log("for");
	// 	}
	// }, 0);

	setInterval(() => {
		// for (let i = 0; i < 10; i++) {
		// 	// do nothing
		// 	console.log("for");
		// }
		console.log("for");
	}, 2000);

	console.log("end fn");
}

const startTimeout = document.querySelector(".startTimeout");
const stopTimeout = document.querySelector(".stopTimeout");
const startInterval = document.querySelector(".startInterval");
const stopInterval = document.querySelector(".stopInterval");

let timeoutId = null;
let intervalId = null;

startTimeout.addEventListener("click", () => {
	console.log("click");
	timeoutId = setTimeout(() => {
		console.log("timeout");
	}, 5000);
});

stopTimeout.addEventListener("click", () => {
	console.log("stop timeout");
	clearTimeout(timeoutId);
});

startInterval.addEventListener("click", () => {
	console.log("start interval");
	intervalId = setInterval(() => {
		console.log("interval");
	}, 5000);
});

stopInterval.addEventListener("click", () => {
	console.log("stop interval");
	clearInterval(intervalId);
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesWrapper = document.querySelector(".slides-wrapper");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");

let currentSlide = 0;

function loadSlides() {
	slides.forEach((slide, index) => {
		if (index === currentSlide) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

function goToNextSlide() {
	if (currentSlide === slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide += 1;
	}
	loadSlides();
}

function goToPrevSlide() {
	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide -= 1;
	}
	loadSlides();
}

loadSlides();

// remove this code
nextBtn.addEventListener("click", goToNextSlide);
prevBtn.addEventListener("click", goToPrevSlide);

let sliderIntervalId = null;

// sliderIntervalId = setInterval(goToNextSlide, 2000);

stopAutoSlides.addEventListener("click", () => {
	clearInterval(sliderIntervalId);
});

document.addEventListener("keyup", (e) => {
	console.log(e, e.code, e.key);

	if (e.code === "ArrowRight") {
		goToNextSlide();
		console.log(currentSlide);
	}

	if (e.code === "ArrowLeft") {
		goToPrevSlide();
	}
});

// add this
slidesWrapper.addEventListener("mouseenter", () => {
	// console.log("mouse eneter");
});

slidesWrapper.addEventListener("mouseleave", () => {
	// console.log("mouse leave");
});
