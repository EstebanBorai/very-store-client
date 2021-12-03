<template>
  <div>
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <h1>{{ data.productsBySlug[0].title }}</h1>
      <article class="book">
        <figure>
          <img
            :src="'http://localhost:8000/media/' + data.productsBySlug[0].image"
            width="300"
          />
        </figure>
        <div class="properties">
          <div class="dataset">
            <h3>Description</h3>
            <p>{{ data.productsBySlug[0].description }}</p>
          </div>
          <div class="dataset">
            <h3>Details</h3>
            <span class="field">
              <span class="key">Author(s)</span>
              <span class="value">{{ data.productsBySlug[0].author }}</span>
            </span>
            <span class="field">
              <span class="key">ISBN</span>
              <span class="value">{{ data.productsBySlug[0].id }}</span>
            </span>
            <span class="field">
              <span class="key">Price</span>
              <span class="value">${{ data.productsBySlug[0].price }}</span>
            </span>
            <span class="field">
              <span class="key">Category</span>
              <span class="value">{{ data.productsBySlug[0].category.name }}</span>
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
h1 {
  border-bottom: .25rem solid #2c3e50;
  padding-bottom: 1rem;
  width: 100%;
}

h3 {
  margin: 0;
  margin-bottom: 1rem;
}

.book {
  display: flex;
}

.book figure {
  margin: 0;
  margin-right: 2rem;
}

.properties {
  display: flex;
}

.dataset {
  margin-right: 2rem;
  width: 300px;
}

.field {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  text-transform: uppercase;
}

.key {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
}

.value {
  background-color: #ffffff;
  color: #333333;
  padding: 0.25rem 0.5rem;
}
</style>

<script lang="ts">
import { useQuery } from '@urql/vue';

export default {
  data() {
    const { fetching, data, error } = useQuery({
      query: `
          query ($slug: String!) {
            productsBySlug(slug: $slug) {
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
      variables: {
        slug: this.$route.params.slug,
      }
    });

    return {
      fetching,
      data,
      error,
    }
  }
}
</script>
