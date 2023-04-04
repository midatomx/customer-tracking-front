<template>
  <section>
    <div class="icons d-flex justify-content-end">
      <span class="text-success">
        <router-link class="nav-link active" to="/cartype">
          <i class="fa-solid fa-plus fa-2xl"></i>
        </router-link>
      </span>
    </div>
    <div class="cartypes">
      <div class="cartypes__item" v-for="cartype in cartypes" :key="cartype.id">
        <CartypeCard :cartype="cartype" />
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import CartypeCard from '@/components/cartypes/CartypeCard'

export default {
  name: 'CartypesList',
  components: { CartypeCard },
  setup() {
    const store = useStore()

    const cartypes = computed(() => {
      return store.state.cartype.cartypesFilter
    })

    onMounted(() => {
      store.dispatch('cartype/getCartypes')
    })
    return { cartypes }
  }
}
</script>

<style lang="scss">
.cartypes {
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