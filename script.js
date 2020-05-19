let quotes = [
'If you\'re always trying to be normal, you will never know how amazing you can be. - Maya Angelou',
'We all have self-doubt. You don\'t deny it, but you don\'t capitulate to it. You embrace it. - Kobe Bryant.',
'The way to get started is to quit talking and being doing. - Walt Disney',
'I never lose. I either win or learn. - Nelson Mandela',
'Never give up. Today is hard, Tomorrow will be worse, but the day aftre tomorrow will be SUNSHINE. - Jack Ma',
'If you don\'t give up, you sill have a chance. Giving up is the greatest FAILURE. - Jack Ma',
'Don\'t let circumstances control you. You change your circumstences. - Dwayne \'The Rock\' Johnson',
'Be humble. Be hungry. And always be the HARDEST worker in the room. - Dwayne \'The Rock\' Johnson',
'I have no special talent. I am only passionately curious. - Albert Einstein',
'All our dreams can come true, if we have the courage to pursue it. - Walt Disney',
//10 quotes
'The successful warrior is the average man, with laser-like focus. - Bruce Lee',
'With great power comes great responsbility. - Uncle Ben',
'Look up at the stars and not down at your feet. Try to make sense of  what you see, and wonder about what makes the universe exist. Be curious. - Stephen Hawking',
'I want to put a ding in the universe. - Steve Jobs',
'Your time is limited, so don\'t waste it living someone else\'s life. - Steve Jobs',
'The biggest risk is NOT taking any risk. - Mark Zuckerberg',
'Sucess is a lousy teacher. It seduces smart people into thinking they can\'t lose. - Bill Gates',
'Challenge yourself. It\'s the only path which leads to growth. - Morgan Freeman',
'When you have made your choice, it is providence that is your guide. Good, bad, or indifferent. Your fate lies in that. - Morgan Freeman',
'A fool thinks himself to be wise, but a wise man knows himself to be a fool. - William Shakespeare',
//20 quotes
]


//console.log(quotes) for testing purpose

let button = document.querySelector("button")

button.addEventListener("click", () => {
    
    let randomNum = Math.floor(Math.random () *20); //has to change according on how many quotes u have
    
    //console.log(randomNum) for testing purpose

    document.getElementById("display-box").innerHTML = quotes[randomNum]
})