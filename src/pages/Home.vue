<template>
  <div class="flex flex-col justify-center h-screen my-auto">
    <div class="flex">
      <div class="flex flex-col pl-8 space-y-1">
        <h1 class="text-4xl font-bold">
          Company Inc. Restaurant
        </h1>
        <p>{{ welcomeMessage }}</p>
        <Header />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Home',

  components: {
    Header,
  },

  data() {
    return {
      currentTime: new Date().toLocaleString([], { hour12: true }),
    }
  },

  computed: {
    welcomeMessage() {
      return 'Welcome! Your local time is: ' + this.currentTime
    },
  },

  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString([], { hour12: true })
    }, 1000)
  },
}
</script>
