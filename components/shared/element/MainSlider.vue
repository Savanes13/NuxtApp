<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import SliderItem from './SliderItem.vue'
import type { TSlidesArray } from '~/types/pages/index/typesIndex'

interface IMainSliderProps {
  data: TSlidesArray
};

const {
  data
} = defineProps<IMainSliderProps>();
</script>

<template>
  <Swiper
    :modules="[Pagination, Autoplay]"        
    :space-between="32"
    :slides-per-view="1"
    :loop="true"
    :pagination="{ clickable: true }"       
    class="index-page__swiper"
  >
    <SwiperSlide
      v-for="item in data"
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
</template>

<style lang="scss" scoped>

</style>