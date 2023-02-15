<script>
  import axios from 'axios'
  export default {
    created() {
      axios
        .get(
          'https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2022-2023'
        )
        .then((result) => {
          this.tableData = result.data.table
        })
    },
    data() {
      return {
        tableData: null
      }
    }
  }
</script>

<template>
  <section>
    <h1>Premier League Tabell 22/23</h1>
    <table v-if="tableData !== null">
      <tr>
        <th>Pos</th>
        <th>Klubb</th>
        <th>Poäng</th>
      </tr>
      <tr :key="data.strTeam" v-for="data in tableData">
        <td>{{ data.intRank }}</td>
        <td>
          <router-link :to="`table/${data.strTeam}`">
            {{ data.strTeam }}
          </router-link>
        </td>
        <td>{{ data.intPoints }}</td>
      </tr>
    </table>
    <p v-else>Laddar tabellen..</p>
  </section>
</template>

<style lang="scss" scoped>
  $center: center;

  p {
    text-align: $center;
  }

  section {
    display: flex;
    justify-content: $center;
    align-items: $center;
    flex-direction: column;
    margin-bottom: 10px;
  }

  table {
    min-width: 250px;
    margin-top: 20px;
    font-size: 1.1em;
    border-collapse: collapse;
  }

  th {
    background-color: #ef0107;
    color: #fff;
    padding: 2px;
    border-bottom: 1px solid #000;
  }

  td {
    padding: 2px;
    border-bottom: 1px solid #000;
  }
</style>
