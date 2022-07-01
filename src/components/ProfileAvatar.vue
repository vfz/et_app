<template>
<div class="avatar-section">
  <img v-bind:src="url" class="avatar" alt="аватар">
  <input @change="getNewAvatar" accept="image/*" type="file" >
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
      const file = event.target.files[0]
      this.url = URL.createObjectURL(file);
      return this.url
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.avatar-section {

}
</style>