<template>
  <div class="header">
    <ul class="header__navigation">
      <li class="header__navigation-item">
        <router-link
          class="header__navigation-item-link"
          to="/">
          Home
        </router-link>
      </li>
      <li class="header__navigation-item">
        <router-link
          class="header__navigation-item-link"
          to="/meals">
          Carbonara Meals Calculator
        </router-link>
      </li>
      <li class="header__navigation-item">
        <router-link
          class="header__navigation-item-link"
          to="/restaurants">
          Our Restaurants
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import './Header.scss';
</style>