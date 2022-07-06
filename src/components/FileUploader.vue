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
      <div v-if="url !== null" class="uploaded-files">
        <div class="file d-flex flex-column justify-content-center">
          <div class="w-100 d-flex justify-content-end">
            <button v-on:click="deleteFile" class="btn-close" aria-label="close"></button>
          </div>
          <div class="w-100 d-flex justify-content-center">
            <img src="/img/job/file.svg" alt="файл">
          </div>
          <a v-bind:href="url">{{name}}</a>
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
      url : null,
      name : null,
    }
  },
  methods: {
    getFile(event) {
      event.preventDefault()
      const input = document.getElementById('fileUploader');
      input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        const file = event.target.files[0]
        this.name = file.name;
        // this.url = возвращает ссылку на файл
        this.url = URL.createObjectURL(file);
        return this.url
      };
      input.click();
    },
    deleteFile(event) {
      this.url = null
      this.name = null
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
  .uploaded-files {
    margin-top: 16px;
    .file {
      max-width: 120px;
      .btn-close {
        margin-bottom: 16px;
      }
      img {
        width: 31px;
        text-align: center;
      }
      a {
        text-align: center;
        margin-top: 8px;
        @include font($uni,$light,18px,24.3px,$blue-link);
        display: inline-block;
      }
    }
  }
}
</style>