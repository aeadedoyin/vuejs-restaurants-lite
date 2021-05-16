<template>
  <div>
    <ul class="flex justify-between bg-red-300 py-1 px-2 rounded-md whitespace-nowrap">
      <li
        class="hover:bg-white border border-white py-1 px-2 mr-1 rounded-md transition-all duration-200"
        :class="{'bg-white': $route.name == 'Home'}">
        <router-link
          to="/">
          Home
        </router-link>
      </li>
      <li
        class="hover:bg-white border border-white py-1 px-2 mx-1 rounded-md transition-all duration-200"
        :class="{'bg-white': $route.name == 'Meals'}">
        <router-link
          to="/meals">
          Carbonara Meals Calculator
        </router-link>
      </li>
      <li
        class="hover:bg-white border border-white py-1 px-2 ml-1 rounded-md transition-all duration-200"
        :class="{'bg-white': $route.name == 'Restaurants'}">
        <router-link
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
