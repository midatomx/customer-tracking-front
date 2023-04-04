<template>
  <div class="prospect">
    <div class="prospect__info">
      <div class="prospect__col">
        Nombre: {{ prospect.name }} {{ prospect.firstname }} {{ prospect.lastname }}
      </div>
      <div class="prospect__col">
        Email: {{ prospect.email }}
      </div>
      <div class="prospect__col__interested">
        <span>
          Interesado en: {{ prospect.cartype.name }}
        </span>
      </div>
      <div class="status">
        <span
            :class="
              prospect.active == true ? 'active' :
              prospect.active == false ? 'attended' :
              'default'
             "
        >
        </span>
        {{ prospect.active ? 'Sin atender' : 'Atendido' }}
      </div>
      <div class="icons d-flex justify-content-end mr-1">
        <span class="text-warning"
              v-on:click="updateProspect(prospect.id)"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <span class="text-danger"
              v-on:click="removeProspect(prospect.id)"
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
  name: 'ProspectCard',
  props: ['prospect'],
  methods: {
    updateProspect(id) {
      console.log(id)
    },
    removeProspect(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
.prospect {
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
      //background-color: #FF9800;

      span {
        margin: 0 10px;
        cursor: pointer;

        /*i {
          &:hover {
            cursor: pointer;
          }
        }*/
      }
    }

    .origen {
      margin-bottom: 0.5rem;
    }
  }
}
</style>