<template>
    <div>
        <h1 v-if="type < 0">마이너스</h1>
        <h1 v-else-if="type > 0 && type < 3">1에서 3사이</h1>
        <h1 v-else>정답!</h1>
    </div>
</template>
<script>

export default {
  data () {
    return {
      type: 0
    }
  }
}
</script>
