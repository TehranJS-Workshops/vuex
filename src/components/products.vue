<template>
  <el-main>
    <h2>Products</h2>

    <el-table :data="products" style="width: 100%" stripe border height="800" show-summary>
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="desc" label="Description"></el-table-column>
      <el-table-column prop="basePrice" label="Base price ($)" width="150" sortable></el-table-column>
      <el-table-column prop="price" label="Price ($)" width="150" sortable></el-table-column>
      <el-table-column prop="stocked" label="Stocked" width="150" :filters="[{ text: 'Yes', value: true }, { text: 'No', value: false }]" :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.stocked ? 'success' : 'primary'" disable-transitions>{{scope.row.stocked ? "Yes" : "No"}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<style>
</style>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Products',
  computed: {
    ...mapState(['products'])
  },
  mounted() {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(255, 255, 255, 0.7)'
    })

    this.getProducts().then(() => {
      setTimeout(() => {
        loading.close()
      }, 1000)
    })
  },
  methods: {
    ...mapActions(['getProducts']),
    filterTag(value, row) {
      return row.stocked === value
    }
  }
}
</script>

<style scoped>
</style>
