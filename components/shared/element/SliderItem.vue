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

@media (max-width: 1400px) {
  .slider-item__left-block {
    width: 380px;
  }

  .title {
    font-size: 40px;
  }
}

@media (max-width: 1200px) {
  .slider-item__right-block img{
    width: 350px;
    height: auto;
  }
} 

@media (max-width: 991px) {
  .slider-item {
    flex-direction: column-reverse;
    height: auto;
  }

  .slider-item__left-block {
    width: 100%;
  }

  .slider-item__right-block {
    text-align: center;
  }

  .title {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .text {
    font-size: 16px;
    margin-bottom: 40px;
  }

  .button-catalog .button  {
    font-size: 16px;
    width: 180px;
    height: 50px;
  }
} 

@media (max-width: 768px) {
  .slider-item__right-block img{
    width: 280px;
    height: auto;
  }
}

@media (max-width: 375px) {
  .title {
    font-size: 22px;
  }

  .text {
    font-size: 14px;
  }

  .button-catalog .button  {
    font-size: 14px;
    width: 150px;
    height: 42px;
  }
}
</style>