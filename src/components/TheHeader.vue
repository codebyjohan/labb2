<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <header>
    <nav>
      <h1>{{ message }}</h1>
      <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link to="/table">Tabell</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 5.5rem;
    background-color: #ef0107;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid #fff;
  }

  h1 {
    color: white;
  }

  header nav {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header ul {
    list-style: none;
    display: flex;
  }

  li {
    margin: 0 0.5rem;
  }
</style>
