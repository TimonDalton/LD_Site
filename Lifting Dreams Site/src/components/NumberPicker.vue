<template>
  <div :class="$style.numberPicker">
    <div :class="$style.numberContextParent">
      <div :class="$style.numberContext">{{ text }}</div>
      <div :class="$style.wrapper">
        <div :class="$style.div">{{ number }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const props = defineProps({
  number: { type: String, default: "0" },
  text: { type: String, default: "Number Context" },
});

</script>
<style module>
.numberContext {
  position: relative;
}

.div {
  position: absolute;
  width: 27.1%;
  top: 19.35%;
  left: 37.4%;
  display: inline-block;
}

.wrapper {
  position: relative;
  background-color: var(--color-gainsboro);
  width: 41px;
  height: 31px;
  overflow: hidden;
  flex-shrink: 0;
}

.numberContextParent {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8xs);
}

.numberPicker {
  position: relative;
  width: 171px;
  height: 32px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--subheading-text);
}</style>
