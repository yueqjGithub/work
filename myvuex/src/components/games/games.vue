<template>
  <div>
    <a href="/static/games/flybird.html">飞翔的鸡儿</a>
    <a @click="toMtui">mint-ui</a>
  </div>
</template>

<script>
export default {
  name: 'flyBird',
  data () {
    return {}
  },
  methods: {
    toMtui: function () {
      this.$router.push({path: '/mtui'})
    }
  }
}
</script>

<style scoped>

</style>
