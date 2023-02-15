<script>
  export default {
    methods: {
      addComment() {
        this.$store.commit('addComment', this.yourComment)
        this.yourComment = ''
      }
    },
    data() {
      return {
        yourComment: ''
      }
    },
    computed: {
      comments() {
        return this.$store.state.comments
      }
    },
    watch: {
      yourComment(value) {
        if (value.length > 100) {
          this.yourComment = ''
        }
      }
    }
  }
</script>

<template>
  <div>
    <h1>Lämna en kommentar</h1>
    <textarea
      rows="4"
      cols="50"
      placeholder="Lämna en kommentar. Max 100 tecken! Fältet nollställs om du passerar 100 tecken."
      v-model="yourComment"
    />
    <input
      class="btn btn-primary"
      type="button"
      @click="addComment"
      value="Skicka kommentar"
    />
    <h1>Kommentarer:</h1>
    <ul v-for="(comment, index) in comments" :key="index">
      <!--Jag har läst på att man inte ska använda arrayindex som nycklar och att det är lika dåligt som att inte ha någon key alls men nu har vi eslint inställningarna som kräver det och i detta fallet så skickas strängar in i en array och där har jag inget som är helt unikt så därför la jag till index som key här. Men övriga av mina v-for så har jag ju webbanrop där jag har unika nycklar.-->
      <li>{{ comment }}</li>
    </ul>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 2em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }

  ul {
    list-style: none;
    margin-bottom: 10px;
  }
</style>
