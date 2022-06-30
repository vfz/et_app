<template>
  <div>
    <h2 class="title-section">
      Данные аккаунта
    </h2>
    <form>
      <div class="form-wrapper">
        <div class="row">
          <div class="row">
            <div class="col-3 col-lg-6 col-xl-3">
              <label for="email" class="form-label">Эл.почта</label>
              <input type="email" class="form-control" id="email" value="ErmoKris@yandex.ru" placeholder="ErmoKris@yandex.ru">
            </div>
            <div class="col-3 col-lg-6 col-xl-3">
              <label for="firstName1" class="form-label">Телефон</label>
              <input type="text" class="form-control" id="number" value="+7 (123)-456-78-90" placeholder="+7 (123)-456-78-90">
            </div>
            <div class="col-3 col-lg-6 col-xl-3">
              <label for="password" class="form-label">Пароль</label>
              <div class="password-block position-relative">
                <input :type="passwordFieldType" v-model="password" type="password" class="form-control" id="password">
                <button v-on:click="switchVisibility()" class="eye-button position-absolute top-50 end-0 translate-middle-y" type="button">
                  <EyeCloseIcon v-bind:class="{'d-none': isShow}"/>
                  <EyeOpenIcon v-bind:class="{'d-none' : isHide}"/>
                </button>
              </div>
            </div>
            <div class="col-3 col-lg-6 col-xl-3">
              <label for="passwordNew" class="form-label">Новый пароль</label>
              <input type="password" class="form-control" id="passwordNew" placeholder="Введите новый пароль">
            </div>
          </div>
          <div class="row gy-2">
            <div class="col-3 col-lg-6 col-xl-3">
              <label for="passwordNewRepeat" class="form-label">Подтверждение</label>
              <input type="password" class="form-control" id="passwordNewRepeat" placeholder="Повторите новый пароль">
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfileAutocomplete"
}
</script>

<style scoped>

</style>