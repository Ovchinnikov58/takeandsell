<template>
    <div class="container">
        <ul>
            <li v-for="company of companies" :key="company.id">
                <a href="#" @click.prevent="goTo(company)">
                    <h2>Company: {{company.name}}</h2>
                    <p>Informanion: {{company.info}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        async asyncData({store, error}) {
            try {
                const companies = await store.dispatch('companies/fetchCompanies')
                return {companies}
            }
            catch(e) {
                error(e)
            }
        },
        methods: {
            goTo(company) {
                this.$router.push('./companies/' + company.id)
            }
        }
}
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100%;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
    }

    a{
        display: flex;
        width: 100%;
        flex-direction: column;
        border: 1px solid #696969;
        min-height: 50px;
        align-items: flex-start;
        justify-content: space-around;
        padding: 0 20px;
        margin-bottom: 5px;
        color: #000;
    }
</style>