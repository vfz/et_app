<template>
  <div class="my-data-button d-inline-flex align-items-center">
    <div v-if="isLogin" class="my-data-button-login">
      <select id="inputState" class="form-select my-data-button-title">
        <option>Мои данные</option>
        <option>...</option>
      </select>
    </div>
      <button v-on:click="rotateArrow" v-if="isCollapse" class="my-data-button-collapse d-flex justify-content-between align-items-center d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseData" aria-expanded="false" aria-controls="collapseData">
        Мои данные
        <ArrowDownIcon class="arrow-down-collapse arrow-up" color="#283256"/>
      </button>
    <div v-else class="my-data-button-notLogin d-flex justify-content-between align-items-center w-100">
      <div class="my-data-button-notLogin-title">
        Данные из личного кабинета
      </div>
      <div class="arrow-down">
        <ArrowDownIcon color="#C4C4C4"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
export default {
  name: "MyDataButton",
  components: {ArrowDownIcon},
  data(){
    return {
      isLogin : false,
      isShow: false,
    }
  },
  props: ['isLogin', 'isCollapse', 'isShow'],
  methods: {
    rotateArrow(event) {
      const parent = event.target;
      const arrow = parent.querySelector('.arrow-down-collapse');
      this.isShow = !this.isShow;
      if (this.isShow === true) {
        arrow.classList.remove('arrow-up')
      }
      else {
        arrow.classList.add('arrow-up')
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.my-data-button-collapse {
  padding: 0;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  .my-data-button-login-title {
    @include font($uni,$bold,14px,18.9px,$base);
  }
  .arrow-down-collapse {
    @include animation;
    transform: rotate(0deg);
    pointer-events: none;
  }
  .arrow-up {
    @include animation;
    transform: rotate(180deg);
  }

}
.my-data-button {
  cursor: pointer;
  &-title {
    @include font($uni,$bold,18px,24.3px,$base);
    border: none;
  }
  &-login {
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 16px;
    }
    .my-data-button-title {
      @media screen and (max-width: 767px) {
        padding-left: 0;
        padding-right: 0;
        font-size: 14px;
        line-height: 18.9px;
      }
    }
  }
}
.my-data-button-notLogin {
  margin-bottom: 32px;
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  &-title {
    @include font($uni,$light,14px,18.9px,$deactivate);
  }
  .arrow-down {
    width: 9px;
  }
}
</style>