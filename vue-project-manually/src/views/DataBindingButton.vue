<template>
    <div class="container" v-bind:class="
        {'active': isActive, 'text-red': hasError}">Class Binding<br>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''">Click!</button>
    </div>

</template>

<script>

export default {
  data () {
    return {
      textValue: '',
      isActive: true,
      hasError: false
    }
  }
}
</script>

<style scoped>
    .container {
        width: 100%;
        height: 50px;
    }
    .active {
        background-color: rgb(23,185,123);
        font-weight: bold;
    }
    .text-red {
        color:red;
    }
</style>
