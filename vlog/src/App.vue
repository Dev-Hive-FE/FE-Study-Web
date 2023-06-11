<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dev</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#" @click="$router.push('/')">Home</a>
          <a class="nav-link" href="#" @click="$router.push('/TextList')">TextList</a>
        </div>
      </div>
    </div>
  </nav>
  <h1>Dev vlog</h1>
  <router-view />
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
    }
  }
}
</script>

<style>
body {
  text-align: center;
}
</style>