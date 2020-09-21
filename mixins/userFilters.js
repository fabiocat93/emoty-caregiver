import allCountries from '~/utility/countries.json'

export const userFilters = {
  methods: {
    calculate_age(birth_month, birth_day, birth_year) {
      const today_date = new Date()
      const today_year = today_date.getFullYear()
      const today_month = today_date.getMonth()
      const today_day = today_date.getDate()
      let age = today_year - birth_year

      if (today_month < birth_month - 1) {
        age--
      }
      if (birth_month - 1 == today_month && today_day < birth_day) {
        age--
      }
      return age
    },
    calculateUsefulCountries() {
      const allCountriesNames = []
      allCountries.forEach((country) => {
        allCountriesNames.push(country.name)
      })

      const myUsersCountries = []
      this.$store.getters.getUsers.forEach((user) => {
        if (allCountriesNames.includes(user.birth.country)) {
          myUsersCountries.push(user.birth.country)
        }
      })

      return [...new Set(myUsersCountries)]
    }
  },
  computed: {
    /**
    Filtra gli stati solo in base a quelli degli utenti che abbiamo
    */
    allUsefulCountries() {
      return this.calculateUsefulCountries()
    },
    myUsersInList() {
      const filteredUsers = []
      for (let i = 0; i < this.$store.getters.getUsers.length; i++) {
        var user = this.$store.getters.getUsers[i]

        // Controlla genere
        if (
          Array.isArray(this.$store.getters.getAppFilters.gender) &&
          this.$store.getters.getAppFilters.gender.length > 0 &&
          !this.$store.getters.getAppFilters.gender.includes(
            user.identificationData.gender
          )
        ) {
          continue
        }

        // Controlla età
        const age = this.calculate_age(
          user.birth.month,
          user.birth.day,
          user.birth.year
        )
        console.log(
          JSON.stringify(this.$store.getters.getAppFilters) +
          ': this.$store.getters.getAppFilters'
        )
        if (
          this.$store.getters.getAppFilters.minAge > age ||
          age > this.$store.getters.getAppFilters.maxAge
        ) {
          continue
        }

        // Controlla nazionalità
        if (
          Array.isArray(this.$store.getters.getAppFilters.countries) &&
          this.$store.getters.getAppFilters.countries.length > 0 &&
          !this.$store.getters.getAppFilters.countries.includes(
            user.birth.country
          )
        ) {
          continue
        }
        // Controlla gruppi e sottogruppi
        if (
          Array.isArray(this.$store.getters.getAppFilters.groups) &&
          this.$store.getters.getAppFilters.groups.length > 0
        ) {
          if (
            !this.$store.getters.getAppFilters.groups.some((item) =>
              user.groups.includes(item)
            )
          ) {
            // Caso in cui l'utente non fa parte di nessun gruppo tra quelli dei filtri
            continue
          } else {
            // Caso in cui l'utente fa parte di almeno un gruppo tra quelli dei filtri
            let showIt = false
            for (
              let j = 0; j < this.$store.getters.getAppFilters.groups.length; j++
            ) {
              const selectedGroup = this.$store.getters.getAppFilters.groups[j]
              if (user.groups.includes(selectedGroup)) {
                // Sono tutti i sottogruppi del gruppo in questione
                const interestingSubgroups = this.$store.getters.getAllSubgroupsByGroupId(
                  selectedGroup
                )

                console.log(
                  '________________ interestingSubgroups: ' +
                  JSON.stringify(interestingSubgroups)
                )

                if (interestingSubgroups.length > 0) {
                  var interestingSubgroupsIds = []
                  interestingSubgroups.forEach((element) => {
                    interestingSubgroupsIds.push(element.id)
                  })

                  var interestingSelectedSubgroups = []
                  this.$store.getters.getAppFilters.subgroups.forEach(
                    (selectedSubgroup) => {
                      if (interestingSubgroupsIds.includes(selectedSubgroup)) {
                        interestingSelectedSubgroups.push(selectedSubgroup)
                      }
                    }
                  )
                  if (interestingSelectedSubgroups.length === 0) {
                    showIt = true
                    continue
                  } else if (
                    !user.subgroups.some((id) =>
                      interestingSelectedSubgroups.includes(id)
                    )
                  ) {
                    // Caso in cui l'utente non fa parte di nessun sottogruppo tra quelli dei filtri
                    // L'utente non va visualizzato, quindi no action
                  } else {
                    showIt = true
                    continue
                  }
                } else {
                  showIt = true
                  continue
                }
              }
            }
            if (!showIt) {
              continue
            }
          }
        }

        // TODO: FILTRARE PER DISABILITA' >> MEGLIO CAPIRE PRIMA COME SONO ORGANIZZATE LE DISABILITA' IN CATEGORIE
        /*

        var thisUserDisabilities = [];

        user.disabilities.forEach(dis => {
          thisUserDisabilities.push(dis.id);
        });

        if (
          !myDisabilitiesForFiltering.some(item =>
            thisUserDisabilities.includes(item)
          )
        ) {
          continue;
        }
        */

        filteredUsers.push(user)
      }
      return filteredUsers
    }
  }
}
