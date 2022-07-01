<template>
<div class="avatar-section">
  <img v-bind:src="url" class="avatar" alt="аватар">
  <button v-on:click="getNewAvatar" type="button" >Открой</button>
  <input class="d-none" id="avatarUploader" @change="getNewAvatar" accept="image/*" type="file" >
</div>
</template>

<script>
export default {
  name: "ProfileAvatar",
  data(){
    return {
      url : '/img/profile/placeholder.png',
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
  .avatar {
    width: 340px;
    height: 340px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    box-shadow: $regular-shadow;
  }
}
</style>