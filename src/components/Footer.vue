<template>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-xl-4">
                    <div class="logo-footer d-flex flex-wrap w-100">
                        <a href="#" class="logo-link d-block">
                            <img class="logo" alt="logo-footer" src="img/header/logo.png">
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
                                    <a class="nav-link" href="#">Написать вам</a>
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
                                <img class="d-block" src="img/footer/next-step.svg" alt="next-step">
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
                                <img alt="vk" src="img/footer/vk.svg">
                            </a>
                        </li>
                        <li class="socials-item">
                            <a href="#" class="socials-item-link">
                                <img alt="instagram" src="img/footer/instagram.svg">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.footer {
  background-color: #06309B;
  padding-top: 60px;
  padding-bottom: 30px;
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
    //   &-link {
    //     img {

    //     }
    //   }
    }
    &-item:last-child {
      margin-right: 0;
    }
  }
}
</style>