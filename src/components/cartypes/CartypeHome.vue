<template>
  <div><h1>Tipos de Automóviles</h1></div>
  <CartypeFilterByStatus />
  <CartypeFilterByName />
  <CartypeList />
</template>

<script>
import CartypeCard from '@/components/cartypes/CartypeCard'
import CartypeList from '@/components/cartypes/CartypeList'
import CartypeFilterByStatus from '@/components/cartypes/CartypeFilterByStatus'
import CartypeFilterByName from '@/components/cartypes/CartypeFilterByName'

export default {
  name: 'Home',
  components: {
    CartypeFilterByName,
    CartypeFilterByStatus,
    CartypeCard,
    CartypeList
  }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  margin-bottom: 3rem;
  text-align: center;
}

.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}

img {
  width: 100%;
}

.menu {
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