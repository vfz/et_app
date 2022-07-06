<template>
  <div class="row file-uploader-section">
    <div class="col-12">
      <h2 class="title-section">
        Резюме
      </h2>
    </div>
    <div class="col-12">
      <div class="form-wrapper flex-column-reverse flex-lg-row d-flex align-items-center">
        <div class="buttons">
          <button class="btn btn-primary" v-on:click="getFile" type="button" >Загрузить файл</button>
          <input class="d-none" id="fileUploader" @change="getFile" accept=".pdf,.doc,.docx,.jpg,.png" type="file" >
        </div>
        <div class="text-form">
          Мы принимаем: PDF, DOC, DOCX, JPG и PNG файлы.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUploader",
  data(){
    return {
      url : '',
    }
  },
  methods: {
    getFile(event) {
      event.preventDefault()
      const input = document.getElementById('fileUploader');
      input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        const file = event.target.files[0]
        console.log(file);
        // this.url = возвращает ссылку на файл
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

.file-uploader-section {
  margin-top: 40px;
  .title-section {
    @include font($uni,$bold,24px,32.4px,$base);
    margin-bottom: 32px;
    @media screen and (max-width: 991px) {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 24.3px;
    }
  }
  .text-form {
    margin-left: 30px;
    @include font($uni,$light,18px,24.3px,$base);
    @media screen and (max-width: 991px) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 18.9px;
    }
  }
  .buttons {
    @media screen and (max-width: 991px) {
      width: 100%;
      display: block;
    }
    button {
      padding: 12px 49px;
      background-color: $blue-active;
      border: none;
      border-radius: 8px;
      outline: none;
      @include font($uni,$regular,18px,24.3px,$white);
      @media screen and (max-width: 991px) {
        font-size: 14px;
        line-height: 18.9px;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>