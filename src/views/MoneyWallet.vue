<template>
  <div class="money-wallet-view">
    <p>Привет, {{ username }}</p>
    <p>У тебя на счете {{ money }}</p>

    <b v-if="money < 1500">
      Ты бомж!! Ха-ха
    </b>
    <b v-else-if="money < 2500">
      Норм чел с деньгами
    </b>
    <b v-else>Богач!</b>

    <button @click="money += 1000">
      Много работать
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'prokhn',
      money: 0
    }
  }
}
</script>

<style>
.money-wallet-view button {
  display: block;
  margin: 10px auto 0;
}
</style>





