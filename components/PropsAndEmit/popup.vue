<template>
  <div>
    <div class="popup">
      <div class="popup-card">
        <div class="formbox">
          <label for>Ad</label>
          <input type="text" />
        </div>
        <div class="formbox">
          <label for>SoyAd</label>
          <input type="text" />
        </div>
        <button @click="closePopup">Kapat</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedComponent: ""
    };
  },
  methods: {
    closePopup() {
      this.$emit("dataPopup", this.selectedComponent);
    }
  }
};
</script>
<style scoped>
body {
  overflow: hidden;
}
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-card {
  position: relative;
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 20px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 15px 20px #d8d8d8;
}
.formbox {
  position: relative;
  width: 100%;
  margin: 20px 0;
  padding: 0;
}
</style>