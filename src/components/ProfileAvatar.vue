<template>
<div class="avatar-section">
  <div class="username">
    <h4 class="text-center">
      Ермолаева Кристина
    </h4>
  </div>
  <div>
    <img v-bind:src="url" class="avatar" alt="аватар">
  </div>
  <div class="buttons w-100 d-flex justify-content-center">
    <button v-on:click="getNewAvatar" type="button" >Изменить</button>
    <input class="d-none" id="avatarUploader" @change="getNewAvatar" accept="image/*" type="file" >
  </div>
</div>
</template>

<script>
export default {
  name: "ProfileAvatar",
  data(){
    return {
      url : '/img/profile/placeholder.svg',
    }
  },
  methods: {
    getNewAvatar(event) {
      event.preventDefault()
      const input = document.getElementById('avatarUploader');
      input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        const file = event.target.files[0]
        this.url = URL.createObjectURL(file);
        return this.url
      };
      input.click();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.avatar-section {
  .username {
    margin-bottom: 24px;
    h4 {
      @include font($uni,$bold,24px,32.4px,$secondary);
    }
  }
  div {
    .avatar {
      width: 340px;
      height: 340px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      box-shadow: $regular-shadow;
      @media screen and (max-width: 991px) {
        width: 102px;
        height: 102px;
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        width: 100%;
        height: auto;
      }
      @media (min-width: 1200px) and (max-width: 1399px) {
        width: 220px;
        height: 220px;
      }
    }
  }
  .buttons {
    margin-top: 24px;
    button {
      background: none;
      border: none;
      outline: none;
      @include font($uni,$light,18px,24.3px,$blue-link);
    }
  }
}
</style>