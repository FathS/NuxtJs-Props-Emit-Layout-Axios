<template>
  <div>
    <h1>Child Componenti</h1>
    <p>İsim: {{ name }}</p>
    <button @click="sendData">Parent'a Gönder</button>
  </div>
</template>
<script>
export default {
  props: ["name"],
  data() {
    return {
      nonActive: false
    };
  },
  methods: {
    sendData() {
      this.$emit("data", this.nonActive);
    }
  }
};
</script>