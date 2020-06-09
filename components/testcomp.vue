<template>
  <div>
    <!-- <slot name="tester"></slot> -->
    <h1>{{message}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["message"]
};
</script>