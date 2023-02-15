<script>
  export default {
    emits: ['change-message'],
    methods: {
      changeMessage() {
        this.$emit('change-message', this.headerMessage)
        this.headerMessage = ''
      }
    },
    data() {
      return {
        headerMessage: ''
      }
    }
  }
</script>

<template>
  <div>
    <span>&uarr;</span>
    <input v-model="headerMessage" placeholder="Välj ett nytt headernamn" />
    <input
      class="btn btn-primary"
      type="button"
      @click="changeMessage"
      value="Ändra headernamn!"
    />
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-left: 10px;
  }

  span {
    font-size: 2em;
    margin-left: 85px;
    margin-bottom: 5px;
  }
</style>
