<template>
  <div>
    <hr style="margin:20px 0;" />
    <h1>Single User with Id {{id}}</h1>
    <p>Child Olduğu için farklı sayfada açılmadı</p>
    <nuxt-link :to="{name:'tester', params:{name:'Fatih-Şengül'}}">Testere Git</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
