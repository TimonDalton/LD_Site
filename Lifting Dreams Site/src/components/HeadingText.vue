<template>
  <div :class="$style.headingText">
    <div :class="$style.property1default">
      <div :class="$style.headingTextWrapper">
        <div :class="$style.headingText1">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";


</script>
<style module>
.headingText1 {
  font-weight: 500;
}

.headingTextWrapper {
  display: flex;
  flex-direction: column;
  padding: var(--padding-8xs) 0px;
  align-items: flex-start;
  justify-content: flex-start;
}

.property1default {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.headingText {
  border-radius: var(--br-8xs);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: left;
  font-size: var(--heading-text-size);
  color: var(--color-black);
  font-family: var(--body-text);
}</style>
