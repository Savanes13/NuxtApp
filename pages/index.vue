<script lang="ts" setup>
import AdvantagesBlock from '~/components/shared/element/AdvantagesBlock.vue';
import SliderItem from '~/components/shared/element/SliderItem.vue';
import { getAdvantageData, getSliderData } from '~/api/pages/index/apiIndex';
import type { TAdvantagesArray } from '~/types/pages/index/typesIndex';
import type { TSlidesArray } from '~/types/pages/index/typesIndex';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const dataSliderArray = ref<TSlidesArray | null>(null);
const dataAdvantagesArray = ref<TAdvantagesArray | null>(null);

const getAdvantages = async () => {
  try {
    const response = await getAdvantageData();
    const advantages = response.map((item: any) => ({
      id: item.id,
      name: item.name,
      ...JSON.parse(item.value)
    }));
    dataAdvantagesArray.value = advantages;
    console.log(advantages)
  } catch (error) {
    console.log("ошибка при получении преимуществ", error);
  };
};
getAdvantages();

const getSlider = async () => {
  try {
     const response = await getSliderData();
    const slides = response.map((item: any) => ({
      id: item.id,
      name: item.name,
      ...JSON.parse(item.value)
    }));
    dataSliderArray.value = slides;
    console.log(slides)
  } catch (error) {
    console.log("ошибка при получении слайдера", error);
  };
};
getSlider();
</script>

<template>
  <div 
    class="index-page"
    v-if="dataAdvantagesArray && dataSliderArray"
  >
    <div class="index-page__slider-block">
      <Swiper
        :modules="[Pagination, Autoplay]"        
        :space-between="32"
        :slides-per-view="1"
        :loop="true"
        :pagination="{ clickable: true }"       
        class="index-page__swiper"
      >
        <SwiperSlide
          v-for="item in dataSliderArray"
          :key="item.id"
        >
          <SliderItem
            :image="item.image[0]?.name || ''"
            :title="item.title"
            :text="item.description"
            :btn-text="item.btnText"
            :catalog="item.image[0]?.catalog || ''"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="index-page__advantages-block">
      <div class="title-advantages">
        <p>Наши преимущества</p>
      </div>
      <div class="items-advantages">
        <AdvantagesBlock
          v-for="item in dataAdvantagesArray"
          :key="item.id"
          :image="item.icon"
          :title="item.title"
          :text="item.description"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;

.index-page__slider-block {
  margin-top: 80px;
  margin-bottom: 147px;
}

.index-page__advantages-block {
  margin-bottom: 147px;
}

.title-advantages {
  font-weight: 700;
  font-size: 42px;
  line-height: 97%;
  color: color.$main_white;
  margin-bottom: 80px;
}

.items-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

:global(.swiper-pagination-bullet) {
  width: 18px;
  height: 18px;
  background: #FFFFFF0D;
}

:global(.swiper-pagination-bullet-active) {
  width: 18px;
  height: 18px;
  background: color.$main_blue;
}
</style>