<!-- muestra una lista de filtros que se pueden aplicar a una lista de personajes, utilizando Vuex para enviar una acción al store cuando se selecciona un filtro.muestra una lista de filtros que se pueden aplicar a una lista de personajes, utilizando Vuex para enviar una acción al store cuando se selecciona un filtro. -->
<template>
    <!-- se definen cuatro elementos "div" que representan cada filtro disponible. Cada filtro tiene un evento "click" que llama a la función "filter" con el estado correspondiente. -->
    <div class="filter">
      <div class="item" @click="filter('')">
        All
      </div>
      <div class="item" @click="filter('Alive')">
        Alive
      </div>
      <div class="item" @click="filter('Dead')">
        Dead
      </div>
      <div class="item" @click="filter('unknown')">
        Unknown
      </div>
    </div>
</template>
  
<script>
  import { useStore } from 'vuex'
  export default {
    setup() {
      const store = useStore()
      
      // define una función "filter" que recibe un parámetro "status" que corresponde al filtro seleccionado y envía una acción "filterByStatus" al store con el estado seleccionado.
      const filter = ((status) => {
        store.dispatch('filterByStatus', status)
      })
  
      return {
        filter
      }
    }
  }
</script>
  
<style lang="scss">
  .filter {
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    overflow: hidden;
    .item {
      padding: 1rem 0.5rem;
      background-color: var(--background-card);
      text-align: center;
      cursor: pointer;
      &:hover {
        color: var(--text-orange);
      }
    }
  }
</style>