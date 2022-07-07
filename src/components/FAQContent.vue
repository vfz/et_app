<template>
<div class="faq-content-section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xl-9 col-xxl-8">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="europoints-tab" data-bs-toggle="tab" data-bs-target="#europoints" type="button" role="tab" aria-controls="europoints" aria-selected="true">Евробаллы</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="ticket-refund-tab" data-bs-toggle="tab" data-bs-target="#ticket-refund" type="button" role="tab" aria-controls="ticket-refund" aria-selected="false">Возврат билета</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="path-schedule-tab" data-bs-toggle="tab" data-bs-target="#path-schedule" type="button" role="tab" aria-controls="path-schedule" aria-selected="false">Маршруты и расписание</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="bagage-tab" data-bs-toggle="tab" data-bs-target="#bagage" type="button" role="tab" aria-controls="bagage" aria-selected="false">Багаж</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="europoints" role="tabpanel" aria-labelledby="europoints-tab">
            <ul class="list-group">
              <li v-for="question in questions" :key="question.id" :class="{'is-show': question.isShow, 'is-hide' : question.isHide}" class="list-group-item">
                <button :id="question.id" v-bind:class="{'d-none': question.isShow}" v-on:click="showQuestion(question, $event)" type="button">
                  {{question.title}}
                </button>
                <div v-bind:class="{'d-none': question.isHide}" class="faq-details-item">
                  <div class="faq-details-item-header d-flex justify-content-between">
                    <h3 class="faq-title">{{question.title}}</h3>
                    <button :id="question.id" v-on:click="showQuestion(question, $event)" class="faq-back">Вернуться</button>
                  </div>
                  <div class="faq-details-item-body">
                    <p class="faq-description">
                      {{question.description}}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="pagination">
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item active" aria-current="page">
                    <span class="page-link">1</span>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 col-xl-3 col-xxl-4 d-none d-lg-flex justify-content-center">
        <img class="img-section" src="/img/faq/faq.svg" alt="faq">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FAQContent",
  data() {
    return {
      questions: [
        {id: 1, title: 'Вопрос1', description: 'lorem lorem lorem', isShow: false, isHide: true},
        {id: 2, title: 'Вопрос2', description: 'lorem lorem lorem', isShow: false, isHide: true},
        {id: 3, title: 'Вопрос3', description: 'lorem lorem lorem', isShow: false, isHide: true},
      ]
    }
  },
  computed: {
    hideQuestions: function (){
    }
  },
  methods: {
    showQuestion: function (question,event) {
      question.isHide = !question.isHide;
      question.isShow = !question.isShow;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.faq-content-section {
  margin-left: 88px;
  margin-right: 88px;
  @media screen and (max-width: 991px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  .nav {
    @media screen and (max-width: 991px) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
    &-item {
      .nav-link {
        @include font($uni,$bold,24px,32.4px,$deactivate);
        padding-left: 10px;
        padding-right: 10px;
        text-transform: unset;
      }
      .active {
        color: $blue-active;
        border-bottom: 1px solid $blue-active;
      }
    }
  }
  .tab-content {
    margin-top: 38px;
    .tab-pane {
      .list-group {
        &-item {
          @include font($uni,$bold,20px,27px,$base);
          background: none;
          border: none;
          padding-left: 0;
          padding-top: 16px;
          padding-bottom: 16px;
          border-radius: 0;
          border-bottom: 1px solid #E1EEF6;
          button {
            @include font($uni,$bold,20px,27px,$base);
            border: none;
            background: none;
            padding: 0;
          }
          button:hover {
            @include animation;
            color: $blue-active;
          }
        }
        .faq-details-item {
          &-header {
            margin-bottom: 32px;
            .faq-title {
              @include font($uni,$bold,20px,27px,$base);
            }
            .faq-back {
              @include font($uni,$light,18px,24.3px,$blue-link);
            }
          }
          &-body {
            .faq-description {
              @include font($uni,$light,18px,24.3px,$base);
            }
          }
        }
      }
      .pagination {
        margin-top: 31px;
        .page-item {
          @include font($uni,$light,18px,24.3px,$deactivate);
          .page-link:focus {
            color: $secondary;
          }
        }
        .active {
          .page-link {
            background: none;
            box-shadow: none;
            @include font($uni,$regular,18px,24.3px,$secondary);
          }
        }
      }
    }
  }
  .img-section {
    max-width: 390px;
    @media (min-width: 1200px) and (max-width: 1400px) {
      width: 100%;
    }
  }
}

</style>