<template>
  <div class="mt-4 container">
    <div class="row justify-content-center">
      <div class="col-4">
        <form>
          <h4>Nuevo Tipo de Automovil</h4>
          <div class="mb-3 mt-3">
            <input
                v-model="code"
                type="text"
                class="form-control"
                placeholder="Código"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Nombre"
            />
          </div>
          <button
              v-if="!update"
              type="button"
              class="btn btn-success"
              @click="newCartype"
          >
            Aceptar
          </button>
          <!-- <button
              v-if="update"
              type="button"
              class="btn btn-success"
              @click="updateBook()"
          >
            Update
          </button>-->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'CartypeNew',
  setup() {
    const router = useRouter()
    const store = useStore()
    const update = ref(false)
    const code = ref('')
    const name = ref('')

    const newCartype = async() => {
      const cartype = {
        code: code.value,
        name: name.value,
        active: true
      }
      await store.dispatch('cartype/newCartype', cartype)
      router.push({ name: 'carthome' })
    }
    return {
      code,
      name,
      update,
      newCartype
    }
  },
  methods: {}

}
</script>

<style scoped>

</style>