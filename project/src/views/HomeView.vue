<template>
  <div class="container">
    <div v-for="key in characters" :key="key.id" class="characters" @click="clickedOnCharacter(key)">
      <div>
        <div>{{ key.name }}</div>
        <img :src="key.image" alt="Character Image">
      </div>
    </div>
  </div>
</template>

<script>
import {  onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();
    const characters = ref([]);

    onMounted(() => {
      const url = "https://rickandmortyapi.com/api/character";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          characters.value = data.results;
        });
    });

    function clickedOnCharacter  (key)  {
      router.push({ name: 'character', query: { key: JSON.stringify(key) } });
    };

    return {
      characters,
      clickedOnCharacter,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.characters {
  font-size: 30px;
}
</style>
