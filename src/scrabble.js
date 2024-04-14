function scrabble(word) {
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
  const getWordValue = (word) => {
    const letterValueArray = []

    for (let index = 0; index < word.length; index++) {
      const currentLetter = word[index].toUpperCase()
      letterValueArray.push(letterValuesObj[currentLetter])
    }
    return letterValueArray
  }

  const letterValueArray = getWordValue(word)

  const sumWordValue = () => {
    let totalSum = 0
    letterValueArray.forEach((currentValue) => {
      totalSum += currentValue
    })
    return totalSum
  }
  const sum = sumWordValue()
  return sum
  // return getWordValue(word)
}

module.exports = scrabble
