<script>
  import TheHeader from './components/TheHeader.vue'
  import ChangeHeaderMessage from './components/ChangeHeaderMessage.vue'
  import LeaveComments from './components/LeaveComments.vue'
  export default {
    components: {
      TheHeader,
      ChangeHeaderMessage,
      LeaveComments
    },
    methods: {
      setHeaderMessage(message) {
        this.headerMessage = message.toUpperCase()
      }
    },
    data() {
      return {
        headerMessage: 'AFC'
      }
    }
  }
</script>

<template>
  <TheHeader :message="headerMessage" />
  <ChangeHeaderMessage
    @change-message="setHeaderMessage"
    :message="headerMessage"
  />
  <RouterView />
  <LeaveComments />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
  $main-font: 'Acme', sans-serif;
  $zero: 0;
  $b-size: border-box;

  * {
    margin: $zero;
    padding: $zero;
    box-sizing: $b-size;
    font-family: $main-font;
  }

  input[type='button'] {
    margin-top: 5px;
    padding: 5px;
    color: #fff;
    border: 1px solid #000;
    margin-bottom: 5px;
  }
</style>
