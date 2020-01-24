<template>
  <div id="header">
      <header class="navbar navbar-inverse  bs-docs-nav" role="banner">
        <div class="container">
            <div class="navbar-header">
                <a href="./" class="navbar-brand">Web Component/Vue Admin UI Demo</a>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'This is header'
    }
  }
}
</script>

<style>
header {
  position: fixed !important;
  width: 100%;
  z-index: 2000;
}
.navbar{
    background: #333;
}
.container{
    margin: 0px 100px;
}
.navbar-brand {
    font-size: 30px;
}
</style>