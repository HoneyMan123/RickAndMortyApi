<template>
    <div class="container-locations">
      <div @click="locationChosen(key)" class="sub-container" v-for="key in locations" :key="key.id">
        <div class="location-name">Name of the Planet: {{ key.name }}</div>
        <div class="location-type">Type of Planet: {{ key.type }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const locations = ref([]);
      const router = useRouter();
  
      onMounted(() => {
        const url = 'https://rickandmortyapi.com/api/location';
        fetch(url)
          .then(response => response.json())
          .then(data => {
            locations.value = data.results;
            console.log(locations);
          });
      });
  
      function locationChosen(key) {
        router.push({ name: 'chosenLocations', query: { key: JSON.stringify(key) } });
      }
  
      return {
        locations,
        locationChosen
      };
    }
  };
  </script>
  
  <style scoped>
  .container-locations {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }
  
  .sub-container {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 15px;
    width: 100%;
  }
  
 
  
  
  .location-type {
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
  
  .location-name {
    font-weight: bold;
    font-size: 18px;
  }
  
  .location-type {
    color: #666;
  }
  </style>
  