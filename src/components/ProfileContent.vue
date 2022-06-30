<template>
  <div>
    <SectionTitle title="Личный кабинет" description="Добро пожаловать в личный кабинет. Здесь, вы можете редактировать информацию о себе и пассажирах, на которых Вы оформляли билет, а также изменить свой пароль."/>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
export default {
  name: "ProfileContent",
  components: {SectionTitle}
}
</script>

<style lang="scss" scoped>
.description-section {

}
</style>