const myPromise = new Promise((resolve, reject) => {
  const err = false;
  if (err) {
    resolve("Hello world");
  } else {
    reject("no error");
  }
});


myPromise.then(value => console.log(value)).catch(err => console.log(err))

const newPromise = new Promise((resolve,reject) =>{
    setTimeout(function(){
        resolve('new promise')
    }, 4000)
})

newPromise.then((value) => console.log(value)).catch((err) => console.log(err));
myPromise.then((value) => console.log(value)).catch((err) => console.log(err));