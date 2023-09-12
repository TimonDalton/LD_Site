<template>
  <div :class="$style.timePicker">
    <div :class="$style.timeContextParent">
      <div :class="$style.timeContext">{{text}}</div>
      <div :class="$style.wrapper">
        <div :class="$style.div">{{time}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";

  const props = defineProps({
      time: { type: String, default: "09:00" },
      text: { type: String, default: "Time Context" },
    });

</script>
<style module>
  .timeContext {
    position: relative;
  }
  .div {
    position: absolute;
    width: 92.68%;
    top: 19.35%;
    left: 7.32%;
    display: inline-block;
  }
  .wrapper {
    position: relative;
    background-color: var(--color-gainsboro);
    width: 51px;
    height: 31px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .timeContextParent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 157px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .timePicker {
    position: relative;
    width: 179px;
    height: 31px;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-black);
    font-family: var(--subheading-text);
  }
</style>
