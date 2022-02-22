<template>
    <section class="registration-hero">
    <div class="container-fluid">
        <div class="row">
            <div class="col d-flex flex-wrap align-items-center">
                <h2 class="title-section">Оплачивайте билеты за евробаллы</h2>
                <p class="desc-section mb-4 mb-md-0">Регистрируйся на нашем сайте и получай евробаллы за каждую поездку</p>
            </div>
            <div class="col d-flex align-items-center">
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
  background: url("/img/hero/bg-reg.png") no-repeat center center;
  background-size: cover;
  margin-top: 90px;
  padding-top: 72px;
  padding-bottom: 72px;
  .desc-section {
    font-family: $uni;
    font-weight: $regular;
    font-size: 18px;
    color: $white;
    margin-bottom: 0;
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
    @media screen and (max-width: 440px) {
      padding: 23px 32px;
    }
  }
  &-button:hover {
    background-color: $blue-color;
    color: $white;
  }
}
</style>