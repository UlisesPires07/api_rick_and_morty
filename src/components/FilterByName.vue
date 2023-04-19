<!-- proporciona una entrada de texto para buscar personajes por nombre, utilizando Vuex para enviar una acción al store cuando se ingresa texto en la entrada de texto. -->
<template>
    <!-- se define una entrada de texto que se enlaza con la variable reactiva "name" y se establece un evento "keyup" que llama a la función "filter" cada vez que se suelta una tecla mientras se escribe en la entrada de texto. -->
    <div class="search">
      <input
        type="text"
        placeholder="Search by name"
        v-model="name"
        @keyup="filter()"
      >
    </div>
</template>
  
<script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  export default {
    setup() {
      // utiliza la función "ref" para crear una variable reactiva "name", que es enlazada bidireccionalmente a la entrada de texto utilizando la directiva "v-model".
      const name = ref('')
      const store = useStore()
      // la función "filter" se define para enviar una acción "filterByName" al store de Vuex con el valor actual de "name" para buscar personajes cuyo nombre coincida con el texto ingresado.
      const filter = () => {
        store.dispatch('filterByName', name.value)
      }
  
      return {
        name,
        filter
      }
    }
  }
</script>
  
<style lang="scss">
  .search {
    width: 400px;
    margin: 3rem auto 0;
    input {
      height: 53px;
      width: 400px;
      border: none;
      border-radius: 10px;
      padding: 0 0.5rem;
    }
  }
</style>