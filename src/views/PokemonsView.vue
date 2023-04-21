<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData'

const {data, getData, loading, error} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon/')
</script>

<template>
    <h1>Pokemons View</h1>
    <p v-if="loading">Cargando Pokemons</p>
    <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="pokemon in data.results" 
            :key="pokemon.name"
            class="list-group-item">
                <RouterLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
            </li>
        </ul>
        <div class="m-2">
            <button class="btn btn-warning me-2" 
            :disabled ="!data.previous"
            @click="getData(data.previous)">
                Anterior
            </button>
            <button class="btn btn-warning" 
            :disabled = "!data.next"
            @click="getData(data.next)">
                Siguiente
            </button>
        </div>
    </div>
</template>