<script setup>
import {useRoute, useRouter} from 'vue-router'
import { useGetData } from '@/composables/getData'
import { useFavoritosStore } from '@/store/favoritos';
import FavoritosView from './FavoritosView.vue';

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore()

const {addFavoritos, findPokemon} = useFavoritos
const {data, getData, loading, error} = useGetData();

const back = () => {
    router.push("/pokemons")
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>


<template>
    <p v-if="loading">Cargando Pokemon...</p>
    <div v-if="error" class="alert alert-danger mt-2">Quien es ese pokemon???</div>
    <div v-if="data">
        <img :src ="data.sprites?.front_default">
        <h1>Pokemon: {{ $route.params.name }}</h1>
        <button class="btn btn-primary mb-2"
        :disabled="findPokemon(data.name) ? true : false" 
        @click="addFavoritos(data)"
       >Agregar a Favoritos</button>
    </div>
        <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>