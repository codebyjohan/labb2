<script>
  export default {
    methods: {
      goBack() {
        return this.$router.go(-1)
      }
    }
  }
</script>

<template>
  <section>
    <h1>{{ $route.params.team }}</h1>
    <p>Välkommen till {{ $route.params.team }}s enskilda sida.</p>
    <input
      class="btn btn-primary"
      type="button"
      @click="goBack"
      value="Gå tillbaka!"
    />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
