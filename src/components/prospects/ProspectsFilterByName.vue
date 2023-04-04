<template>
  <div class="search">
    <input type="text"
           placeholder="Buscar por nombre"
           v-model="name"
           @keyup="filter"
    >
  </div>
  <div>
    <button type="button"
            @click=""
    >

    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'ProspectsFilterByName',
  setup() {
    const store = useStore()
    const name = ref('')

    const filter = () => {
      store.dispatch('prospect/prospectFilterByName', name.value)
    }

    return {
      name,
      filter
    }
  }
}
</script>

<style lang="scss">
.search {
  width: 400px;
  margin: 3rem auto 0;

  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
}
</style>