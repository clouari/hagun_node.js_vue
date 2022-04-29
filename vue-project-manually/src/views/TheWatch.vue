<template>
    <div>
        <h1>Full Name: {{ fullName }}</h1>
        <button type="button" @click="changeName">변경하기</button>
            // 버튼을 클릭하면 firstName 변경으로 인해 watch가 실행되고,
            // firstName 함수를 통해서 fullName이 갱신된다.
    </div>
</template>
<script>
export default {
  data () {
    return {
      firstName: 'hui',
      lastName: 'Jung',
      fullName: ''
    }
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    changeName () {
      this.firstName = 'Dahui'
    }
  }
}
</script>
