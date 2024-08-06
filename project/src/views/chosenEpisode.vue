<template>
  <div class="episode-details">
    <h2>{{ items.name }}</h2>
    <p>{{ items.created }}</p>
    <div class="characters-list">
      <div v-for="character in characters" :key="character.id" class="character-item">
        {{ character.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'chosenEpisode',
  setup() {
    const route = useRoute();
    const items = ref(JSON.parse(route.query.key));
    const characters = ref([]);

    const fetchCharacterData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      characters.value.push(data);
    };

    onMounted(() => {
      items.value.characters.forEach((url) => {
        fetchCharacterData(url);
      });
    });

    return {
      items,
      characters,
    };
  },
};
</script>

<style scoped>
.episode-details {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
}

.episode-details h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

.episode-details p {
  font-size: 16px;
  color: #666;
  margin-bottom: 25px;
}

.characters-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.character-item {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 15px;
  flex: 1 0 200px;
  text-align: center;

}




</style>
