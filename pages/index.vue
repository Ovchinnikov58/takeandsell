<template>
    <div class="container">
            <button type="submit" class="btn">
                <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
            </button>

            <button type="submit" class="btn">
                <nuxt-link class="nav-link" to="/registration">Registration</nuxt-link>
            </button>
    </div>
</template>

<script>
    export default {
        layout: 'start'
    }
</script>

<style scoped>
    .container {
        height: 400px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: black;
        font-family: 'Montserrat', sans-serif;
    }
    .input {
        height: 30px;
        width: 80%;
        border: 1px solid #696969;
        font-size: 15px;
        padding: 0 5px;
    }
    .form-item {
        margin-bottom: 20px;
    }
    .btn {
        width: 90px;
        height: 30px;
        border: 2px solid #2F4F4F;
        border-radius: 2px;
        margin-bottom: 5px;
        color: #000;
    }
    a{
        color: #000;
    }
</style>