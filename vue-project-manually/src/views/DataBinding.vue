<template>
  <div>
      <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      htmlString: '<p style="color:red;">This is a red String</p>'
    }
  }
}
</script>
<style scoped>

</style>
