<template>
  <div :class="$style.datePlaceDisplayBox">
    <div :class="$style.datePlaceDisplayBoxChild" />
    <div :class="$style.areaPlace">{{placeText}}</div>
    <div :class="$style.ddMonthYear">{{dateText}}</div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";

  const props = defineProps({
      placeText: { type: String, default: "Area- Place" },
      dateText: { type: String, default: "dd month year" },
    })

</script>
<style module>
  .datePlaceDisplayBoxChild {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    background-color: var(--color-gainsboro);
  }
  .areaPlace {
    position: absolute;
    top: 50%;
    left: 6.49%;
  }
  .ddMonthYear {
    position: absolute;
    top: 17.35%;
    left: 6.49%;
  }
  .datePlaceDisplayBox {
    position: relative;
    width: 308px;
    height: 98px;
    text-align: left;
    font-size: var(--button-text-size);
    color: var(--color-black);
    font-family: var(--subheading-text);
  }
</style>
