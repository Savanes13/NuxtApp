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
      <div>
        <p>{{ title }}</p>
      </div>
      <div>
        <p>{{ text }}</p>
      </div>
      <div>
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
.slider-item {
  color: white;
}
</style>