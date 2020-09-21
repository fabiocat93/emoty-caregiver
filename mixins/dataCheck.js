import * as italy from '~/utility/italy.json'
import * as countries from '~/utility/countries.json'

export const dataCheck = {
  methods: {
    checkUsername(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 20) &&
        alphanumeric(data.trim())
      ) {
        return true
      }
      return false
    },
    checkPassword(data) {
      if (data && typeof data === 'string' && lengthRange(data.trim(), 1, 20)) {
        return true
      }
      return false
    },
    checkName(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 20) &&
        allLetterWithSpaces(data.trim())
      ) {
        return true
      }
      return false
    },
    checkSurname(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 20) &&
        allLetterWithSpaces(data.trim())
      ) {
        return true
      }
      return false
    },
    checkGender(data) {
      if (
        data &&
        typeof data === 'string' &&
        (data.trim() === 'M' || data.trim() === 'F')
      ) {
        return true
      }
      return false
    },
    checkFiscalcode(data) {
      const CodiceFiscale = require('codice-fiscale-js')
      try {
        const cf = new CodiceFiscale(data)
        return true
      } catch (e) {
        return false
      }
    },
    checkDate(data) {
      return data instanceof Date && !isNaN(data)
    },
    checkCity(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 30) &&
        allLetterWithSpaces(data.trim())
      ) {
        return true
      }
      return false
    },
    checkItalianCity(data) {
      if (this.checkCity(data)) {
        JSON.parse(italy).forEach((item) => {
          if (item.name === data) {
            return true
          }
        })
      }
      return false
    },
    checkZipcode(data) {
      const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/
      if (regexp.test(data)) {
        return true
      } else {
        return false
      }
    },
    checkCountry(data) {
      if (data && typeof data === 'string') {
        JSON.parse(countries).forEach((item) => {
          if (item.name === data) {
            return true
          }
        })
      }
      return false
    },
    checkNation(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 5) &&
        allLetterWithSpaces(data.trim())
      ) {
        return true
      }
      return false
    },
    checkItalianNation(data) {
      if (this.checkNation(data)) {
        JSON.parse(italy).forEach((item) => {
          if (item.nation === data) {
            return true
          }
        })

        return true
      }
      return false
    },
    checkEmail(data) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data) &&
        lengthRange(data.trim(), 1, 80)
      ) {
        return true
      } else {
        return false
      }
    },
    checkPhone(data) {
      let tel = data
      if (tel.startsWith('00')) {
        tel = tel.replace('00', '+')
        tel = tel.replace(/\s/g, '')
      }

      if (
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(tel)
      ) {
        return true
      } else {
        return false
      }
    },
    checkAddress(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 30) &&
        alphanumericWithSpacesAndComma(data.trim())
      ) {
        return true
      }
      return false
    },
    checkNote(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 500)
      ) {
        return true
      }
      return false
    },
    checkGroupName(data) {
      if (
        data &&
        typeof data === 'string' &&
        lengthRange(data.trim(), 1, 30) &&
        alphanumericWithSpaces(data.trim())
      ) {
        return true
      }
      return false
    }
  },
  checkSubgroupName(data) {
    if (
      data &&
      typeof data === 'string' &&
      lengthRange(data.trim(), 1, 30) &&
      alphanumericWithSpaces(data.trim())
    ) {
      return true
    }
    return false
  }
}

// Function to check letters and numbers and spaces
function alphanumericWithSpacesAndComma(inputtxt) {
  const letterNumber = /^[0-9A-Za-z,\d\s]+$/
  if (inputtxt.match(letterNumber)) {
    return true
  } else {
    return false
  }
}

// Function to check letters and numbers and spaces
function alphanumericWithSpaces(inputtxt) {
  const letterNumber = /^[0-9A-Za-z\s]+$/
  if (inputtxt.match(letterNumber)) {
    return true
  } else {
    return false
  }
}

// Function to check letters and numbers
function alphanumeric(inputtxt) {
  const letterNumber = /^[0-9a-zA-Z]+$/
  if (inputtxt.match(letterNumber)) {
    return true
  } else {
    return false
  }
}

// Function to restrict length of user input
function lengthRange(inputtxt, minlength, maxlength) {
  const userInput = inputtxt
  if (userInput.length >= minlength && userInput.length <= maxlength) {
    return true
    s
  } else {
    return false
  }
}

// Function to check for all letters in a field
function allLetter(inputtxt) {
  const letters = /^[a-zA-Z]+$/
  if (inputtxt.match(letters)) {
    return true
  } else {
    return false
  }
}

// Function to check for all letters in a field
function allLetterWithSpaces(inputtxt) {
  const letters = /^[a-zA-Z\s]+$/
  if (inputtxt.match(letters)) {
    return true
  } else {
    return false
  }
}

// Function to check for all numbers in a field
function allnumeric(inputtxt) {
  const numbers = /^[0-9]+$/
  if (inputtxt.match(numbers)) {
    return true
  } else {
    return false
  }
}
