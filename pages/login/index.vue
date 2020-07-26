<template>
    <div class="form-container">
        <form action="">
            <label for="login"  class="form-item">Login</label>
            <input type="text" class="name input form-item" name="login">
            <label for="pas" class="form-item">Password</label>
            <input type="password" class="pas input form-item" name="pas">
            <button type="submit" class="btn">
                <nuxt-link class="nav-link" to="/companies">Login</nuxt-link>
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        layout: 'start'
    }
</script>

<style scoped>
    form {
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
    }
</style>