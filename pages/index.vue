<script lang="ts" setup>
import AdvantagesBlock from '~/components/shared/element/AdvantagesBlock.vue';
import { getAdvantageData, getSliderData } from '~/api/pages/index/apiIndex';
import type { TAdvantagesArray } from '~/types/pages/index/typesIndex';
import type { TSlidesArray } from '~/types/pages/index/typesIndex';

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
    v-if="dataAdvantagesArray"
  >
    
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
</style>