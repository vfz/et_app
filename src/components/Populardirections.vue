<template>
    <section class="popular-directions">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h2 class="title-section dark-title text-center">Популярные направления из:</h2>
            </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div class="card card-directions">
                <div class="card-body">
                  <h3 class="card-title">
                    Город отправления
                  </h3>
                  <span class="card-value">Ставрополь</span>
                </div>
              </div>
              <div class="card card-directions">
                <div class="card-body">
                  <h3 class="card-title">
                    Дата поездки
                  </h3>
                  <span class="card-value">30 <span>января</span></span>
                </div>
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
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }

  .card-directions:first-child {
    margin-right: 16px;
    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 8px;
    }
  }

  .card-city-direction {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    max-width: 424px;
    @media screen and (max-width: 768px) {
      max-width: unset;
    }
    .card-body {
      padding: 12px 16px;
      @media screen and (max-width: 768px) {
        padding: 12px 16px;
      }
      &-city {
        &-title {
          font-family: $uni;
          font-weight: $bold;
          font-size: 20px;
          line-height: 27px;
          color: $base;
          margin-bottom: 8px;
          opacity: 0.6;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 18.9px;
          }
        }
        &-value {
          display: block;
          font-family: $uni;
          font-weight: $bold;
          font-size: 24px;
          color: $base;
          line-height: 32.4px;
          @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 21.6px;
          }
        }
      }
      &-price {
        &-title {
          font-family: $uni;
          font-weight: $regular;
          font-size: 18px;
          line-height: 24.3px;
          color: $base;
          margin-bottom: 8px;
          @media screen and (max-width: 768px) {
            font-size: 12px;
            line-height: 16.2px;
          }
        }
        &-value {
          display: block;
          font-family: $uni;
          font-weight: $bold;
          font-size: 24px;
          line-height: 32.4px;
          color: $base;
          @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 21.6px;
          }
        }
      }
    }
  }
  .card-city-direction:hover {
    background-color: #F2F7FF;
    box-shadow: none;
  }

  .card-directions {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    box-shadow: none;
    max-width: 262px;
    .card-body {
      padding: 12px 16px;
      @media screen and (max-width: 768px) {
        padding: 12px 16px;
      }
      .card-title {
        font-family: $uni;
        font-weight: $regular;
        font-size: 18px;
        color: $base;
        text-align: center;
        margin-bottom: 12px;
        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 16.2px;
        }
      }
      .card-value {
        display: block;
        font-family: $uni;
        font-weight: $bold;
        font-size: 24px;
        color: $base;
        text-align: center;
        @media screen and (max-width: 768px) {
          font-size: 16px;
          line-height: 21.6px;
        }
        span {
          font-size: 18px;
          @media screen and (max-width: 768px) {
            font-size: 12px;
            line-height: 16.2px;
          }
        }
      }
    }
  }
}
</style>