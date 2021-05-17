<template>
  <div class="store-list">
    <p class="my-2 italic text-sm">
      Here you can find all of our restaurants. We have {{ storesCount }} stores right now!
    </p>
    <hr class="my-2">
    <div class="flex justify-center px-2">
      <form class="form w-full md:w-1/2">
        <input
          v-model="storeFilter"
          placeholder="Search store"
          type="text">
      </form>
    </div>
    <hr class="my-2">
    <div
      v-if="stores.length > 0"
      class="w-full flex flex-wrap px-1">
      <div
        v-for="store in paginatedStores"
        :key="store.id"
        class="w-1/2 px-1 md:w-1/4">
        <Store
          class="store-list__item"
          :joke="jokeOfDay"
          :location="store.location"
          :photo="store.image"
          :title="store.name" />
      </div>
    </div>
    <div
      v-else
      class="h-full flex flex-col justify-center">
      <div class="mx-auto spinner"></div>
    </div>
    <hr class="my-2">
    <div class="flex justify-center">
      <Pagination
        :array-size="filteredStores.length"
        :page="currentPage"
        :per-page="perPage"
        @pageClicked="pageClicked" />
    </div>
    <hr class="my-2">
  </div>
</template>

<script>
import Store from '@/components/Store'
import Pagination from '@/components/Pagination'

export default {
  name: 'StoreList',

  components: {
    Store,
    Pagination
  },

  props: {
    totalStores: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      stores: [],
      jokeOfDay: this.$store.getters.getJokeOfDay.joke?.text,
      storeFilter: '',
      perPage: 20,
      currentPage: 1
    }
  },

  computed: {
    filteredStores() {
      return this.stores.filter(store => {
        return store.name.toLowerCase().includes(this.storeFilter.toLowerCase())
      })
    },

    paginatedStores() {
      return this.filteredStores.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },

    storesCount () {
      return this.stores.length
    }
  },

  watch: {
    storeFilter() {
      this.currentPage = 1
    }
  },

  mounted () {
    this.$store.dispatch('fetchStores')
      .then(response => {
        this.stores = response.data
      })
  },

  methods: {
    pageClicked(_currentPage) {
      this.currentPage = _currentPage
    }
  },
}
</script>
