<template>
    <section class="popular-directions">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h2 class="title-section dark-title text-center">Популярные направления из:</h2>
            </div>
        </div>
        <div class="row row-cols-4 g-3 justify-content-center">
            <div class="col-12 col-sm col-md col-lg">
                <div class="card card-directions">
                    <div class="card-body">
                        <h3 class="card-title">
                            Город отправления
                        </h3>
                        <span class="card-value">Ставрополь</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm col-md col-lg">
                <div class="card card-directions">
                    <div class="card-body">
                        <h3 class="card-title">
                            Дата поездки
                        </h3>
                        <span class="card-value">30 января</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mt-4">
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-city-direction">
                    <div class="card-body d-flex justify-content-between">
                        <div class="card-body-city">
                            <h3 class="card-body-city-title">Ставрополь</h3>
                            <span class="card-body-city-value">Москва</span>
                        </div>
                        <div class="card-body-price">
                            <h3 class="card-body-price-title">Цена от</h3>
                            <span class="card-body-price-value">1 600 ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";
.popular-directions {
  padding-top: 72px;

  .card-directions:first-child {
    margin-right: 16px;
  }

  .card-city-direction {
    .card-body {
      &-city {
        &-title {
          font-family: $uni;
          font-weight: $regular;
          font-size: 18px;
          color: $black;
          margin-bottom: 12px;
        }
        &-value {
          display: block;
          font-family: $uni;
          font-weight: $bold;
          font-size: 24px;
          color: $black;
        }
      }
      &-price {
        &-title {
          font-family: $uni;
          font-weight: $regular;
          font-size: 18px;
          color: $black;
          margin-bottom: 12px;
        }
        &-value {
          display: block;
          font-family: $uni;
          font-weight: $bold;
          font-size: 24px;
          color: $black;
        }
      }
    }
  }
  .card-city-direction:hover {
    background-color: #F2F7FF;
  }

  .card-directions {
    width: 100%;
    .card-title {
      font-family: $uni;
      font-weight: $regular;
      font-size: 18px;
      color: $black;
      text-align: center;
      margin-bottom: 12px;
    }
    .card-value {
      display: block;
      font-family: $uni;
      font-weight: $bold;
      font-size: 24px;
      color: $black;
      text-align: center;
    }
  }
}
</style>