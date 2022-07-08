<template>
<div class="row agents-description-section">
  <div class="col-12">
    <h2 class="title-section">
      Приглашаем агентов к сотрудничеству по продаже автобусных билетов
    </h2>
    <p class="description-section">
      <span> (Описание о том, что это и как это работает) </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    </p>
  </div>
  <div class="col-6">
    <h2 class="title-section">
      У вас появится возможность:
    </h2>
    <ul class="list-group">
      <li class="list-group-item">
        – Lorem ipsum dolor sit amet,
      </li>
      <li class="list-group-item">
        – Lorem ipsum dolor sit amet,
      </li>
    </ul>
  </div>
  <div class="col-6">
    <img class="img-section" src="/img/agents/agents.svg" alt="агентам">
  </div>
</div>
</template>

<script>
export default {
  name: "AgentsDescription"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.agents-description-section {
  .col-6 {
    .title-section {
      margin-bottom: 16px;
    }
  }
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
  .description-section {
    @include font($uni,$light,18px,24.3px,$base);
    span {
      font-weight: $regular;
    }
  }
  .list-group {
    &-item {
      @include font($uni,$light,18px,24.3px,$base);
      background: none;
      border: none;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .img-section {
    width: 100%;
    max-width: 624px;
  }
}
</style>