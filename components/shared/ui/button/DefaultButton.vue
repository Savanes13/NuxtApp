<script lang="ts" setup>

</script>

<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use "@/style/variables/color.scss" as color;
@use "@/style/variables/transition.scss" as transition;

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: color.$main_blue;
  color: color.$main_white;
  font-weight: 500;
  width: 100%;
  height: 100%;
  transition: background-color transition.$medium;
  cursor: pointer
}

.button:hover {
  background: #0d65b8;
}
</style>