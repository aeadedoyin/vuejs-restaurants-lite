<template>
  <div class="bg-red-400 py-1 px-2 rounded">
    <ul class="flex flex-col md:flex-row justify-between md:whitespace-nowrap space-y-1 md:space-x-1">
      <li
        class="hover:bg-white dark:hover:text-black border-b border-white px-2 transition-all duration-200"
        :class="{'bg-white dark:text-black rounded-md': $route.name == 'Home'}">
        <router-link
          to="/">
          Home
        </router-link>
      </li>
      <li
        class="hover:bg-white dark:hover:text-black border-b border-white px-2 transition-all duration-200"
        :class="{'bg-white dark:text-black rounded-md ': $route.name == 'Meals'}">
        <router-link
          to="/meals">
          Carbonara Meals Calculator
        </router-link>
      </li>
      <li
        class="hover:bg-white dark:hover:text-black border-b border-white px-2 transition-all duration-200"
        :class="{'bg-white dark:text-black rounded-md ': $route.name == 'Restaurants'}">
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
