<template>
  <div
    class="flex h-screen py-4 px-8 md:px-0">
    <div class="flex flex-col w-full max-w-3xl mx-auto">
      <CompanyHeader :welcome-message="welcomeMessage" />
      <h1 class="text-xl font-medium my-2">
        Pasta Carbonara Meals
      </h1>
      <Header class="w-full" />
      <div class="w-full">
        <RecipeForm :ingredients="secretIngredients" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm'
import Header from '@/components/Header'
import CompanyHeader from '@/components/CompanyHeader'

export default {
  name: 'Meals',

  components: {
    RecipeForm,
    Header,
    CompanyHeader,
  },
  
  data() {
    return {
      secretIngredients: {
        pasta: 500,
        bacon: 200,
        eggs: 1,
        milk: 200,
        butter: 500,
        oil: 100,
      },
    }
  },

  computed: {
    welcomeMessage () {
      return 'Welcome to our meals calculator!'
    }
  },
}
</script>
