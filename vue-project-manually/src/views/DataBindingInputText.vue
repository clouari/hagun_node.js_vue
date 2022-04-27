<template>
    <div>
        <div>
        <input type="text" v-model="valueModel" />
        </div><br />
        <div>
        <textarea v-model="message"> </textarea>
        </div>
        <div>
            <label><input type="checkbox" value="서울" v-model="checked">서울</label>
            <label><input type="checkbox" value="부산" v-model="checked">부산</label>
            <label><input type="checkbox" value="제주" v-model="checked">제주</label>
            <br />
            <span>체크한 지역: {{ checked }} </span><br /><br />
        </div>
        <div>
            <label><input type="radio" v-bind:value="radioValue1" v-model="picked">월요일</label>
            <label><input type="radio" v-bind:value="radioValue2" v-model="picked">화요일</label>
            <label><input type="radio" v-bind:value="radioValue3" v-model="picked">수요일</label>
            <label><input type="radio" v-bind:value="radioValue4" v-model="picked">목요일</label>
            <label><input type="radio" v-bind:value="radioValue5" v-model="picked">금요일</label>
            <br />
            <span>체크한 요일: {{ picked }} </span>
        </div>
    </div>
</template>
<script>

export default {
  data () {
    return {
      checked: [],
      picked: '',
      radioValue1: '월요일',
      radioValue2: '화요일',
      radioValue3: '수요일',
      radioValue4: '목요일',
      radioValue5: '금요일'
    }
  }
}
</script>
