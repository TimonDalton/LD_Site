<template>
  <div :class="$style.bodyText">
    <div :class="$style.property1default">
      <div :class="$style.bodyTextWrapper">
        <div :class="$style.bodyText1">
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
  .body {
    margin: 0;
  }
  .bodyText1 {
    align-self: stretch;
    flex: 1;
    position: relative;
    line-height: 100%;
    font-family: var(--body-text);
    font-size: var(--body-text-size);
  }
  .bodyTextWrapper {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: var(--padding-3xs);
    align-items: center;
    justify-content: center;
  }
  .property1default {
    align-self: stretch;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

</style>
