<template>
  <div :class="$style.buttonText">
    <div :class="$style.property1default">
      <div :class="$style.buttonTextWrapper">
        <div :class="$style.buttonText1">{{text}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";
  const props = defineProps({
    text:{
      type:String,
      default:'Button Text',
    }
  });
</script>
<style module>
  .buttonText1 {
    position: relative;
    font-weight: 500;
  }
  .buttonTextWrapper {
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs);
    align-items: center;
    justify-content: center;
  }
  .property1default {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .buttonText {
    position: relative;
    overflow: hidden;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--button-text-size);
    color: var(--color-black);
    font-family: var(--button-text);
  }
</style>
