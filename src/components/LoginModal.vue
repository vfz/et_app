<template>
    <!--login modal-->
<div class="modal fade" id="enterLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header d-flex flex-wrap">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <img class="login-img" alt="login-img" src="img/modal/login-img.png">
            </div>
            <div class="modal-body">
                <h5 class="modal-title text-center" id="exampleModalLabel">Вход</h5>
                <form>
                    <div>
                        <label for="exampleFormControlInput1" class="form-label">Эл. почта</label>
                        <div class="position-relative">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Введите email">
                            <div class="mail-icon"></div>
                        </div>
                    </div>
                    <div>
                        <label for="exampleFormControlInput2" class="form-label">Пароль</label>
                        <div class="position-relative">
                            <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="Введите email">
                            <div class="password-icon"></div>
                        </div>
                    </div>
                    <div class="d-grid mt-4">
                        <button type="submit" class="btn d-block">Войти</button>
                    </div>
                </form>
                <div class="d-flex justify-content-center">
                    <a href="#" class="forgot-password" data-bs-toggle="modal" data-bs-target="#enterPassword">Забыли пароль?</a>
                </div>
                <div class="text-center modal-bottom">
                    <span class="registration-text">Вы ещё не зарегистрированы?</span>
                    <a href="#" class="registration" data-bs-toggle="modal" data-bs-target="#enterRegistration">Регистрация</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{ 
    name: 'LoginModal'
}
</script>

