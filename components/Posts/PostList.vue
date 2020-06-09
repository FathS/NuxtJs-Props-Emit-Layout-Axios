<template>
  <div>
    <div class="home-page">
      <section class="intro">
        <h1>Get The Latest</h1>
      </section>
      <section class="features-posts">
        <PostPreview
          v-for="item in posts"
          :key="item.ids"
          :id="item.id"
          :name="item.name"
          :surname="item.surname"
        />
      </section>
    </div>
  </div>
</template>
<script>
import PostPreview from "../Posts/PostPreview";
export default {
  data() {
    return {};
  },
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>
// isAdmin: {
    //   type: Boolean,
    //   required: faşse
    // },