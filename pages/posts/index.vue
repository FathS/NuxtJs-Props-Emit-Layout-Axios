<template>
  <div>
    <section class="features-posts">
      <PostPreview id="2" name="Hello There!" surname="This my second post!" />
      <PostPreview
        v-for="item in accountList"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :surname="item.surname"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "../../components/Posts/PostPreview";
export default {
  data(context) {
    return {
      accountList: []
    };
  },
  methods: {
    async getList() {
      await this.$axios
        .get("http://localhost:1256/Admin/Accountlist/" + 1)
        .then(response => {
          this.accountList = response.data;
          console.log(response.data);
        })
        .catch(error => {
          this.msg = error.response.message;
        });
    },
    changeList(chcid) {
      this.id = chcid;
      this.getList();
    }
  },
  head: {
    title: "Postun İndexi"
  },
  created() {
    this.$store.dispatch("setPosts", this.accountList);
    console.log(this.$store.getters.postLoad);
  },
  computed: {
    postLoad() {
      return this.$store.getters.postLoad;
    }
  },
  mounted() {
    this.getList();
  },
  components: {
    PostPreview
  }
};
</script>
<style scoped>
.posts-page {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>