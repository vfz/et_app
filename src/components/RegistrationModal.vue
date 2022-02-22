<template>
    <!--registration modal-->
<div class="modal fade" id="enterRegistration" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header d-flex flex-wrap">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 class="modal-title text-center" id="registrationLabel">Регистрация</h5>
                <p class="desc-modal">На указанную эл. почту, Вам будет отправлено письмо, для подтверждения регистрации.</p>
                <form>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Эл. почта</label>
                        <div class="position-relative">
                            <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Введите email">
                            <div class="mail-icon"></div>
                        </div>
                    </div>
                    <div>
                        <label for="exampleFormControlInput2" class="form-label">Пароль</label>
                        <div class="position-relative">
                            <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="Введите email">
                            <div class="password-icon"></div>
                        </div>
                    </div>
                    <div>
                        <label for="exampleFormControlInput2" class="form-label">Подтверждение</label>
                        <div class="position-relative">
                            <input type="password" class="form-control" id="exampleFormControlInput5" placeholder="Повторите ваш пароль">
                            <div class="password-icon"></div>
                        </div>
                    </div>
                    <div class="d-grid mt-4">
                        <button type="submit" class="btn d-block">Зарегистрироваться</button>
                    </div>
                </form>
                <div class="d-flex justify-content-center">
                    <a href="#" class="forgot-password">Забыли пароль?</a>
                </div>
                <div class="text-center modal-bottom">
                    <span class="registration-text">Вы уже зарегистрированы?</span>
                    <a href="#" class="registration" data-bs-toggle="modal" data-bs-target="#enterLogin">Войти</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'RegistrationModal'
}
</script>