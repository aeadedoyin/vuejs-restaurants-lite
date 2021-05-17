<template>
  <div>
    <div class="flex flex-wrap items-center md:space-x-2 space-y-1">
      <h1 class="text-4xl font-bold">
        Company Inc. Restaurant
      </h1>
      <span
        class="text-xs font-normal bg-red-400 dark:bg-white dark:text-gray-800 text-white px-2 py-1 rounded cursor-pointer capitalize"
        @click="changeTheme">
        Switch {{ mode }}
      </span>
    </div>
    <p>{{ welcomeMessage }} Your local time is: {{ currentTime }}</p>
  </div>
</template>

<script>
// Exports
export default {
  props: {
    welcomeMessage: {
      type: String,
      default: ''
    },
  },

  data() {
    return {
      currentTime: new Date().toLocaleString([], { hour12: true }),
    }
  },

  computed: {
    mode() {
      return this.$store.getters.getTheme === 'dark' ? 'light' : 'dark'
    }
  },

  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString([], { hour12: true })
    }, 1000)
  },

  methods: {
    changeTheme() {
      let mode = this.$store.getters.getTheme

      mode = mode === 'dark' ? 'light' : 'dark'
      this.$store.commit('updateTheme', mode)
    }
  },
}
</script>
