<template>
  <div :class="$style.lableText">
    <div :class="$style.property1default">
      <b :class="$style.lableText1">
      <slot/>
      </b>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
</script>
<style module>
  .lableText1 {
    position: relative;
  }
  .property1default {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .lableText {
    /* TODO DO THESE FOLLOWING 4 LINES EVERYWHERE */
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* padding: var(--padding-8xs) 0px; */
    text-align: left;
    font-size: var(--subheading-text-size);
    color: var(--color-black);
    font-family: var(--body-text);
  }
</style>
