<template>
  <div id="app">
    <el-container>
      <el-aside width="250px">
        <div class="heading-logo">
          <i class="lnr lnr-database"></i>
          <h1>Vuex lib</h1>
        </div>
        <el-menu text-color="#c98dff" active-text-color="#FFF" :default-active="defaultActive">
          <el-menu-item index="1" @click="handleRoute('/')">
            <i class="lnr lnr-home"></i>
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="2" @click="handleRoute('/users')">
            <i class="lnr lnr-users"></i>
            <span slot="title">Users</span>
          </el-menu-item>
          <el-menu-item index="3" @click="handleRoute('/books')">
            <i class="lnr lnr-book"></i>
            <span slot="title">Books</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <i class="lnr lnr-layers"></i>
          Applicaton state with vuex
        </el-header>

        <el-row type="flex" justify="center">
          <el-col :span="22">
            <router-view />
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Vuex',
  data: () => ({
    defaultActive: '2'
  }),
  methods: {
    handleRoute(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style>
body {
  cursor: default;
  margin: 0;
  padding: 0;
  background-color: #f8f9fd;
  font-size: 16px;
  color: #343b63;
}
</style>
