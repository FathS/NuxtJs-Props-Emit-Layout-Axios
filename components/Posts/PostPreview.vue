// Burda html css olarak tasarımı yaptık. posts/index.vuedan index.vue da veriyi çekicez.
<template>
  <div>
    <nuxt-link :to="'/posts/' + id">
      <article class="post-preview">
        <div class="post-content">
          <h1>{{ name }}</h1>
          <p>{{ surname }}</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "PostPreviews",
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  margin: 10px 0;
}
.post-content {
  text-align: center;
  padding: 10px;
}
.post-thumbnail {
  background-size: cover;
  background-repeat: repeat;
}
</style>