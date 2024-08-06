<template>
  <div class="location-details">
    <div class="location-info">
      <div class="location-name">Name: {{ items.name }}</div>
      <div class="location-type">Type: {{ items.type }}</div>
      <div class="location-dimension">Dimension: {{ items.dimension }}</div>
    </div>
    <div class="residents-section">
      <h3>Residents:</h3>
      <div class="residents-list">
        <div class="resident" v-for="key in residents" :key="key.id">{{ key.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'chosenLocation',
  setup() {
    const route = useRoute();
    const items = ref(JSON.parse(route.query.key));
    const residents = ref([]);

    const fetchCharacterData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      residents.value.push(data);
    };

    onMounted(() => {
      items.value.residents.forEach((i) => {
        fetchCharacterData(i);
      });
    });

    return {
      items,
      residents,
    };
  },
};
</script>

<style scoped>
.location-details {
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
}

.location-info {
  margin-bottom: 20px;
}

.location-name,
.location-type,
.location-dimension {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.residents-section {
  margin-top: 30px;
}

.residents-section h3 {
  font-size: 22px;
  color: #42b983;
  margin-bottom: 20px;
}

.residents-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.resident {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 10px 15px;
  flex: 1 0 200px;
  text-align: center;
}



</style>
