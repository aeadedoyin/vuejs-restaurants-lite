<template>
  <div>
    <div v-if="showForm">
      <p class="my-2 text-sm italic">
        Introduce below the quantity for each ingredient you have and we will
        calculate how many Pasta Carbonara meals you can cook!
      </p>
      <hr class="my-2">
      <form
        v-if="showForm"
        class="form"
        @submit.prevent="calculate">
        <div class="control">
          <label for="recipe-eggs">Eggs</label>
          <input
            id="recipe-eggs"
            v-model.number="recipeForm.eggs"
            name="eggs" 
            required
            type="number" />
        </div>
        <div class="control">
          <label for="recipe-pasta">Pasta</label>
          <input
            id="recipe-pasta"
            v-model.number="recipeForm.pasta"
            name="pasta"
            required
            type="number" />
        </div>
        <div class="control">
          <label for="recipe-butter">Butter</label>
          <input
            id="recipe-butter"
            v-model.number="recipeForm.butter"
            name="butter"
            required
            type="number" />
        </div>
        <div class="control">
          <label for="recipe-milk">Milk</label>
          <input
            id="recipe-milk"
            v-model.number="recipeForm.milk"
            name="milk"
            required
            type="number" />
        </div>
        <div class="control">
          <label for="recipe-oil">Oil</label>
          <input
            id="recipe-oil"
            v-model.number="recipeForm.oil"
            name="oil"
            required
            type="number" />
        </div>
        <div class="control">
          <label for="recipe-bacon">Bacon</label>
          <input
            id="recipe-bacon"
            v-model.number="recipeForm.bacon"
            name="bacon"
            required
            type="number" />
        </div>
        <div class="flex w-full justify-end px-2">
          <button
            class="button"
            type="submit">
            Calculate
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      <Banner />
      <p class="mb-2">
        You can make <span class="font-bold text-lg">{{ meals }} meals</span>
      </p>
      <p class="mb-2">
        Here is the Exact Recipe! (per Meal):
      </p>
      <ul class="list-disc list-inside">
        <li
          v-for="(measurement, ingredient) in ingredients"
          :key="ingredient"
          class="capitalize">
          {{ ingredient }} - {{ measurement }}
        </li>
      </ul>
      <div class="flex justify-end">
        <button
          class="button"
          type="submit"
          @click="showForm = true; recipeForm = {}">
          Reset
        </button>
      </div>
      <hr class="my-2">
      <div class="font-bold">
        Joke of Day!
      </div>
      <div>{{ jokeOfDay }}</div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  name: 'RecipeForm',

  components: {
    Banner,
  },

  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      jokeOfDay: this.$store.getters.getJokeOfDay.joke?.text,
      recipeForm: {},
      meals: 0,
      showForm: true
    }
  },

  computed: {
    secretIngredientSum() {
      return Object.keys(this.secretIngredients).reduce((sum,key)=>sum+parseFloat(this.secretIngredients[key]||0),0)
    }
  },
  
  methods: {
    calculate() {
      const secretIngredientSum = Object.keys(this.ingredients).reduce((sum,key)=>sum+parseFloat(this.ingredients[key]||0),0)
      const recipeFormSum = Object.keys(this.recipeForm).reduce((sum,key)=>sum+parseFloat(this.recipeForm[key]||0),0)
    
      this.meals = Math.round(recipeFormSum/secretIngredientSum)
      this.meals == 0 ?  alert('The inputed recipe is too small to make any meal!') : this.showForm = false
    },
  },
}
</script>
