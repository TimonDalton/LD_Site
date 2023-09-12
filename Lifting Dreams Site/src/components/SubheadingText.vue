<template>
  <div :class="$style.subheadingText">
    <div :class="$style.statedefault">
      <div :class="$style.subheadingTextWrapper">
        <div :class="$style.subheadingText1">
        <slot/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";

</script>
<style module>
  .subheadingText1 {
    position: relative;
  }
  .subheadingTextWrapper {
    display: flex;
    flex-direction: column;
    padding: var(--padding-8xs) 0px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .statedefault {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .subheadingText {
    position: relative;
    border-radius: var(--br-8xs);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--subheading-text-size);
    color: var(--color-black);
    font-family: var(--subheading-text);
  }
</style>
