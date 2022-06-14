<template>
  <section class="there-back-tabs-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="there-back-tabs-wrapper">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Туда</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Обратно</button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThereBackTabs"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.there-back-tabs-section {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  .there-back-tabs-wrapper {
    border-radius: 16px;
    .nav-tabs {
      .nav-link {
        @include font($uni,$bold,24px,32.4px,$base);
      }
      .active {
        border-color: unset;
        border-bottom: none;
        box-shadow: $regular-shadow;
      }
    }
  }
}
</style>