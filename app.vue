<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@use "./style/variables/font" as font;

.app {
  font-family: font.$font-Gilroy;
  min-height: 100dvh;
}
</style>
