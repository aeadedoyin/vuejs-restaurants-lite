<template>
  <nav
    aria-label="Pagination"
    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
    <a
      v-if="page != 1"
      class="z-10 cursor-pointer bg-red-50 border-red-500 text-red-600 rounded-l-md relative inline-flex items-center px-2 py-1 border text-sm font-medium"
      @click="setPages(page-1)"> Previous </a>
    <a
      v-for="(pageNumber, index) in pages.slice(page-1, page+5)"
      :key="pageNumber"
      aria-current="page"
      class="z-10 cursor-pointer bg-red-50 border-red-500 text-red-600 relative inline-flex items-center px-2 py-1 border text-sm font-medium"
      :class="{
        'rounded-l-md': index == 0 && page == 1, 
        'rounded-r-md': (index == pages.slice(page-1, page+5).length - 1 && page > pages.length) || pages.slice(page-1, page+5).length - 1 == 0,
        'bg-red-200': pageNumber == page
      }"
      @click="setPages(pageNumber)">
      {{ pageNumber }}
    </a>
    <a
      v-if="page < pages.length"
      class="z-10 cursor-pointer bg-red-50 border-red-500 text-red-600 rounded-r-md relative inline-flex items-center px-2 py-1 border text-sm font-medium"
      @click="setPages(page+1)"> Next </a>
  </nav>
</template>

<script>
// Exports
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
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
    }
  },
  
  watch: {
    arraySize() {
      this.setPages(this.page)
    }
  },

  mounted () {
    this.setPages(1)
  },

  methods: {
    setPages (pageClicked) {
      this.$emit('pageClicked', pageClicked)
      this.pages = []
      let numberOfPages = Math.ceil(this.arraySize / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    }
  },
}
</script>
