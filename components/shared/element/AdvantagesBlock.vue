<script lang="ts" setup>
interface IAdvantagesBlockProps {
  image: string;
  title: string;
  text: string;
};

const {
  image,
  title,
  text
} = defineProps<IAdvantagesBlockProps>();
</script>

<template>
  <div class="advantages-block">
    <div class="advantages-block__title-block">
      <div class="icon">
        <img :src="image" alt="">
      </div>
      <div class="title">
        <p>{{ title }}</p>
      </div>
    </div>
    <div class="advantages-block__text-block">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.advantages-block {
  width: 100%;
  height: 100%;
  padding: 40px 124px 40px 40px;
  background: #121F2380;
  border: 2px solid #121F2380;
  border-radius: 19px;
}

.advantages-block__title-block {

}

.advantages-block__text-block {
  font-weight: 400;
  font-size: 18px;
  line-height: 137%;
  color: color.$main_white;
}

.icon img{
  width: 75px;
  height: 75px;
}

.title {
  font-weight: 600;
  font-size: 30px;
  line-height: 117%;
  color: color.$main_white;
}
</style>