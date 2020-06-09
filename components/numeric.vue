<template>
  <div style="text-align:center;">
    <h1>FOR KGF PROJECT</h1>

    <div class="col">
      <div class="numarator">
        <div class="number-1 number-sayi">
          <input
            style="width:100%; text-align:center; background-color:transparent; border:none; height:50px; font-size:18px; -moz-appearance: textfield;"
            type="text"
            v-model="counter"
            @keydown.space.prevent
          />
          <!-- <span :style="styleObject">{{counter}}</span> -->
        </div>
        <div class="number-2">
          <div class="number-up">
            <button :disabled="!active2" @click="counterUp" class="kgfd-btn">
              <i class="el-icon-caret-top"></i>
            </button>
          </div>
          <div class="number-down">
            <button :disabled="!active" @click="counterDown" class="kgfd-btn">
              <i class="el-icon-caret-bottom"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <el-input placeholder="Please input" v-model="active"></el-input>
    {{counter}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 1,
      input: "",
      active: true,
      active2: true,
      styleObject: {
        color: "inherit",
        opacity: "1",
        transform: "scale(2.1)"
      }
    };
  },
  methods: {
    counterUp() {
      this.counter++;
      this.active = true;
      if (this.counter >= 15) {
        this.active2 = false;
      }
    },
    counterDown() {
      this.counter -= 1;
      if (this.counter < 1) {
        this.active = false;
      }
      this.active2 = true;
    }
  },
  mounted() {
    
  }
};
</script>
<style scoped>
.col {
  position: relative;
  width: 8%;
  margin: 0;
  padding: 0 5px;
}

.numarator {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 10px;
  border: 1px solid;
  border-color: lightgray;
  border-radius: 5px;
  height: 50px;
  background-color: rgb(228, 228, 228);
  color: #555555;
}
.numarator i {
  font-size: 20px;
}
.number-1 {
  position: relative;
  float: left;
  width: 50%;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.number-2 {
  position: relative;
  float: left;
  width: 50%;
  padding: 0;
  margin: 0;
  text-align: center;
}
.number-1.number-sayi {
  border-right: 1px solid lightgrey;
  height: 50px;
}
.number-up {
  position: relative;
  float: left;
  display: block;
  width: 100%;
  height: 25px;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
}
.number-up:active i,
.number-down:active i {
  transform: scale(1.8);
  transition: all 0.2s;
  opacity: 0.3;
}
.number-down {
  position: relative;
  float: left;
  display: block;
  width: 100%;
  height: 25px;
  cursor: pointer;
}

.kgfd-btn {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.kgfd-btn:disabled {
  cursor: not-allowed;
}
.kgfd-row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
}
.kgfd-col {
  position: relative;
  max-width: 100%;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  flex-basis: 0;
  flex-grow: 1;
}
.kgfd-col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}
.kgfd-col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}
.kgfd-col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}
.kgfd-col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.kgfd-col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}
.kgfd-col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.kgfd-col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}
.kgfd-col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.kgfd-col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}
.kgfd-col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}
.kgfd-col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}
.kgfd-col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
</style>