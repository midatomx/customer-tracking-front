<template>
  <div class="mt-4 container">
    <div class="row justify-content-center">
      <div class="col-4">
        <form>
          <h4>Nuevo Prospecto</h4>
          <div class="mb-3 mt-3">
            <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Nombre"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="firstname"
                type="text"
                class="form-control"
                placeholder="Apellido paterno"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="lastname"
                type="text"
                class="form-control"
                placeholder="Apellido materno"
            />
          </div>
          <div class="mb-3 mt-3">
            <select class="form-control"
                    v-model="cartypeId"
            >
              <option disabled value="">Automovil de su interes</option>
              <option v-for="option in cartypeOptions" :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="address"
                type="text"
                class="form-control"
                placeholder="Dirección"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="state"
                type="text"
                class="form-control"
                placeholder="Estado"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="city"
                type="text"
                class="form-control"
                placeholder="Ciudad"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="email"
                type="text"
                class="form-control"
                placeholder="Correo electrónico"
            />
          </div>
          <div class="mb-3 mt-3">
            <input
                v-model="phone"
                type="text"
                class="form-control"
                placeholder="Teléfono"
            />
          </div>
          <div class="mb-3 mt-3">
            <textarea
                rows="5"
                cols="60"
                v-model="comments"
                class="form-control"
                placeholder="Comentarios"
            />
          </div>

          <button
              v-if="!update"
              type="button"
              class="btn btn-success"
              @click="newProspect"
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
  name: 'ProspectNew',
  setup() {
    const router = useRouter()
    const store = useStore()
    const update = ref(false)
    const name = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const cartypeId = ref('')
    const address = ref('')
    const state = ref('')
    const city = ref('')
    const email = ref('')
    const phone = ref('')
    const comments = ref('')
    const cartypeOptions = ref([
      { text: 'Sports Utility Vehicle', value: '1' },
      { text: 'Hatchback', value: '2' },
      { text: 'Crossover', value: '3' },
      { text: 'Convertible', value: '4' },
      { text: 'Sedan', value: '5' },
      { text: 'Sports Car', value: '6' },
      { text: 'Coupe', value: '7' },
      { text: 'Minivan', value: '8' },
      { text: 'Station Wagon', value: '9' },
      { text: 'Pickups', value: '10' }
    ])

    const newProspect = () => {
      const prospect = {
        cartype: {
          id: cartypeId.value
        },
        name: name.value,
        firstname: firstname.value,
        lastname: lastname.value,
        address: address.value,
        state: state.value,
        city: city.value,
        email: email.value,
        phone: phone.value,
        comments: comments.value,
        active: true
      }
      console.log(prospect)

      store.dispatch('prospect/newProspect', prospect)
      // router.push('/')
      router.push({ name: 'home' })
    }
    return {
      name,
      firstname,
      lastname,
      cartypeId,
      address,
      state,
      city,
      email,
      phone,
      comments,
      update,
      cartypeOptions,
      newProspect
    }
  },
  methods: {}

}
</script>

<style scoped>

</style>