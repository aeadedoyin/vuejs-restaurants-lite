<template>
  <nav
    aria-label="Pagination"
    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
    <a
      v-if="page != 1"
      class="z-10 bg-red-50 border-red-500 text-red-600 rounded-l-md relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      href="#"
      @click="page--"> Previous </a>
    <a
      v-for="(pageNumber, index) in pages.slice(page-1, page+5)"
      :key="pageNumber"
      aria-current="page"
      class="z-10 bg-red-50 border-red-500 text-red-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      :class="{
        'rounded-l-md': index == 0 && page == 1, 
        'rounded-r-md': index == pages.slice(page-1, page+5).length - 1 && page > pages.length,
        'bg-red-200': pageNumber == page
      }"
      href="#"
      @click="setPages(pageNumber)">
      {{ pageNumber }}
    </a>
    <a
      v-if="page < pages.length"
      class="z-10 bg-red-50 border-red-500 text-red-600 rounded-r-md relative inline-flex items-center px-4 py-2 border text-sm font-medium"
      href="#"
      @click="page++"> Next </a>
  </nav>
</template>

<script>
// Exports
export default {
  props: {
    perPage: {
      type: Number,
      default: 0
    },
    arraySize: {
      type: Number,
      default: 0
    },
  },

  emits: ['pageClicked'],

  data() {
    return {
      pages: [],
      page: 1
    }
  },

  watch: {
    page() {
      this.$emit('pageClicked', this.page)
    }
  },

  mounted () {
    this.setPages(1)
  },

  methods: {
    setPages (pageClicked) {
      this.page = pageClicked
      let numberOfPages = Math.ceil(this.arraySize / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    }
  },
}
</script>
