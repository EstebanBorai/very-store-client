<template>
  <div class="book">
    <figure>
      <img :src="'http://localhost:8000/media/' + product.image" width="200" />
    </figure>
    <article>
      <header>
        <h3>{{ product.title }}</h3>
        <span class="author">{{ product.author }}</span>
      </header>
      <footer>
        <span class="field">Price: <span class="value">${{ product.price }}</span></span>
        <router-link class="book-link" :to="'/books/' + product.slug">About</router-link>
      </footer>
    </article>
  </div>
</template>

<style scoped>
  .book {
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    height: 500px;
    justify-content: space-between;
    padding: 1rem;
    width: 250px;

    -webkit-box-shadow: 9px 10px 65px -17px rgba(0,0,0,0.37);
    -moz-box-shadow: 9px 10px 65px -17px rgba(0,0,0,0.37);
    box-shadow: 9px 10px 65px -17px rgba(0,0,0,0.37);
  }

  .book figure {
    margin: 0;
    margin-bottom: 1rem;
  }

  .book h3 {
    margin: 0;
    margin-bottom: .25rem;
  }

  article {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .author {
    color: #a3a3a3;
    display: inline-block;
    margin-bottom: .5rem;
  }

  footer {
    height: min-content;
    justify-self: flex-end;
    width: 100%;
  }

  .field {
    color: #888888;
    display: flex;
    font-size: .95rem;
    font-weight: bold;
    justify-content: space-between;
    margin-bottom: .5rem;
    text-transform: uppercase;
    width: 100%;
  }

  .value {
    color: #333333;
  }

  .book-link {
    background-color: #185772;
    border-radius: .25rem;
    color: #ffffff;
    font-size: .9rem;
    display: inline-block;
    padding: .5rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: 90%;
  }

  .book-link:hover {
    background-color: #124459;
  }
</style>

<script lang="ts">
  import { useQuery } from '@urql/vue';

  export default {
    props: {
      product: {
        id: Number,
        title: String,
        description: String,
        image: String,
      }
    },
  }
</script>
