<template>
    <div>
        <button type="button" @click="increaseCounter">더하기</button>
        <button type="button" @click="decreaseCounter">빼기</button>
        <p>The counter is : {{ counter }}</p>
    </div>
</template>
<script>

export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter = this.counter + 1
    },
    decreaseCounter () {
      this.counter = this.counter - 1
    }
  }
}
</script>
