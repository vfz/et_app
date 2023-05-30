<template>
    <section class="flights-not-found">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h3 class="title-section text-center">
                        Упс...
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="description-section text-center">
                        Простите, но билеты по этому запросу не найдены
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FlightsNotFound'
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
@import "src/assets/font.scss";

.flights-not-found {
    margin-top: 41px;
    margin-bottom: 41px;
    .title-section {
        @include font($uni, $bold, 20px, 27px, $base);
        margin-bottom: 16px;

        @media (min-width: 992px) {
            font-size: 36px;
        }
    }

    .description-section {
        @include font($uni, $light, 14px, 18.9px, $base);

        @media (min-width: 992px) {
            font-size: 18px;
        }
    }

    .image-section {
        @media (min-width: 992px) {
            width: 285px;
        }
    }
}</style>