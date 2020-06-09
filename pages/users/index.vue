<template>
  <div>
    <slot></slot>
    <p>Users componentin child indexi. Index olduğu için gözüküyor</p>
    <button :disabled="toggle" @click="test()" v-html="btnName"></button>
    <p v-show="toggle">Toggle Paragraf</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      btnName: "Toggle False"
    };
  },
  methods: {
    test() {
      if (this.toggle == false) {
        this.toggle = true;
        this.btnName = "Toggle True";
      } else {
        this.toggle = false;
      }
    }
  }
};
</script>
<style scoped>
button:disabled {
  cursor: not-allowed;
  background-color: rgb(155, 155, 155);
  border: none;
  color: #ffffff;
  padding: 10px;
}
</style>