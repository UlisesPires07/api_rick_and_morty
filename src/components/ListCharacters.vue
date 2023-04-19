<template>
    <section>
      <!-- El componente utiliza una variable computada "characters" que devuelve la lista de personajes obtenida del store, y luego se itera sobre esta lista utilizando la directiva "v-for" para mostrar cada personaje en un componente secundario llamado "CardCharacter". Cada iteración se identifica por un atributo "key" único que se define por la propiedad "id" de cada personaje. -->
      <div class="characters">
        <div class="characters__item" v-for="character in characters" :key="character.id">
          <CardCharacter :character="character" />
        </div>
      </div>
    </section>
</template>
  
<script>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import CardCharacter from '@/components/CardCharacter'
  export default {
    name: 'Characters',
    components: {
      CardCharacter
    },
    setup() {
      const store = useStore()
      const characters = computed(() => {
        return store.state.charactersFilter
      })
      // onMounted() se utiliza para hacer una llamada a una acción en el store, en este caso, la acción "getCharacters", que obtiene los personajes del servidor y los actualiza en el store.
      onMounted(() => {
        store.dispatch('getCharacters')
      })
      return {
        characters
      }
    }
  }
</script>
  
<style lang="scss">
  .characters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    margin: 3rem 0;
  }
</style>