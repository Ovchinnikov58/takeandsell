<template>
  <div class="wrapper">
    
        <header>
          <Navbar />
        </header>
    <div class="content">
        <nuxt/>
    </div>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'

  export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
  header {
    display: flex;
    text-align: center;
    justify-content: center;
  }

html,
body,
#__layout,
#__nuxt {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer {
  flex: 0 0 auto;
}

</style>

