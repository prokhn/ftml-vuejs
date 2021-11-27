<template>
  <form @submit.prevent="emitSubmit">
    <h4>{{ description }}</h4>

    <label>Имя:</label>
    <input v-model="name">

    <label>Желаемая зарплата:</label>
    <input v-model="money">

    <button type="submit">Отправить!</button>

    <div class="debug-info">
      name: {{ name }} money: {{ money }}
    </div>
  </form>
</template>

<script>
export default {
  props: {
    description: String
  },

  data() {
    return {
      name: '',
      money: 0
    }
  },

  methods: {
    emitSubmit() {
      let data = {
        name: this.name,
        money: this.money
      }

      this.$emit('form-submit', data)
    }
  }
}
</script>

<style>
label {
  display: block;
  margin-top: 10px;
  margin-bottom: 3px;
}

button {
  display: block;
  margin: 10px auto;
}

table {
  margin: 0 auto;
}
</style>
