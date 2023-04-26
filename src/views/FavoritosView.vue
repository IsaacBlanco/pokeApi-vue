<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()
const {favoritos} = storeToRefs(useFavoritos)
const {remove} = useFavoritos

</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin Favoritos</p>
    <ul v-else
    class="list-group">
        <div>
            <li v-for="pokemon in favoritos"
                :key="pokemon.id"
                class="list-group-item">
                <div>
                    {{ pokemon.name }}
                </div>
                <div>
                    <RouterLink 
                        :to="`/pokemons/${pokemon.name}`"
                        class="btn btn-sm btn-primary me-2">
                        Informacion
                    </RouterLink>
                    <button class="btn btn-sm btn-danger"
                    @click="remove(pokemon.id)">Eliminar</button>
                </div>
            </li>
        </div>
    </ul>
</template>