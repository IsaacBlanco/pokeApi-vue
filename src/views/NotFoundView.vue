<script setup>

import {useRouter} from 'vue-router'

const router = useRouter();



const back = () => {
    router.push("/pokemons")
}

</script>

<template>
    <h1>404 Not Found</h1>
    <button @click="back">volver</button>
</template>