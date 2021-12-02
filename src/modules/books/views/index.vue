<template>
  <div>
    <h1>Books Home</h1>
    <div v-if="fetching">
      Loading...
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else>
      <ul v-if="data">
        <li v-bind:key="product.id" v-for="product in data.products">
          {{ product.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { useQuery } from '@urql/vue';

  export default {
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
