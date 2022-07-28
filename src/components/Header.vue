<template>
    <header class="header">
      <nav v-if="!isMobile()" class="header-desktop navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <router-link to="/" class="logo-link">
              <img alt="logo" src="/img/header/logo.png" class="logo">
            </router-link>
            <button @click="toggleElement" ref="button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span class="navbar-toggler-icon">
                    <fa class="toggler-icon-open" v-if="isVisibleElement" icon="bars" />
                    <fa class="toggler-icon-close" v-else icon="xmark"/>
                  </span>
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
                      <img alt="avatar" class="avatar-user" src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80">
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
      <nav v-if="isMobile()" class="header-mobile navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <router-link to="/" class="logo-link">
            <img alt="logo" src="/img/header/logo.png" class="logo">
          </router-link>
          <button @click="toggleElement" ref="button" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                  <span class="navbar-toggler-icon">
                    <fa class="toggler-icon-open" v-if="isVisibleElement" icon="bars" />
                    <fa class="toggler-icon-close" v-else icon="xmark"/>
                  </span>
          </button>
          <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
            <nav v-if="isLogin === false" class="nav-header log-out">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <button v-on:click="rotateArrow" class="d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHelp" aria-expanded="false" aria-controls="collapseHelp">
                    <a class="nav-link" href="#collapseHelp" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseHelp">Служба поддержки</a>
                    <ArrowDownIcon id="arrow-down-collapse" color="#fff"/>
                  </button>
                  <div class="collapse" id="collapseHelp">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Позвоните мне
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
                  <a class="nav-link" href="#">О нас</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#enterLogin">Войти</a>
                </li>
              </ul>
            </nav>
            <!--                log in user-->
            <nav v-else class="nav-header log-in">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <p class="nav-item-description">
                    Звонок по России бесплатный
                  </p>
                  <a class="nav-item-number" href="tel:88007002099">
                    8 (800) 700 – 20 – 99
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" id="navbarDropdownLogInAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img alt="avatar" class="avatar-user" src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80">
                  </a>
                </li>
                <li class="nav-item">
                  <button v-on:click="rotateArrow" class="d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProfile" aria-expanded="false" aria-controls="collapseHelp">
                    <a class="nav-link" href="#collapseProfile" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseProfile">Личный Кабинет</a>
                    <ArrowDownIcon id="arrow-down-collapse" color="#fff"/>
                  </button>
                  <div class="collapse" id="collapseProfile">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Настройки
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a class="list-group-item-link" href="#">
                          Выйти
                        </a>
                      </li>
                    </ul>
                  </div>
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
                  <a class="nav-link-rent" href="#">Заказ и аренда автобусов</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>
</template>
<script>
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
export default {
  components: {ArrowDownIcon},
  data: () => {
    return {
      isVisibleElement: true,
      isShow: false,
      isLogin: false,
    }
  },
  methods: {
    toggleElement(){
      this.isVisibleElement = !this.isVisibleElement;
    },
    isMobile() {
      return screen.width <= 991;
    },
    rotateArrow() {
      const arrow = document.getElementById('arrow-down-collapse');
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
  },
  mounted(){
  }
}
</script>
<style>
/*if bg white then added fill black*/
.body-app-white #arrow-down-collapse path {
  fill: #283256;
}
</style>
<style lang="scss" scoped>

@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.body-app-white {
  .header {
    padding-top: 48px;
    margin-bottom: 24px;
    .navbar {
      padding: 0;
    }
  }
  .toggler-icon-close {
    color: $base !important;
  }
  .toggler-icon-open {
    color: $base !important;
  }
  .nav-header {
    .nav {
      &-item {
        .nav-link {
          color: $black !important;
        }
        .collapse {
          .list-group {
            &-item {
              &-link {
                color: $base !important;
              }
            }
          }
        }
        .collapsing {
          .list-group {
            &-item {
              &-link {
                color: $base !important;
              }
            }
          }
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
    padding-top: 48px;
    margin-left: 20px;
    margin-right: 20px;
    //margin-bottom: 50px;
    margin-bottom: 35px;
  }
  .navbar {
    box-shadow: none;
    @media screen and (max-width: 767px) {
      padding-top: 0;
      padding-bottom: 0;
    }
    .navbar-toggler {
      padding-bottom: 0;
      padding-right: 0;
      &-icon {
        width: auto;
        height: auto;
      }
    }
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
          .avatar-user {
            border-radius: 50%;
            width: 64px;
            height: 64px;
            overflow: hidden;
            object-fit: cover;
            position: relative;
          }
        }
        .dropdown-toggle:after {
          border-top: 0 ;
        }
        .nav-link:after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $blue-color;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link:hover {
          @include animation;
          color: $blue-color;
        }
        .nav-link:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .dropdown-menu[aria-labelledby="navbarDropdownLogInAvatar"] {
          left: unset;
        }
        #navbarDropdownLogInAvatar:after {
          position: unset;
          width: unset;
          transform: unset;
        }
      }
    }
  }
  //style for header mobile
  .header-mobile {
    .nav-item {
      //border-bottom: 1px solid #E6EAEF;
      button {
        background: none;
        border: none;
        width: 100%;
        padding: 0;
      }
      .nav-link {
        padding-left: 0;
        padding-right: 0;
        font-size: 14px;
        line-height: 18.9px;
        .avatar-user {
          width: 48px;
          height: 48px;
        }
      }
      .nav-link-rent {
        display: block;
        margin-top: 42px;
        @include font($uni,$regular,12px,16.2px,$blue-active);
      }
    }
    .collapse {
      .nav {
        &-item {
          &-description {
            @include font($uni,$regular,10px,13.5px,$white);
            margin-top: 26px;
            margin-bottom: 8px;
          }
          &-number {
            @include font($uni,$bold,16px,21.6px,$blue-active);
            margin-bottom: 34px;
          }
        }
      }
      .list-group {
        &-item {
          padding-top: 16px;
          padding-bottom: 12px;
          padding-left: 0;
          border: none;
          background: none;
          border-radius: 0;
          .list-group-item-link {
            @include font($uni,$light,12px,16.2px,$white);
          }
          .list-group-item-link:hover {
            @include animation;
            color: $blue-color;
          }
          .list-group-item-link:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $blue-color;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          .list-group-item-link:hover {
            @include animation;
            color: $blue-color;
          }
          .list-group-item-link:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
        &-item:first-child {
          padding-top: 0;
        }
        &-item:last-child {
          padding-top: 0;
          padding-bottom: 16px;
        }
      }
    }
    .collapsing {
      .nav {
        &-item {
          &-description {
            @include font($uni,$regular,10px,13.5px,$white);
            margin-top: 26px;
            margin-bottom: 8px;
          }
          &-number {
            @include font($uni,$bold,16px,21.6px,$blue-active);
            margin-bottom: 34px;
          }
        }
      }
      .list-group {
        &-item {
          padding-top: 16px;
          padding-bottom: 12px;
          padding-left: 0;
          border: none;
          background: none;
          border-radius: 0;
          .list-group-item-link {
            @include font($uni,$light,12px,16.2px,$white);
          }
          .list-group-item-link:hover {
            @include animation;
            color: $blue-color;
          }
          .list-group-item-link:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: $blue-color;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }
          .list-group-item-link:hover {
            @include animation;
            color: $blue-color;
          }
          .list-group-item-link:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
        &-item:first-child {
          padding-top: 0;
        }
        &-item:last-child {
          padding-top: 0;
          padding-bottom: 16px;
        }
      }
    }
  }
}

// .header-user {

// }
</style>