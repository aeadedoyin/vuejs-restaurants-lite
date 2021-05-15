<template>
  <div class="recipe-form">
    <p>Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!</p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input
        id="recipe-eggs"
        class="recipe-form__form-input"
        name="eggs"
        value="" />
      <label for="recipe-pasta">Pasta</label>
      <input
        id="recipe-pasta"
        class="recipe-form__form-input"
        name="pasta"
        value="" />
      <label for="recipe-butter">Butter</label>
      <input
        id="recipe-butter"
        class="recipe-form__form-input"
        name="butter"
        value="" />
      <label for="recipe-milk">Milk</label>
      <input
        id="recipe-milk"
        class="recipe-form__form-input"
        name="milk"
        value="" />
      <label for="recipe-oil">Oil</label>
      <input
        id="recipe-oil"
        class="recipe-form__form-input"
        name="oil"

        value="0" />
      <label for="recipe-bacon">Bacon</label>
      <input
        id="recipe-bacon"
        class="recipe-form__form-input"
        name="bacon"

        value="0" />
      <button
        type="submit"
        @click="calculate">
        Calculate
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RecipeForm',
  props: {
    ingredients: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      meals: 0
    }
  },
  methods: {
    calculate (event) {
      event.preventDefault()
    }
  }
}
</script>

<style lang="scss">
@import './RecipeForm.scss';
</style>