<template>
    <div class="episodes-wrapper">
      <div @click="episodeIsChosen(key)" class="episode-card" v-for="key in episodes" :key="key.id"> 
        <div class="episode-title">{{ key.name }} </div>    
        <div class="episode-date">{{ key.air_date }}</div>    
      </div>
    </div>
  </template>
<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'Episodes', 
  setup() {
    const router = useRouter();
    const episodes = ref([]);
    
    onMounted(() => {
      const url = "https://rickandmortyapi.com/api/episode";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          episodes.value = data.results;
          console.log(episodes);
        });
    });
    
    function episodeIsChosen(key) {
      router.push({ name: 'chosenEpisode', query: { key: JSON.stringify(key) } });
    }
    
    return {
      episodes,
      episodeIsChosen
    };
  }
};
</script>
<style scoped>
.episodes-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; 
  padding: 20px;
}

.episode-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  width: 200px;
  text-align: center;
}



.episode-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.episode-date {
  color: #666;
}
</style>
  