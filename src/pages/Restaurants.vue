<template>
  <div
    class="flex h-screen">
    <div class="flex flex-col max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold">
        Company Inc. Restaurant
      </h1>
      <p>
        {{ welcomeMessage }}
      </p>
      <h1 class="text-xl font-medium">
        Restaurants
      </h1>
      <hr>
      <Header class="w-full" />
      <StoreList
        :stores="stores" />
    </div>
  </div>
</template>

<script>
import StoreList from '@/components/StoreList'
import Header from '@/components/Header'
const stores = require('@/assets/stores/stores.json')

export default {
  name: 'Stores',

  components: {
    StoreList,
    Header,
  },

  data () {
    return {
      currentTime: new Date().toLocaleString([], { hour12: true }),
      stores,
    }
  },

  computed: {
    welcomeMessage () {
      return 'Welcome to our restaurants list! Your local time is: ' + this.currentTime
    }
  },

  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString([], { hour12: true })
    }, 1000)
  },
}
</script>
