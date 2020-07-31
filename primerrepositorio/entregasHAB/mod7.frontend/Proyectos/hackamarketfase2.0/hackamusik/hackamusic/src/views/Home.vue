<template>
  <div class="home">
    <vue-headful
      title="Hack a Music | Home"
      />
    <h1>HACK A MUSIIC</h1>
    <toptags :toptags="toptags"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import api from '@/api/index.js';
//importo component TagCard
import toptags from '@/components/TagCard.vue';

export default {
  name: 'Home',
  components: {
    toptags
  },
  data(){
    return{
      toptags:[]
    }
  },

//HOOK
created(){
  console.log('Created');
  //del data recibimos la informacion de los artistas 
  api.getTopTags().then(response => (this.toptags = response.data.tags.tag))
  
}
}
</script>
