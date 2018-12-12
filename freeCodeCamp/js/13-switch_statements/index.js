// JS Nuggets : Switch Statements

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "saturday";
        break;
}
console.log(day);

var Animal = 'Spoon';
switch (Animal) {
    case 'Cow':
    case 'Dog':
    case 'Pig':
    case 'Giraffe':
        console.log('This animal will go Noah\'s Ark.');
        break;

    case 'Spoon':
        console.log('A spoon is not an animal!');

    case 'Dinosaur':
    default:
        console.log('This animal will not be on the Ark.');
}