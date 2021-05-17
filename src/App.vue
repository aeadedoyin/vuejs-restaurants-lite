<template>
  <div
    class="container mx-auto">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  computed: {
    theme() {
      return this.$store.getters.getTheme
    }
  },

  watch: {
    theme() {
      this.changeMode()
    }
  },

  mounted () {
    this.fetchJoke()
    this.changeMode()
  },

  methods: {
    fetchJoke() {
      this.$store.dispatch('fetchJoke')
        .then(response => {
          this.jokeOfDay = response.data.contents.jokes[0]
        })
        .catch(error => {
          console.log(error)
        })
    },

    changeMode() {
      this.theme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark')
    }
  },
}

</script>

<style lang="scss">
// @import '@/assets/styles/styles.scss';
</style>