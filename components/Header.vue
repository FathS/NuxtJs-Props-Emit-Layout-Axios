<template>
  <div>
    <header>
      <ul>
        <li>
          <nuxt-link active-class="active" exact to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class="active" to="/Users">Users</nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>




<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #fae5e5;
  margin-bottom: 50px;
}
header ul {
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  /* justify-content: space-around;
  align-items: center;
  width:80%; */
}
header ul li {
  list-style: none;
  display: inline-block;
  padding-right: 10px;
  color: #858585;
  font-weight: bold;
}
.active {
  padding: 5px 30px;
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 0px 12px rgba(73, 73, 73, 0.5);
}
</style>