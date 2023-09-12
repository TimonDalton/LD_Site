<template>
  <div :class="$style.cancelButton">
    <div :class="$style.cancel">{{text}}</div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";

  const props = defineProps({
    text: {type:String, default:"Cancel"},
  });

</script>
<style module>
  .cancel {
    position: relative;
    font-weight: 500;
  }
  .cancelButton {
    position: relative;
    border-radius: var(--br-13xl);
    background-color: var(--color-darkgray-100);
    width: 150px;
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: var(--button-text-size);
    color: var(--color-black);
    font-family: var(--button-text);
  }
</style>
