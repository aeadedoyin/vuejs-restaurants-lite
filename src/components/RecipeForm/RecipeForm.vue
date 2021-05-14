<template>
  <div class="recipe-form">
    <p>Introduce below the quantity for each ingredient you have and we will calculate how many Pasta Carbonara meals you can cook!</p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input class="recipe-form__form-input" type="number" name="eggs" id="recipe-eggs" value="0" />
      <label for="recipe-pasta">Pasta</label>
      <input class="recipe-form__form-input" type="number" name="pasta" id="recipe-pasta" value="0" />
      <label for="recipe-butter">Butter</label>
      <input class="recipe-form__form-input" type="number" name="butter" id="recipe-butter" value="0" />
      <label for="recipe-milk">Milk</label>
      <input class="recipe-form__form-input" type="number" name="milk" id="recipe-milk" value="0" />
      <label for="recipe-oil">Oil</label>
      <input class="recipe-form__form-input" type="number" name="oil" id="recipe-oil" value="0" />
      <label for="recipe-bacon">Bacon</label>
      <input class="recipe-form__form-input" type="number" name="bacon" id="recipe-bacon" value="0" />
      <button type="submit" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import './RecipeForm.scss';
</style>
<script>
export default {
  name: 'RecipeForm',
  data () {
    return {
      meals: 0
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    calculate (event) {
      event.preventDefault();
    }
  }
}
</script>
