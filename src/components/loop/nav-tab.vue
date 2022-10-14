<template>
  <button
      v-for="passenger in passengers"
      :key="passenger.id"
      :class="{active: passenger.id === 1}"
      class="nav-link"
      :id="'passenger-'+passenger.id+'-tab'"
      data-bs-toggle="tab"
      :data-bs-target="'#passenger-'+passenger.id"
      type="button" role="tab"
      :aria-controls="'passenger-'+passenger.id"
      :aria-selected="{true : passenger.id === 1}">Пассажир №{{passenger.id}}</button>
</template>

<script>
export default {
  name: "nav-tab",
  props: {
    passengers: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>