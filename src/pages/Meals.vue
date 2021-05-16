<template>
  <div class="flex flex-col justify-center h-screen my-auto">
    <div class="flex">
      <div class="flex flex-col pl-8 space-y-1">
        <h1 class="text-4xl font-bold">
          Company Inc. Restaurant
        </h1>
        <h1 class="text-2xl font-bold">
          Pasta Carbonara Meals
        </h1>
        <div class="w-full max-w-md">
          <Header />
          <div class="bg-white border border-red-300 shadow-md rounded p-3 my-2">
            <RecipeForm :ingredients="secretIngredients" />
          </div>
        </div>
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
}
</script>
