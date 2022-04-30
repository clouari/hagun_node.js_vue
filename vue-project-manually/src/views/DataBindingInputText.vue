<template>
    <div>
        <div>
        <input type="text" v-model="valueModel" />
        </div><br />
        <div>
        <textarea v-model="message"> </textarea>
        </div>
        <div>
            <label><input type="checkbox" value="현민" v-model="checked">현민</label>
            <label><input type="checkbox" value="수빈" v-model="checked">수빈</label>
            <label><input type="checkbox" value="수진" v-model="checked">수진</label>
            <label><input type="checkbox" value="다희" v-model="checked">다희</label>
            <br />
            <span>담당자: {{ checked }} </span><br /><br />
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
