<template>
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.149351 0.927276C-0.0497835 0.715149 -0.0497836 0.371223 0.149351 0.159095C0.348485 -0.0530318 0.671345 -0.0530318 0.870479 0.159095L7.36063 7.07272C7.55977 7.28485 7.55977 7.62878 7.36063 7.8409C7.1615 8.05303 6.83864 8.05303 6.6395 7.8409L0.149351 0.927276Z" v-bind:fill="color"/>
    <path d="M13.1295 0.159096C13.3287 -0.0530308 13.6515 -0.0530309 13.8506 0.159096C14.0498 0.371224 14.0498 0.71515 13.8506 0.927278L7.36063 7.8409C7.1615 8.05303 6.83864 8.05303 6.6395 7.8409C6.44037 7.62878 6.44023 7.28485 6.63936 7.07272L13.1295 0.159096Z" v-bind:fill="color"/>
  </svg>
</template>

<script>
export default {
  name: "ArrowDownIcon",
  props: ['color']
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
@import "@/assets/formValidation.scss";

</style>