<template>
    <section class="registration-hero">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-6 d-flex flex-wrap align-items-center">
                <h2 class="title-section">Оплачивайте билеты за евробаллы</h2>
                <p class="desc-section">Регистрируйся на нашем сайте и получай евробаллы за каждую поездку</p>
            </div>
            <div class="col-12 col-sm-6 d-flex align-items-center">
                <a href="#" class="registration-hero-button d-inline-block">
                    Зарегистрироваться
                </a>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.registration-hero {
  background-image: url("/img/hero/bg-reg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: 90px;
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: 88px;
  padding-right: 88px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    padding-top: 48px;
    padding-bottom: 29px;
    background-position: 67%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .title-section {
    @media screen and (max-width: 768px) {
      margin-bottom: 8px;
      line-height: 28px;
    }
  }
  .desc-section {
    font-family: $uni;
    font-weight: $regular;
    font-size: 18px;
    color: $white;
    margin-bottom: 0;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 19.6px;
      margin-bottom: 24px;
    }
  }
  &-button {
    font-family: $uni;
    font-weight: $regular;
    font-size: 24px;
    padding: 23px 65px;
    border-radius: 15px;
    border: none;
    background-color: $blue-active;
    color: $white;
    text-decoration: none;
    @media screen and (max-width: 768px) {
      padding: 10px 0px;
      width: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 21.6px;
      border-radius: 8px;
    }
  }
  &-button:hover {
    background-color: $blue-color;
    color: $white;
  }
}
</style>