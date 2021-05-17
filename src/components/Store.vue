<template>
  <div
    v-if="isVisible"
    class="border rounded-md p-2 m-2">
    <div>
      <h2>
        {{ title }}
      </h2>
      <span class="italic font-bold text-sm">{{ location }}</span>
      <img
        :alt="title"
        :src="'https://via.placeholder.com/300?text=' + title"
        :title="title" />

      <p class="text-xs py-2 border-t">
        <span class="font-bold">Joke of Day</span>
        {{ joke }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Store',

  props: {
    joke: {
      type: String,
      default: null
    },
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
