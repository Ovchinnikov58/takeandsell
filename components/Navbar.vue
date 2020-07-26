<template>
    <nav class="navbar">
        <a class="navbar-brand" href="#">Take-n-Sale</a>
        <div class="navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/companies">Companies</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/about">About us</nuxt-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Basket</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link logout" href="/">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  components: {
   
  }
}
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1 1 100%;
        height: 60px;
        background-color: #696969;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 20px;
        /* opacity: .3; */
    }
    .navbar-collapse {
        display: flex;
        text-align: center;
        justify-content: center;
        flex: 1 1 80%;
    }
    .navbar-brand{
        flex: 0 1 15%;
    }
    .navbar-nav {
        display: flex;
        text-align: center;
        justify-content: flex-end;
        flex: 0 1 80%;
    }
    .nav-item {
        flex: 0 1 15%;
        margin-right: 5px;
    }
    a{
        color: #fff;
    }
</style>

