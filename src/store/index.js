import { createStore } from 'vuex'

export default createStore({

  // state: Define dos arreglos vacíos, characters y charactersFilter, que se utilizarán para almacenar los datos de los personajes y la información filtrada, respectivamente.
  state: {
    characters: [],
    charactersFilter: []

  },

  getters: {
  },

  // mutations: Define dos mutaciones, setCharacters y setCharactersFilter, que actualizan el estado del store con los datos de los personajes y la información filtrada, respectivamente.
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },

  // actions: Define tres acciones, getCharacters, filterByStatus y filterByName. 
  // getCharacters utiliza la API para obtener la información de los personajes y actualizar el estado del store. 
  // filterByStatus y filterByName toman un parámetro de búsqueda y filtran la información de los personajes en el estado del store utilizando esa búsqueda.
  actions: {
    async getCharacters({commit}) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus({commit, state}, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', filter)
    },
    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', filter)
    }
  },

  modules: {
  }

})
