// export const state = () => ({
//     companies: []
// })

// export const mutations = {
//     setCompanies(state, companies) {
//         state.companies = companies
//     }
// }

export const actions = {
    async fetchCompanies({}) {
        try {
            const companies = await this.$axios.$get('http://localhost:4000/companies')
            return companies
        }
        catch(e) {
            throw e
        }
    },
    async fetchCompanyById({}, companyId) {
        
        try {
            return await this.$axios.$get(`http://localhost:4000/companies/${companyId}`)
        }
        catch(e) {
            throw e
        }
    }
}

// export const getters = {
//     companies: state => state.companies
// }