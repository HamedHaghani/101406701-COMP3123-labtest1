function lowerCaseWords(mixedArray){

    return new Promise((resolve, reject) =>{

        const words = mixedArray.filter( item => typeof item === 'string');

        if (words.length > 0 ){
            resolve(words.map(word => 
                word.toLowerCase()
            ));
        }else{
            reject('There is no String')
        }
    })

}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))  
  .catch(error => console.error(error));