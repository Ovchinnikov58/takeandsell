<template>
    <div class="container">
        
        <h2>{{company.name}}</h2>
        <h2>{{company.info}}</h2>
        <ul>
            <li v-for="item of company.goods" :key="item.id">
                Position {{item.name}}
                Info {{item.info}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        validate({params}) {
            console.log(params)
            //return true
            return /^\d+$/.test(params.company)
        },
        async asyncData({params, error, store}) {
            try {
               const company = await store.dispatch('companies/fetchCompanyById', params.company)
               return {company}
            }
            catch(e) {
                error(e)
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
        color: #000;
    }
</style>