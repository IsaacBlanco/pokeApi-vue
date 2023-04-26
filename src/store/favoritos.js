import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos',() => {
    
    const favoritos = ref([])
    if(localStorage.getItem('favoritos')){
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const addFavoritos = (pokemon) =>{
        favoritos.value.push(pokemon)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }
    const remove =(id) => {
        favoritos.value = favoritos.value.filter(pokemon => pokemon.id !== id)
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))

        
    }

    const findPokemon = (name) => favoritos.value.find(item => item.name === name) 


    return{
        favoritos,
        addFavoritos,
        remove,
        findPokemon,
    }
})