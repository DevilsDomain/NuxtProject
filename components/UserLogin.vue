<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '~~/stores/user';

const userStore = useUserStore();
const {isLogged, userName} = storeToRefs(userStore);
let name = "";



</script>

<template>
    <div>
        <div v-if="isLogged">
            <span>{{userName}}</span>
            <button @click="userStore.logout()">logout</button>
        </div>
        <div v-else>
            <input type="text" v-model="name" placeholder="Enter your name"/><br>
            <button class="border-black rounded-lg" @click="userStore.login(name)">login</button>
        </div>
    </div>
</template>