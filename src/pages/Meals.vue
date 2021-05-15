<template>
  <div class="page page__carbonara">
    {{ ingredientSum }}
    {{ ingredientSum }}
    <h1>Pasta carbonara meals</h1>
    <div class="page__carbonara-meals">
      <RecipeForm :ingredients="secretIngredients" />
    </div>
  </div>
</template>

<script>
import RecipeForm from '@/components/RecipeForm/RecipeForm'

export default {
  name: 'Meals',
  components: {
    RecipeForm,
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
    ingredientSum() {
      return Object.keys(this.secretIngredients).reduce((sum,key)=>sum+parseFloat(this.secretIngredients[key]||0),0)
    }
  },
}
</script>
