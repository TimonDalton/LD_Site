<template>
  <div :class="$style.dropdown">
    <div :class="$style.dropdownChild" />
    <div :class="$style.dropdownText">{{ text }}</div>
    <img :class="$style.dropdownItem" alt="" src="/polygon-1.svg" />
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
const props = defineProps({
  text: { type: String, default: "Dropdown Text" },
});

</script>
<style module>
.dropdownChild {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: var(--color-gainsboro);
}

.dropdownText {
  position: absolute;
  top: 22.92%;
  left: 6.49%;
}

.dropdownItem {
  position: absolute;
  height: 29.69%;
  width: 5.9%;
  top: 43.23%;
  right: 4.35%;
  bottom: 27.08%;
  left: 89.74%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}

.dropdown {
  position: relative;
  width: 308px;
  height: 48px;
  text-align: left;
  font-size: var(--button-text-size);
  color: var(--color-black);
  font-family: var(--subheading-text);
}</style>
