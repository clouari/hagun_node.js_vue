<template>
  <div>
      <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      htmlString: '<p style="color:red;">단방향, 양방향 예제 만들기</p>'
    }
  }
}
</script>
<style scoped>

</style>
