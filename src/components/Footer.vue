<template>
    <footer class="footer">
        <div v-if="!isMobile()" class="footer-desktop container-fluid">
            <div class="row">
                <div class="col-12 col-xl-4">
                    <div class="logo-footer d-flex flex-wrap w-100">
                        <a href="#" class="logo-link d-block">
                            <img class="logo" alt="logo-footer" src="/img/header/logo.png">
                        </a>
                        <span class="call-free d-block w-100">
                            Звонок по России бесплатный
                        </span>
                        <a class="call-free-number" href="tel:88007002099">
                            8 (800) 700 - 20 - 99
                        </a>
                    </div>
                </div>
                <div class="col-12 mt-4 mt-xl-0 col-xl">
                    <div class="row">
                        <div class="col-12 mt-4 mt-md-0 col-md" >
                            <h4 class="title-list-footer">Информация</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">О нас</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Вакансии</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Аренда автобусов</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 mt-4 mt-md-0 col-md">
                            <h4 class="title-list-footer">Поддержка</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#WriteUsModal">Написать вам</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Возврат билета</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Бюро находок</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Вопросы и ответы</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 mt-4 mt-md-0 col-md">
                            <h4 class="title-list-footer">Остальное</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Агентам</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Договор оферты</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Политика конфиденциальности</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-xl-3 mt-4 mt-md-0">
                    <h3 class="title-col-footer">
                        Есть вопросы?
                        <br>
                        Мы вам перезвоним
                    </h3>
                    <div class="callback-form d-flex">
                        <div class="form-floating">
                            <input type="text" class="form-control shadow-none" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Введите ваше имя</label>
                        </div>
                        <div class="callback-form-next-step">
                            <a href="#" class="next-step-link text-center">
                                <img class="d-block" src="/img/footer/next-step.svg" alt="next-step">
                                <span class="next-desc d-block">Далее</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span class="credits">
                        © 2020, ИП Яцунов С.П. Все права защищены.
                    </span>
                </div>
                <div class="col d-flex justify-content-end">
                    <ul class="socials d-flex flex-row">
                        <li class="socials-item">
                            <a href="#" class="socials-item-link">
                                <img alt="vk" src="/img/footer/vk.svg">
                            </a>
                        </li>
                        <li class="socials-item">
                            <a href="#" class="socials-item-link">
                                <img alt="instagram" src="/img/footer/instagram.svg">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      <div v-else class="footer-mobile container-fluid">
        <div class="row">
          <div class="col-12">
            <ul class="socials justify-content-center d-flex flex-row">
              <li class="socials-item">
                <a href="#" class="socials-item-link">
                  <img alt="vk" src="/img/footer/vk.svg">
                </a>
              </li>
              <li class="socials-item">
                <a href="#" class="socials-item-link">
                  <img alt="instagram" src="/img/footer/instagram.svg">
                </a>
              </li>
            </ul>
            <div class="logo-footer d-flex flex-column">
              <span class="call-free d-block w-100 text-center">
                            Звонок по России бесплатный
                        </span>
              <a class="call-free-number d-block w-100 text-center" href="tel:88007002099">
                8 (800) 700 - 20 - 99
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <nav>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <button v-on:click="rotateArrow" class="d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfo" aria-expanded="false" aria-controls="collapseInfo">
                    Информация
                    <ArrowDownIcon v-on:click="rotateArrow" class="arrow-down-collapse" color="#fff"/>
                  </button>
                  <div class="collapse" id="collapseInfo">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          О нас
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Вакансии
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Аренда автобусов
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Контакты
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <button v-on:click="rotateArrow" class="d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePartners" aria-expanded="false" aria-controls="collapsePartners">
                    Партнерам
                    <ArrowDownIcon v-on:click="rotateArrow" class="arrow-down-collapse" color="#fff"/>
                  </button>
<!--                  TODO заполнить правильными страницами-->
                  <div class="collapse" id="collapsePartners">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          О нас
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Вакансии
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Аренда автобусов
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Контакты
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <button v-on:click="rotateArrow" class="d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSupport" aria-expanded="false" aria-controls="collapseSupport">
                    Поддержка
                    <ArrowDownIcon v-on:click="rotateArrow" class="arrow-down-collapse" color="#fff"/>
                  </button>
                  <!--                  TODO заполнить ссылками страницами-->
                  <div class="collapse" id="collapseSupport">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#" data-bs-toggle="modal" data-bs-target="#WriteUsModal">
                          Написать нам
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Возврат билета
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Бюро находок
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Вопросы и ответы
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <button v-on:click="rotateArrow" class="d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAnother" aria-expanded="false" aria-controls="collapseAnother">
                    Остальное
                    <ArrowDownIcon v-on:click="rotateArrow" class="arrow-down-collapse" color="#fff"/>
                  </button>
                  <!--                  TODO заполнить ссылками страницами-->
                  <div class="collapse" id="collapseAnother">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Агентам
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Договор оферты
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Бюро находок
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Вопросы и ответы
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <h3 class="title-col-footer">
                    Есть вопросы?
                    <br>
                    Мы вам перезвоним
                  </h3>
                  <div class="callback-form d-flex align-items-end">
                    <div class="form-floating">
                      <input type="text" class="form-control shadow-none" id="floatingInput" placeholder="name@example.com">
                      <label for="floatingInput">Введите ваше имя</label>
                      <div class="callback-form-step d-flex justify-content-between">
                        <span>Введите ваше имя</span>
                        <span>Шаг 1</span>
                      </div>
                    </div>
                    <div class="callback-form-next-step">
                      <a href="#" class="next-step-link text-center">
                        <img class="d-block" src="/img/footer/next-step.svg" alt="next-step">
                        <span class="next-desc d-block">Далее</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <span class="credits">
                        © 2022, ИП Яцунов С.П. Все права защищены.
                    </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <WriteUsModal/>
    </footer>
</template>
<script>
import WriteUsModal from "@/components/WriteUsModal";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
export default {
  components: {ArrowDownIcon, WriteUsModal},
  data: () => {
    return {
      isShow: false,
    }
  },
  methods: {
    isMobile() {
      return screen.width <= 991;
    },
    rotateArrow(event) {
      const parent = event.target;
      const arrow = parent.querySelector('.arrow-down-collapse');
      this.isShow = !this.isShow;
      if (this.isShow === true) {
        arrow.style.transform = 'rotate(180deg)';
        arrow.style.transition = '0.2s ease-in'
      }
      else {
        arrow.style.transform = 'rotate(0deg)';
        arrow.style.transition = '0.2s ease-in'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.footer {
  background-color: #06309B;
  padding-top: 60px;
  padding-bottom: 30px;
  @media screen and (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 16px;
  }
  .footer-mobile {
    .logo-footer {
      margin-top: 24px;
      margin-bottom: 24px;
      .call-free-number {
       @include font($uni,$bold,16px,21.6px,$white);
      }
    }
    .nav {
      &-item {
        padding-top: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid #4C98D1;
        button {
          width: 100%;
          border: none;
          background: none;
          padding: 0;
          outline: none;
          @include font($uni,$bold,14px,18.9px,$white);
          text-transform: uppercase;
          svg {
            pointer-events: none;
          }
        }
        .collapse {
          .list-group {
            &-item {
              padding-top: 0;
              padding-left: 0;
              padding-bottom: 0;
              border: none;
              background: none;
              border-radius: 0;
              margin-bottom: 12px;
              &-link {
                @include font($uni,$light,12px,16.2px,$white);
              }
            }
            &-item:first-child {
              padding-top: 16px;
            }
            &-item:last-child {
              margin-bottom: 0;
            }
          }
        }
        .collapsing {
          .list-group {
            &-item {
              padding-top: 0;
              padding-left: 0;
              padding-bottom: 0;
              border: none;
              background: none;
              border-radius: 0;
              margin-bottom: 12px;
              &-link {
                @include font($uni,$light,12px,16.2px,$white);
              }
            }
            &-item:first-child {
              padding-top: 16px;
            }
            &-item:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
      &-item:first-child {
        border-top: 1px solid #4C98D1;
        padding-top: 16px;
      }
      &-item:last-child {
        padding-bottom: 16px;
        border-bottom: none;
      }
    }
    .title-col-footer {
      margin-top: 16px;
      font-size: 14px;
      line-height: 18.9px;
    }
    .callback-form {
      .form-floating {
        .form-control {
          font-size: 12px;
          line-height: 16.2px;
          color: $deactivate;
        }
        label {
          padding-left: 0;
          font-size: 12px;
          line-height: 16.2px;
        }
        .callback-form-step {
          margin-top: 6px;
          span {
            @include font($uni,$light,10px,13.5px,$deactivate);
          }
        }
      }
      &-next-step {
        margin-left: 73px;
        img {
          width: 38px;
        }
        .next-desc {
          @include font($uni,$light,12px,16.2px,$white);
        }
      }
    }
  }
  .logo-footer {
    .logo-link {
      margin-bottom: 30px;
      .logo {
        width: 324px;
        @media screen and (max-width: 767px) {
          width: 160px;
        }
      }
    }
    .call-free {
      font-family: $uniBook;
      font-size: 12px;
      color: $white;
      margin-bottom: 8px;
    }

    .call-free-number {
      font-family: $uni;
      font-weight: $bold;
      font-size: 24px;
      color: $white;
      text-decoration: none;
    }
  }
  .nav {
    &-item {
      .nav-link {
        padding-left: 0;
        padding-right: 0;
        font-family: $uniBook;
        font-size: 18px;
        color: $white;
      }
    }
  }
  .callback-form {
    .form-floating {
      .form-control {
        background: none;
        border: none;
        border-bottom: 1px solid #4C98D1;
        border-radius: 0;
        color: #B5BDDB;
        font-family: $uniBook;
        font-size: 18px;
      }
      label {
        font-family: $uniBook;
        font-size: 18px;
        color: #B5BDDB;
      }
    }
    &-next-step {
      .next-step-link {
        text-decoration: none;
        .next-desc {
          margin-top: 8px;
          font-family: $uniBook;
          font-size: 14px;
          color: $white;
        }
      }
    }
  }
  hr {
    background-color: #4C98D1;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .credits {
    font-family: $uniBook;
    color: #AFB7CD;
    font-size: 11px;
  }
  .socials {
    list-style-type: none;
    padding: 0;
    margin: 0;
    &-item {
      margin-right: 32px;
    }
    &-item:last-child {
      margin-right: 0;
    }
  }
}
</style>