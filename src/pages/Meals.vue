<template>
  <div
    class="flex h-screen">
    <div class="flex flex-col w-full max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold">
        Company Inc. Restaurant
      </h1>
      <p>
        {{ welcomeMessage }}
      </p>
      <h1 class="text-xl font-medium">
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

export default {
  name: 'Meals',

  components: {
    RecipeForm,
    Header
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
      return 'Welcome to our meals calculator! Your local time is: ' + this.currentTime
    }
  },

  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleString([], { hour12: true })
    }, 1000)
  },
}
</script>
