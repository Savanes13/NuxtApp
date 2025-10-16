<script lang="ts" setup>
import DefaultButton from '../ui/button/DefaultButton.vue';

interface ISliderItemProps {
  image: string;
  title: string;
  text: string;
  btnText: string
  catalog: string
};

const {
  image,
  title,
  text,
  btnText,
  catalog
} = defineProps<ISliderItemProps>();
</script>

<template>
  <div class="slider-item">
    <div class="slider-item__left-block">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="text">
        <p>{{ text }}</p>
      </div>
      <div class="button-catalog">
        <DefaultButton>
          {{ btnText }}
        </DefaultButton>
      </div>
    </div>
    <div class="slider-item__right-block"> 
      <img :src="`https://api.los-bio.ru/files/${catalog}/${image}`" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.slider-item {
  display: flex;
  justify-content: space-between;
  // align-items: center;

  height: 530px;
}

.slider-item__left-block {
  width: 577px;
}

.slider-item__right-block img{
  height: 480px;
}

.title {
  font-weight: 700;
  font-size: 60px;
  line-height: 100%;
  color: color.$main_white;
  margin-bottom: 30px;
}

.text {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: color.$main_white;
  margin-bottom: 80px;
}

.button-catalog .button {
  width: 238px;
  height: 57px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  color: color.$main_white;
}
</style>