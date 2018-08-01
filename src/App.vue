<template>
  <div id="app">
    <p>
      {{msg}}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tag: 'Hello World!'
    }
  }
}
</script>

<style lang= "scss">
$font: #4A4A4A;

#TagRow {
    width: 100%;
    width: 90px;
    height: 44px;
    color: $font;
}
</style>
