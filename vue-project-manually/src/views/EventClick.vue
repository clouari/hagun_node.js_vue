<template>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="월">월</option>
            <option value="화">화</option>
            <option value="수">수</option>
            <option value="목">목</option>
            <option value="금">금</option>
        </select>
    </div>
</template>
<script>

export default {
  data () {
    return {
      selectedValue: ''
    }
  },
  methods: {
    changeSelect () {
      alert(this.selectedValue)
    }
  }
}
</script>
