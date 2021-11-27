<template>
  <div class="example-view">
    <p>Привет, {{ username }}</p>

    <p v-if="username === 'admin'">
      Ого админ! Я весь твой
    </p>

    <template>
      <p>Тега сверху не существует</p>
    </template>

    <my-component v-for="user in users"
                  :user="user"
    />
  </div>
</template>

<script>
import MyComponent from "@/components/myComponent"

export default {
  components: { MyComponent },

  data() {
    return {
      username: 'prokhn',
      users: ['admin', 'prokhn', 'noname']
    }
  }
}
</script>

<style>
.example-view {
  padding-top: 100px;
}
</style>





