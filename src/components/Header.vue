<template>
    <header class="header">
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
          <router-link to="/" class="logo-link">
            <img alt="logo" src="img/header/logo.png" class="logo">
          </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
                <nav class="nav-header log-out">
                    <ul class="nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Служба поддержки</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Позвоните мне</a></li>
                                <li><a class="dropdown-item" href="#">Вопросы и ответы</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">О нас</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#enterLogin">Войти</a>
                        </li>
                    </ul>
                </nav>
                <!--                log in user-->
                <nav class="nav-header log-in d-none">
                    <ul class="nav justify-content-end align-items-center">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownLogIn" role="button" data-bs-toggle="dropdown" aria-expanded="false">Служба поддержки</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownLogIn">
                                <li><a class="dropdown-item" href="#">Позвоните мне</a></li>
                                <li><a class="dropdown-item" href="#">Вопросы и ответы</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">О нас</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Евробаллы</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Билеты</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Мои поездки</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="navbarDropdownLogInAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img alt="avatar" class="avatar-user" src="img/header/avatar.png">
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownLogInAvatar">
                                <li><a class="dropdown-item" href="#">Настройки</a></li>
                                <li><a class="dropdown-item" href="#">Выйти</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </nav>
</header>
</template>
<style lang="scss" scoped>

@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.body-app-white {
  .nav-header {
    .nav {
      &-item {
        .nav-link {
          color: $black !important;
        }
      }
    }
  }
}

.header {
  padding-top: 60px;
  margin-bottom: 64px;
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 767px) {
        margin-left: 20px;
        margin-right: 20px;
      }
  .logo-link {
    .logo {
      width: 324px;
      @media screen and (max-width: 767px) {
        width: 160px;
      }
    } 
  }
  .nav-header {
    .nav {
      &-item {
        font-family: $uni;
        font-weight: $regular;
        font-size: 16px;
        .nav-link {
          display: inline-block;
          position: relative;
          color: $white;
        }
      }
    }
  }
}

// .header-user {

// }
</style>