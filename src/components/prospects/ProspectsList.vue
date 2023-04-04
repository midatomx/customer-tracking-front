<template>
  <section>
    <div class="icons d-flex justify-content-end">
      <span class="text-success">
        <router-link class="nav-link active" to="/prospect">
          <i class="fa-solid fa-plus fa-2xl"></i>
        </router-link>
      </span>
    </div>
    <div class="prospects">
      <div class="prospects__item" v-for="prospect in prospects" :key="prospect.id">
        <ProspectCard :prospect="prospect" />
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import ProspectCard from '@/components/prospects/ProspectCard'

export default {
  name: 'ProspectsList',
  components: { ProspectCard },
  setup() {
    const store = useStore()
    const prospects = computed(() => {
      return store.state.prospect.prospectsFilter
    })
    onMounted(() => {
      store.dispatch('prospect/getProspects')
    })
    return { prospects }
  }
}
</script>

<style lang="scss">
.prospects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}

.icons {
  //background-color: #FF9800;

  span {
    margin: 0 10px;
    cursor: pointer;
  }
}

</style>