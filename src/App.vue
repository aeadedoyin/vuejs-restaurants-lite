<template>
  <div
    id="app"
    class="bg-cover">
    <div
      class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  mounted () {
    this.fetchJoke()
  },

  methods: {
    fetchJoke() {
      this.$store.dispatch('fetchJoke')
        .then(response => {
          this.jokeOfDay = response.data.contents.jokes[0]
        })
    }
  },
}

</script>

<style lang="scss">
// @import '@/assets/styles/styles.scss';
</style>