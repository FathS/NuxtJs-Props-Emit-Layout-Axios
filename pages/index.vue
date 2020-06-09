<template>
  <div>
    <div class="home-page">
      <section class="intro">
        <h1>Get The Latest</h1>

        <!-- <TestComp>
          <h1 slot="tester">Merhaba Dünya, Bu Slot Örneği</h1>
        </TestComp>-->
        <TestComp :message="message"></TestComp>
        <component :is="selectedComponent"></component>
      </section>
    </div>
    <postList :posts="postsLoad" />
    <hr style="margin: 60px 0;" />
    <parent />
    <!-- <h1 class="title">Merhaba</h1>
    <div class="test">
      <router-link to="/users">
        <a>User</a>
      </router-link>
      <select v-model="id" name id @change="changeList(id)">
        <option value="0">Tümü</option>
        <option selected value="1">Aktif</option>
        <option value="2">Aktif Değil</option>
      </select>
      {{id}}
    </div>-->
  </div>
</template>

<script>
import PostPreview from "../components/Posts/PostPreview";
import TestComp from "../components/testcomp";
import numeric from "../components/numeric";
import postList from "../components/posts/PostList";
import parent from "../components/PropsAndEmit/Parent";

export default {
  data() {
    return {
      postsLoad: [
        { id: "1", name: "Başlık 1", surname: "Preview1" },
        { id: "2", name: "Başlık 2", surname: "Preview2" }
      ],
      msg: "",
      id: 1,
      message: "HelloProps",
      selectedComponent: "numeric-comp"
    };
  },
  components: {
    PostPreview,
    TestComp,
    "numeric-comp": numeric,
    postList,
    parent
  },
  layout: "users",
  methods: {
    async getList() {
      await this.$axios
        .get("http://localhost:1256/Admin/Accountlist/" + this.id)
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
  computed: {
    isActiveFalse() {
      return this.accountList.filter(x => x.isActive);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style scoped>
</style>
