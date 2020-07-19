<template>
  <div class="topartists">
    <vue-headful
      title="Hack a Music | TopArtits"
      />
    <h1>Top artists</h1>
    <artistcard :artists="artists"/>
   </div>
</template>

<script>
// @ is an alias to /src
import api from '@/api/index.js';
//importo component ArtistCard
import artistcard from '@/components/ArtistCard.vue';

export default {
  name: 'topartists',
  components: {
    artistcard
  },
  data(){
    return{
      artists:[]
    }
  },


//HOOK
created(){
  console.log('Created');
  //del data recibimos la informacion de los artistas 
  api.getArtists().then(response => (this.artists = response.data.topartists.artist))
  
}
}
</script>
