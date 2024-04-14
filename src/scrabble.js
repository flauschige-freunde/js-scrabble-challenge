function scrabble(word) {
  if (!word === true) {
    return 0
  }

  const letterValuesObj = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,

    D: 2,
    G: 2,

    B: 3,
    C: 3,
    M: 3,
    P: 3,

    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,

    K: 5,

    J: 8,
    X: 8,

    Q: 10,
    Z: 10
  }
  let multiplier = 1
  let invalidCharacter = false

  const changeMultiplier = (bracketType) => {
    let factor = 1
    switch (bracketType) {
      case '[':
        factor = 3
        break
      case ']':
        factor = 1 / 3
        break
      case '{':
        factor = 2
        break
      case '}':
        factor = 1 / 2
        break
    }
    multiplier *= factor
  }

  const getWordValue = (word) => {
    const letterValueArray = []
    const multiplierTriggerArray = ['[', ']', '{', '}']

    for (let index = 0; index < word.length; index++) {
      const currentLetter = word[index].toUpperCase()

      if (letterValuesObj[currentLetter]) {
        letterValueArray.push(letterValuesObj[currentLetter] * multiplier)
      } else if (multiplierTriggerArray.includes(currentLetter)) {
        changeMultiplier(currentLetter)
      } else invalidCharacter = true
    }
    return letterValueArray
  }

  const letterValueArray = getWordValue(word)
  if (multiplier !== 1 || invalidCharacter === true) return 0

  const sumWordValue = () => {
    let totalSum = 0
    letterValueArray.forEach((currentValue) => {
      totalSum += currentValue
    })
    return totalSum
  }
  const sum = sumWordValue()
  console.log(sum, multiplier)
  return sum
}

module.exports = scrabble
