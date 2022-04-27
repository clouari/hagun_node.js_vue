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
            <span>체크한 지역: {{ checked }} </span>
        </div>
    </div>
</template>
<script>

export default {
  data () {
    return {
      checked: []
    }
  }
}
</script>
