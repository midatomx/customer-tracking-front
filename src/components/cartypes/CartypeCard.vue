<template>
  <div class="cartype">
    <div class="cartype__info">
      <div class="cartype__col">
        Código: {{ cartype.code }}
      </div>
      <div class="cartype__col">
        Nombre: {{ cartype.name }}
      </div>
      <div class="status">
        <span
            :class="
              cartype.active == true ? 'active' :
              cartype.active == false ? 'attended' :
              'default'
             "
        >
        </span>
        {{ cartype.active ? 'Sin atender' : 'Atendido' }}
      </div>
      <div class="icons d-flex justify-content-end mr-1">
        <span class="text-warning"
              v-on:click="updateCartype(cartype.id)"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <span class="text-danger"
              v-on:click="removeCartype(cartype.id)"
        >
          <i class="fa-solid fa-trash"></i>
        </span>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'CartypeCard',
  props: ['cartype'],
  methods: {
    updateCartype(id) {
      console.log(id)
    },
    removeCartype(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
.cartype {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  //cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;

  &:hover {
    transform: scale(1.05);

    h3 {
      color: var(--text-orange);
    }
  }

  span {
    color: var(--text-gray);
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  &__info {
    padding: 1.5rem;

    .status {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      span {
        color: var(--text-gray);

        &:first-child {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      }

      .active {
        background-color: green;
      }

      .attended {
        background-color: red;
      }

      .default {
        background-color: white;
      }
    }

    .icons {

      span {
        margin: 0 10px;
        cursor: pointer;
      }
    }

    .origen {
      margin-bottom: 0.5rem;
    }
  }
}
</style>