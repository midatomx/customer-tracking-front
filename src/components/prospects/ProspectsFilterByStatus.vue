<template>
  <div class="filter">
    <item @click="filter('')">Todos</item>
    <item @click="filter('false')">Cerradas</item>
    <item @click="filter('true')">Abiertas</item>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'ProspectsFilterByStatus',
  setup() {
    const store = useStore()

    const filter = ((status) => {
      store.dispatch('prospect/prospectFilterByStatus', status)
    })

    return { filter }
  }
}
</script>


<style lang="scss">
.filter {
  width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;

  .item {
    padding: 1rem 0.5rem;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;

    &:hover {
      color: var(--text-orange);
    }
  }
}
</style>