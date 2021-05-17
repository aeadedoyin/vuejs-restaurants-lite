<template>
  <div class="flex flex-col justify-center h-screen my-auto px-8 md:px-0">
    <div class="flex">
      <div class="flex flex-col">
        <CompanyHeader :welcome-message="welcomeMessage" />
        <Header />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CompanyHeader from '@/components/CompanyHeader'

export default {
  name: 'Home',

  components: {
    Header,
    CompanyHeader,
  },

  computed: {
    welcomeMessage() {
      return 'Welcome!'
    },
  }
}
</script>
