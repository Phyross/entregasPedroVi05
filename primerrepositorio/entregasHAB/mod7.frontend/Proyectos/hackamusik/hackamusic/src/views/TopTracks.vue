<template>
  <div class="toptracks">
    <vue-headful
      title="Hack a Music | TopTracks"
      />
    <h1>TOPTRACKS</h1>
    <ul>
      <li v-for="track in tracks" :key="track.id">
        <h3>{{ track.name }}</h3>
        OYENTES: {{ track.listeners }} 
        Artista: {{ track.artist.name }}
      </li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src
import api from '@/api/index.js';


export default {
  name: 'toptracks',
  data(){
    return{
      tracks:[]

    }
  },

//HOOK
created(){
  console.log('Created toptracks');
  //del data recibimos la informacion de los artistas 
  api.getTopTracks().then(response => (this.tracks = response.data.tracks.track))
  
}
}
</script>

<style scoped>
ul{
  list-style: none;
}
li{
  border-bottom: 2px solid blueviolet ;
  
}

</style>

