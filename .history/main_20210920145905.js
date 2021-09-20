const getRandomLower = () => {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}


const getRandomUpper = () => {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}


console.log(getRandomUpper());