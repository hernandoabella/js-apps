const quotes = [
	{
		name: "Stephen King",
		quote: "Remember - Hope is a good thing, maybe the best of things, and no good thing ever dies.",
	},
	{
		name: "John F.Kennedy",
		quote: "Every accomplishment starts with the decision to try.",
	},
	{
		name: "Abraham Lincoln",
		quote: "Folks are usually about as happy as they make their minds up to be.",
	},
	{ name: "Leonardo DaVinci", quote: "Simplicity is the ultimate sophistication." },
	{ name: "Leo Tolstoy", quote: "If you want to be happy, be" },
	{
		name: "Winston Churchill",
		quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
	},
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteBtn = document.querySelector(".quoteBtn");

quoteBtn.addEventListener(
	"click",
	(randomQuote = () => {
		let random = Math.floor(Math.random() * quotes.length);
		quote.innerHTML = quotes[random].quote;
		author.innerHTML = quotes[random].name;
	}),
);
