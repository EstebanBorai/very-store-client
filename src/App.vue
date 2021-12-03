<template>
  <header>
    <router-link to="/">
      <h1>Very Bookstore</h1>
    </router-link>
    <nav>
      <router-link to="/books" class="nav-link">Books</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <small>All Rights Reserved &copy; 2021</small>
  </footer>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

<style scoped>
  header {
    background-color: #2c3e50;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  header h1 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;
  }

  header nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  header nav a {
    color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
    text-decoration: none;
  }

  .nav-link.router-link-active,
  .nav-link.router-link-exact-active {
    text-decoration: underline;
  }

  main, footer {
    box-sizing: border-box;
    padding: 1rem 2rem;
  }

  main {
    min-height: calc(100vh - 2.5rem);
  }

  footer {
    background-color: #2c3e50;
    color: #ffffff;
    text-align: center;
  }
</style>
