<template>
   <div class="TagCard">
    <h1>Artistas</h1>
    <ul>
      <li v-for="tag in toptags" :key="tag.id">
        <p>{{ tag.name }}</p>
        <a href="tag.url">{{ tag.url }}</a>
        <p>Nº Etiquetas: {{ tag.taggings }}</p>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
    name: "TagCard",
    props: {
        toptags: Array
    }
}
</script>

<style scoope>


</style>