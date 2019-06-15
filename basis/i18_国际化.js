const january = new Date(9e8);
const english = new Intl.DateTimeFormat('en', { month: 'long'});
const spanish = new Intl.DateTimeFormat('es', { month: 'long'});

console.log(english.format(january));
console.log(spanish.format(january));


