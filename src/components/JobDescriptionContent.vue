<template>
  <section class="job-description-content-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Открытые вакансии</a></li>
                <li class="breadcrumb-item active" aria-current="page">Менеджер</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="job-main-info text-center text-lg-start d-flex flex-column">
            <h2 class="job-title">
              {{title}}
            </h2>
            <div class="job-short">
        <span class="job-payment">
          зп от {{payment}}₽
        </span>
              <span class="job-city">{{city}},</span>
              <span class="job-place">{{place}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="description-list">
            <div class="description-item">
              <h3 class="title-description">
                Описание
              </h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
              <h4 class="title-list">
                Вам предстоит:
              </h4>
              <ul class="list-group">
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
              </ul>
            </div>
            <div class="description-item">
              <h3 class="title-description">
                Описание
              </h3>
              <div class="list-group-block">
                <h4 class="title-list">
                  Вам предстоит:
                </h4>
                <ul class="list-group">
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
              </div>
              <div class="list-group-block">
                <h4 class="title-list">
                  Вам предстоит:
                </h4>
                <ul class="list-group">
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li class="list-group-item">
                    — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                </ul>
              </div>
            </div>
            <div class="description-item">
              <h3 class="title-description">
                Описание
              </h3>
              <ul class="list-group">
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li class="list-group-item">
                  — Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-6">
          <form>
            <PersonalInfo class="personal-info"/>
            <FileUploader/>
            <MessageInfo title="Сопроводительное письмо" placeholder="Введите ваше сообщение . . ."/>
            <button class="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonalInfo from "@/components/PersonalInfo";
import MessageInfo from "@/components/MessageInfo";
import FileUploader from "@/components/FileUploader";
export default {
  name: "JobDescriptionContent",
  components: {FileUploader, MessageInfo, PersonalInfo},
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.job-description-content-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .breadcrumb {
    &-item {
      a {
        @include font($uni,$light,18px,24.3px,$secondary);
      }
    }
    .active {
      @include font($uni,$light,18px,24.3px,$base);
    }
  }
  .job-main-info {
    margin-bottom: 32px;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    .job-title {
      @include font($uni,$bold,24px,32.4px,$base);
      margin-bottom: 16px;
      @media screen and (max-width: 991px) {
        font-size: 18px;
      }
    }
    .job-short {
      @include font($uni,$regular,18px,24.3px,$secondary);
      @media screen and (max-width: 991px) {
        font-size: 14px;
        margin-bottom: 12px;
      }
      .job-payment {
        color: $blue-active;
        @media screen and (max-width: 991px) {
          display: block;
        }
      }
      .job-city {

      }
      .job-place {

      }
    }
  }
  .description-list {
    border-right: 1px solid #E1EEF6;
    padding-right: 40px;
    .description-item {
      margin-bottom: 32px;
      .title-description {
        @include font($uni,$bold,20px,27px,$blue-active);
        margin-bottom: 16px;
      }
      .description {
        @include font($uni,$light,18px,24.3px,$base);
      }
      .title-list {
        @include font($uni,$regular,18px,24.3px,$secondary);
        margin-bottom: 12px;
      }
      .list-group-block {
        margin-bottom: 16px;
      }
      .list-group {
        &-item {
          @include font($uni,$light,18px,24.3px,$base);
          border: none;
          padding-left: 0;
        }
      }
    }
  }
  .personal-info {
    margin-top: 0;
  }
  .btn {
    @include font($uni,$regular,24px,32.4px,$white);
    padding: 23px 83px;
    margin-top: 40px;
    border-radius: 16px;
    @media screen and (max-width: 768px) {
      width: 100%;
      font-size: 16px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>