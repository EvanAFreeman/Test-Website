
/*
const book = {
    title: 'Ego is the enemy',
    auther: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

//Default value is self published, renamed to publisherName
const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
*/

//Array destructuring

const address = ['1299 S Juniper Street', 'SF', 'California', '94965']

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);