<template>
  <div class="character-details">
    <div class="character-info">
      <div class="info-item">Name: <span>{{ items.name }}</span></div>
      <div class="info-item">Status: <span>{{ items.status }}</span></div>
      <div class="info-item">Gender: <span>{{ items.gender }}</span></div>
      <div class="info-item">Species: <span>{{ items.species }}</span></div>
      <div class="info-item">Origin: <span>{{ items.origin.name }}</span></div>
      <div class="info-item">Created: <span>{{ items.created }}</span></div>
    </div>
    <div class="character-image">
      <img :src="items.image" alt="Character Image">
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'character',
  setup() {
    const route = useRoute();
    let items = JSON.parse(route.query.key);

    console.log(items);

    return {
      items,
    };
  },
};
</script>

<style scoped>
.character-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
}

.character-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}

.info-item {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.info-item span {
  font-weight: normal;
  color: #666;
}

.character-image {
  display: flex;
  justify-content: center;
  width: 100%;
}

.character-image img {
  max-width: 100%;
}
</style>
