<template>
   <div class="Artistas">
    
    <input type="search" v-model="search" placeholder="Buscar por nombre">
    <ul>
      <li v-for="artist in filtered" :key="artist.id" >
        <p>ARTISTA: {{ artist.name}}</p>
        <p>OYENTES: {{ artist.listeners}}</p>
        <p>URL: {{ artist.url }}</p>
        <p><img class="foto" :src="artist.image[2]['#text']"></p>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
    name: "ArtistCard",
    props: {
        artists: Array
    },
    data(){
        return {
            search: ""
        }
    },
    //funcion que se asegura si una variable ha cambiado o no
    computed: {
        //COMPARA EL NOMBNRE QUE BUSCO CON EL DEL ARTISTA 
        filtered(){
            if(!this.search){
                return this.artists;
            }
            return this.artists .filter(artist => 
            artist.name.toLowerCase().includes(this.search.toLowerCase()))
        }
         }

}
</script>

<style scoope>

.foto{
  width: 120px;
  border-radius: 50%;
  }

</style>