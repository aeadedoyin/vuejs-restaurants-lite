<template>
  <div class="store-list">
    <p>Here you can find all of our restaurants. We have {{ storesCount }} stores right now!</p>
    <Store
      v-for="store in storesWithImages"
      :key="store.id"
      class="store-list__item"
      :location="store.location"
      :photo="store.image"
      :title="store.name" />
  </div>
</template>

<script>
import Store from '@/components/Store/Store'
import _ from 'lodash'

export default {
  name: 'StoreList',
  components: {
    Store
  },
  props: {
    stores: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    storesWithImages () {
      return _.map(this.stores, function (store) {
        store['image'] = 'https://via.placeholder.com/300?text=' + store.name

        return store
      })
    },
    storesCount () {
      return _.size(this.stores)
    }
  }
}
</script>

<style lang="scss">
@import './StoreList.scss';
</style>