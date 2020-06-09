<template>
  <div class="row">
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post-details">
        <div>Last updated on XXX</div>
        <div>written by Name</div>
      </div>
      <p>Content of the post</p>
      <p>
        Let me know what you think about the post, send a mail to
        <a
          href="mailto:fathsengl@hotmail.com"
        >fathsengl@hotmail.com</a>
        <span>{{$route.params.id}}</span>
      </p>
    </section>
  </div>
</template>
<script>
</script>
<style  scoped>
.row {
  width: 100%;
  display: flex;
  justify-content: center;
}

.post {
  text-align: center;
}
.post-details {
  padding: 10px;
  color: gray;
  border-bottom: 3px solid gray;

  margin: 10px 0;
}
</style>