<script setup lang="ts">
definePageMeta({
    layout:"no-header"
})
const sameCounter = useState('counter')
// const {data} = await useFetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit")

</script>
<template>
    <NuxtLink to="/about/aboutme"><h3>about me</h3></NuxtLink>
    <NuxtLink to="/about/whyanoterportfolio">Why Another Portfolio?</NuxtLink>

    <AboutText></AboutText>
    <!-- <img src="img/public_img.png" alt="">
    <img src="~assets/img/assets_img.png" alt=""> -->
    <!-- <div>{{ data }}</div> -->
    <div>{{ sameCounter }}</div>
    <NuxtPage></NuxtPage>
</template>