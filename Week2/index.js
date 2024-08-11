// promisyfied setTimeout

function setPromiseTimeout(data, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, time);
    });
}

setPromiseTimeout("Hello!! Friend", 3000)
    .then((data) => console.log("The output after time out: " + data))
    .catch((error) => console.error(error));



//Promisified fetch

function promiseFetch(url) {
    return new Promise((resolve,reject) => {
        resolve(fetch(url)
            .then(res => res.json())
            .catch(error => reject(error)));
    });
}

promiseFetch("https://jsonplaceholder.typicode.com/todos/2")
    .then(data => console.log(data));

    
// Promisified fsReadFile

let fs = require('fs');

function promisedRead(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            }
            else { resolve(data) }
        })
    });
}

promisedRead("msg.txt")
    .then(msg => console.log(msg))
    .catch(err => console.error("File Not Found: ", err));