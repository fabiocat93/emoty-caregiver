const CodiceFiscale = require('codice-fiscale-js')

export const fiscalCode = {
  calcuateItalianFiscalCode(name, surname, day, month, year, gender, place) {
    try {
      const cf = new CodiceFiscale({
        name,
        surname,
        gender,
        day,
        month,
        year,
        birthplace: place
      })
      return cf
    } catch (e) {
      return false
    }
  }
}
