<template>
  <div
    class="flex h-screen py-4  px-8 md:px-0">
    <div class="flex flex-col max-w-3xl mx-auto">
      <CompanyHeader :welcome-message="welcomeMessage" />
      <h1 class="text-xl font-medium my-2">
        Restaurants
      </h1>
      <hr>
      <Header class="w-full" />
      <StoreList />
    </div>
  </div>
</template>

<script>
import StoreList from '@/components/StoreList'
import Header from '@/components/Header'
import CompanyHeader from '@/components/CompanyHeader'

export default {
  name: 'Stores',

  components: {
    StoreList,
    Header,
    CompanyHeader
  },

  computed: {
    welcomeMessage () {
      return 'Welcome to our restaurants list!'
    }
  },
}
</script>
