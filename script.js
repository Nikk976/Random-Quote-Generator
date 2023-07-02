let heading = document.getElementById("heading");
let quote = document.getElementById("quote");
let authorName = document.getElementById("author");
let button = document.getElementById("change");

const date = new Date();
if (date.getHours() >= 0 && date.getHours() < 5) {
    heading.innerHTML = "Lets's Start our Night with a new quote";
}
else if (date.getHours() >= 5 && date.getHours() < 11 ) {
    heading.innerHTML = "Lets's Start our Morning with a new quote";
}
else if (date.getHours() >= 11 && date.getHours() < 4) {
    heading.innerHTML = "Lets's Start our Afternoon with a new quote";
}
else {
    heading.innerHTML = "Lets's Start our Evening with a new quote";
}
// const fetchQuote = async()=> {
//     let url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
//     let data = await fetch(url);
//     let parsedData = await data.json();
// }

let quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall.","The way to get started is to quit talking and begin doing.","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
"If life were predictable it would cease to be life, and be without flavor.","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.","Life is what happens when you're busy making other plans.","Spread love everywhere you go. Let no one ever come to you without leaving happier.","When you reach the end of your rope, tie a knot in it and hang on. ","Always remember that you are absolutely unique. Just like everyone else. "];

let author = ["Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt","Oprah Winfrey","James Cameron","John Lennon","Mother Teresa","Franklin D. Roosevelt","Margaret Mead"];

const color = ["Black", "Orange", "Maroon", "Red", "Yellow", "Lime green", "Salmon", "Green", "Sky blue", "Crimson"];

quote.innerHTML = quotes[0];
authorName.innerHTML = "By- "+author[0];
button.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random() * 9)+1;
    document.body.style.backgroundColor = color[randomNumber];
    quote.innerHTML = quotes[randomNumber];
    authorName.innerHTML = "By- "+author[randomNumber];
    quote.style.color = color[randomNumber];
    authorName.style.color = color[randomNumber];
    button.style.backgroundColor = color[randomNumber];
})

