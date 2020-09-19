const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Evan',
            age: 24
        })
        //reject('Something went wrong');
    }, 1500)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    //added lecture 153
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        }, 3000)
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');