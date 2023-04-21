<script setup>
import {ref} from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from 'vue-router'
import { useGetData } from '@/composables/getData'

const route = useRoute();
const router = useRouter();
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
        <button @click="back" class="btn btn-outline-primary">Volver</button>
    </div>
    <div v-else>
        <button @click="back" class="btn btn-outline-primary">Volver</button>
    </div>
</template>