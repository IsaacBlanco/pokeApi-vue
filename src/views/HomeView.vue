<script setup>
import {useCounterStore} from '@/store/counter.js'
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore()

const {increment} = useCounter
//cunado se hace destructuracion para referencia o cuputed
//se usa storeToRef(sotore)
const {count, double} = storeToRefs(useCounter)
</script>

<template>
  <main>
    <h1>Count: {{ count }}</h1>
    <h1>Double: {{ double }}</h1>
    <button
    class="btn btn-warning"
    @click="increment">Increment</button>
  </main>
</template>
