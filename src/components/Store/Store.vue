<template>
  <div
    v-if="isVisible"
    class="store">
    <div class="store__wrapper">
      <h2 class="store__title">
        {{ title }}
      </h2>
      <span class="store__location">{{ location }}</span>
      <img
        :alt="title"
        :src="photo"
        :title="title" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Store',
  props: {
    title: {
      type: String,
      default: null
    },
    location: {
      type: String,
      default: null
    },
    photo: {
      type: String,
      default: null
    }
  },
  computed: {
    isVisible () {
      return !!this.title && !!this.location
    }
  }
}
</script>

<style lang="scss">
@import './Store.scss';
</style>