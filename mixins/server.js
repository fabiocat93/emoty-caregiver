export const server = {
  methods: {
    async serverRecoverPassword(email) {
      return await this.$axios.post('/passwordrecovery', {
        email
      })
    },
    async serverLogin(data) {
      const res = await this.$axios.post('/login', {
        email: data.email,
        password: data.password
      })
      return res
    },
    async serverPair(data) {
      return await this.$axios.post('/pair', {
        id: data
      })
    }
  }
}

export default async function serverRestoreSession(axios) {
  const res = await axios.get('/restoreSession')
  return res
}
