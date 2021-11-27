<template>
  <div class="data-transfer-view">
    <simple-form description="Форма для отклика на вакансию"
                 @form-submit="handleSubmit"
    />

    <div>
      <p>Последние формы:</p>
      <table>
        <tr v-for="form in history">
          <td>{{ form.name }}</td>
          <td>{{ form.money }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import SimpleForm from "@/components/simpleForm";

export default {
  components: { SimpleForm },

  data() {
    return {
      history: []
    }
  },

  methods: {
    handleSubmit(application) {
      this.history.push(application)
    }
  }
}
</script>
