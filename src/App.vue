<template>
  <div class="container-fluid">
    <h1>Aplicación: Seguimiento de Clientes</h1>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">FECAN</a>
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Prospectos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/carthome">Tipos de Automóviles</router-link>
            </li>
            <!--            <li class="nav-item">
                          <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link disabled">Disabled</a>
                        </li>-->
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
</style>
