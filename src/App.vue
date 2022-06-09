<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "src/assets/variables.scss";
@import "src/assets/font.scss";


.hero {
  .title-page {
    margin-bottom: 56px;
  }
}
.title-page {
  font-family: $uni;
  font-weight: $bold;
  font-size: 48px;
  color: $white;
}

.title-section {
  font-family: $uni;
  font-weight: $bold;
  font-size: 36px;
  color: $white;
  margin-bottom: 24px;
}

.dark-title {
  color: $black;
}

.title-list-footer {
  font-family: $uni;
  font-weight: $bold;
  font-size: 20px;
  color: $white;
  margin-bottom: 16px;
}

.title-col-footer {
  font-family: $uni;
  font-weight: $bold;
  font-size: 20px;
  color: $white;
  line-height: 150%;
}

#enterLogin , #enterRegistration, #enterPassword {
  .modal-content {
    .button-back {
      background: url("/public/img/modal/back.svg") no-repeat;
      width: 33px;
      height: 12px;
      cursor: pointer;
    }
    .modal-header {
      border-bottom: none;
      .login-img {
        width: 100%;
        height: auto;
      }
    }
    .modal-body {
      font-family: $uni;
      font-weight: $bold;
      font-size: 36px;
      color: $black;
      .desc-modal {
        margin-top: 40px;
        font-family: $uni;
        font-weight: $regular;
        font-size: 18px;
        text-align: center;
        color: #B5BDDB;
      }
      .modal-title {
        font-family: $uni;
        font-weight: $bold;
        font-size: 36px;
        color: #283256;
      }
      .form-label {
        font-family: $uni;
        font-weight: $regular;
        font-size: 18px;
        color: #676767;
      }
      .form-control {
        font-family: $uniBook;
        font-size: 18px;
        color: #B5BDDB;
      }
      .mail-icon {
        background: url("/public/img/modal/mail.svg") no-repeat;
        width: 24px;
        height: 18px;
        position: absolute;
        top: 30%;
        right: 15px;
      }
      .password-icon {
        background: url("/public/img/modal/password.svg") no-repeat;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 20%;
        right: 15px;
      }
      .btn {
        font-family: $uni;
        font-size: 18px;
        color: $white;
        background-color: #A3D7FF;
      }
      .forgot-password {
        margin-top: 24px;
        font-family: $uni;
        font-weight: $regular;
        font-size: 18px;
        color: #77BCFC;
        text-decoration: none;
      }
      .modal-bottom {
        .registration-text {
          font-family: $uni;
          font-weight: $regular;
          font-size: 18px;
          color: #B5BDDB;
        }
        .registration {
          margin-top: 24px;
          font-family: $uni;
          font-weight: $regular;
          font-size: 18px;
          color: #77BCFC;
          text-decoration: none;
        }
      }
    }
  }
}
.dropdown-menu {
  .dropdown-item {
    font-family: $uniBook;
    font-size: 18px;
  }
}
</style>

