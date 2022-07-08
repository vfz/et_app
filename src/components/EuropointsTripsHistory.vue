<template>
<div class="row europoints-trips-history-section">
  <div class="col-12">
    <h2 class="title-section">
      История заказов
    </h2>
  </div>
  <div class="col-12">
    <div class="pagination">
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "EuropointsTripsHistory"
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.europoints-trips-history-section {
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
  }
  .pagination {
    margin-top: 31px;
    @media screen and (max-width: 991px) {
      margin-top: 16px;
    }
    .page-item {
      @include font($uni,$light,18px,24.3px,$deactivate);
      .page-link:focus {
        color: $secondary;
      }
    }
    .active {
      .page-link {
        background: none;
        box-shadow: none;
        @include font($uni,$regular,18px,24.3px,$secondary);
      }
    }
  }
}
</style>