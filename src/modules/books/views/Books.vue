<template>
  <div>
    <h1>Books</h1>
    <div v-if="fetching">
      Loading...
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else>
      <ul class="books-list" v-if="data">
        <li class="book-item" :key="product.id" v-for="product in data.products">
          <ListingBook :product=product />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .books-list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .book-item {
    margin-right: 1rem;
  }

  .book-item::last-child {
    margin-right: none;
  }
</style>

<script lang="ts">
  import { useQuery } from '@urql/vue';

  import ListingBook from '../components/ListingBook.vue';

  export default {
    components: {
      ListingBook,
    },
    setup() {
      const { fetching, data, error } = useQuery({
        query: `{
          products {
            id
            category {
              id
              name
              slug
            }
            title
            author
            description
            image
            slug
            price
            inStock
            isActive
            created
            updated
          }
        }`,
      });

      return {
        fetching,
        data,
        error,
      }
    }
  }
</script>
