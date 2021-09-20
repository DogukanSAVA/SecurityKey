const getRandomLower = () => {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}


const getRandomUpper = () => {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
          return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
          const symbols = '!@#$&*'
          return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunctions =  {getRandomLower,getRandomNumber,getRandomUpper,getRandomSymbol}

const generatePassword = () => {
          const length = 16
          let generatePassword = ''
          for(let x =0; x < length; x++)
          generatePassword
}

console.log(getRandomSymbol());