// First Promise

const promiseOne = new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log("Async task is completed.");

        resolve();

    }, 1000);
});

promiseOne.then(function () {

    console.log("Promise one is consumed.");
});

// Second Promise

new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log("Async task 2 is completed.");

        resolve();

    }, 1000);

}).then(function () {

    console.log("Promise 2 is consumed.");
});

// Third Promise

const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {

    }, 1000);

    resolve({ username: "John Doe", email: "jdoe@me.com" });

});

promiseThree.then(function (user) {

    console.log(user);
});

// Fourth Promise

const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = false;

        if (error) {

            reject("Error");
        }

        else {

            resolve("Success");
        }

    }, 1000);
});

promiseFour.then((error) => {

    console.log(error);

}).catch((error) => {

    console.log(error);

}).finally(() => {

    console.log("Promise 4 is consumed.");
});

// Fifth Promise

const promiseFive = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let error = true;

        if (!error) {

            resolve({ username: "JavaScript", email: "javascript@me.com" });

        }

        else {

            reject("An error occurred");
        }

    }, 1000);
});

async function consumePromiseFive() {

    try {

        const response = await promiseFive;

        console.log(response);
    }

    catch (error) {

        console.log(error);
    }
}

consumePromiseFive();