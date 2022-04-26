<template>
  <h1> {{ msg }} </h1>
</template>

<script>
export default {
    // data 는 함수임:  data: function () == data ()
    data() {
        return {
            msg: 'Hello Vue!'
        }
    }
}
</script>

<style>
h1 {
    color: red;
}

</style>