<template>
  <div class="my-data-button d-inline-flex align-items-center">
    <div class="my-data-button-title">Мои данные</div>
    <ArrowDownIcon/>
  </div>
</template>

<script>
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
export default {
  name: "MyDataButton",
  components: {ArrowDownIcon}

}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.my-data-button {
  cursor: pointer;
  &-title {
    @include font($uni,$bold,18px,24.3px,$base);
    margin-right: 15px;
  }
}
</style>