<script>
  import axios from 'axios'
  export default {
    created() {
      axios
        .get(
          'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League'
        )
        .then((teams) => {
          this.teams = teams.data
        })
    },
    data() {
      return {
        teams: null,
        showJersey: false,
        moreHistory: false
      }
    },
    methods: {
      onClick() {
        this.moreHistory = true
      }
    }
  }
</script>

<template>
  <section v-for="team in teams" :key="team.strTeam">
    <img :src="team[0].strTeamBadge" alt="Arsenal Logga" />
    <h1>{{ team[0].strTeam }}</h1>
    <ul>
      <li>Plats: {{ team[0].strStadiumLocation }}</li>
      <li>Hemmaarena: {{ team[0].strStadium }}</li>
      <li>Kapacitet: {{ team[0].intStadiumCapacity }} personer</li>
      <li>Smeknamn: {{ team[0].strKeywords }}</li>
      <li>
        Hexfärger: {{ team[0].strKitColour1 }} & {{ team[0].strKitColour2 }}
      </li>
      <li>
        Hemmatröja: <span>Klicka i för att visa</span>
        <input type="checkbox" v-model="showJersey" /> <br />
        <img
          v-if="showJersey !== false"
          :src="team[0].strTeamJersey"
          alt="Matchtröja"
        />
      </li>
    </ul>
    <input
      class="btn btn-primary"
      type="button"
      @click="onClick"
      value="Läs mer historik!"
    />
    <p v-if="moreHistory !== false">{{ team[0].strDescriptionEN }}</p>
  </section>
</template>

<style scoped>
  h1 {
    font-size: 2em;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    max-height: 200px;
    max-width: 200px;
  }

  span {
    color: gray;
    font-size: 12px;
    padding-right: 5px;
  }

  p {
    text-align: center;
    width: 50%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
