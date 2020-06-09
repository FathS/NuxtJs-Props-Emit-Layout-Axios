<template>
  <div class="container">
    <input type="text" @keypress.prevent.space v-model="userId" />
    <nuxt-link :to="{path:'/users/' + userId}">Burdanda Dene</nuxt-link>
    <button @click="onLoadUser()">Load User</button>
    <router-link to="/">Anasayfaya Dön</router-link>
    <p v-if="userId <= 0">Kullanıcı Seçilmedi</p>
    <p v-show="show">Show mu</p>

    <nuxt-child />
  </div>
</template>
<style scoped>
.container {
  position: relative;
  width: 96%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
}
</style>
<script>
export default {
  data() {
    return {
      userId: "",
      show: true
    };
  },
  methods: {
    onLoadUser() {
      if (this.userId <= 0) {
        window.alert("Kullanıcı Bulunamadı");
      } else {
        this.$router.push("/users/" + this.userId);
      }
    }
  },
  layout: "users"
};
</script>

