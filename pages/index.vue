<script lang="ts" setup>
import AdvantagesBlock from '~/components/shared/element/AdvantagesBlock.vue';
import { getAdvantageData } from '~/api/pages/index/apiIndex';
import type { TAdvantagesArray } from '~/types/pages/index/typesIndex';

const dataAdvantagesArray = ref<TAdvantagesArray | null>(null);

const getAdvantages = async () => {
  try {
    const response = await getAdvantageData();
    const advantages = response.map(item => ({
      id: item.id,
      name: item.name,
      ...JSON.parse(item.value)
    }))
    dataAdvantagesArray.value = advantages;
    console.log(advantages)
  } catch (error) {
    console.log("ошибка при получении преимуществ", error);
  };
};
getAdvantages();
</script>

<template>
  <div 
    class="index-page"
    v-if="dataAdvantagesArray"
  >
    
    <div class="index-page__advantages-block">
      <AdvantagesBlock
        v-for="item in dataAdvantagesArray"
        :key="item.id"
        :image="item.icon"
        :title="item.title"
        :text="item.description"
      />
    </div>

  </div>
</template>

<style scoped>
.index-page__advantages-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
</style>