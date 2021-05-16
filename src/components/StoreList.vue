<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    <hr class="my-2">
    <div class="flex justify-center">
      <Pagination
        :array-size="stores.length"
        :per-page="perPage"
        @pageClicked="pageClicked" />
    </div>
    <hr class="my-2">
    <div class="w-full flex flex-wrap">
      <div
        v-for="store in storesWithImages"
        :key="store.id"
        class="w-1/2 px-2">
        <Store
          class="store-list__item"
          :location="store.location"
          :photo="store.image"
          :title="store.name" />
      </div>
    </div>
    <hr class="my-2">
    <div class="flex justify-center">
      <Pagination
        :array-size="stores.length"
        :per-page="perPage"
        @pageClicked="pageClicked" />
    </div>
    <hr class="my-2">
  </div>
</template>

<script>
import Store from '@/components/Store'
import Pagination from '@/components/Pagination'
import _ from 'lodash'

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
    },
    stores: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      perPage: 10,
      currentPage: 1
    }
  },

  computed: {
    paginatedStores() {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return this.stores.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },

    storesWithImages () {
      return _.map(this.paginatedStores, function (store) {
        store['image'] = 'https://via.placeholder.com/300?text=' + store.name
        return store
      })
    },

    storesCount () {
      return _.size(this.stores)
    }
  },

  methods: {
    pageClicked(_currentPage) {
      this.currentPage = _currentPage
    }
  },
}
</script>
