<template>
  <div>
    <button @click="selectedComponent = 'Popup-comp'">Get PopUp</button>
    <h1>Parent Componenti</h1>
    <button @click="childData = true">Paragrafı aktif et</button>
    <button @click="changeName">ChangeName</button>
    <p>{{name}}</p>
    <p>Childdan gelen veri: {{childData}}</p>
    <p v-if="childData">Active Paragraf</p>
    <div class="row">
      <app-child @data="childData=$event" :name="name"></app-child>
    </div>
    <component :is="selectedComponent" @dataPopup="selectedComponent=$event"></component>
  </div>
</template>
<script>
import child from "../PropsAndEmit/Child";
import popup from "../PropsAndEmit/popup";
export default {
  data() {
    return {
      name: "Lara",
      childData: true,
      selectedComponent: ""
    };
  },
  methods: {
    changeName() {
      if (this.name == "Fatih") {
        this.name = "Lara";
      } else {
        this.name = "Fatih";
      }
    }
  },
  components: {
    "app-child": child,
    "Popup-comp": popup
  },
  mounted() {
    var test = document.getElementsByTagName("body")[0];
    if (this.selectedComponent != "") {
      console.log("js kodu");
      test.style.overflow = "hidden";
    } else {
      test.style.overflow = "scrool";
    }
  }
};
</script>
<style scoped>
.row {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 20px 0;
}
</style>