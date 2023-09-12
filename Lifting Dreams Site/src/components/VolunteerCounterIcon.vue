<template>
  <div :class="$style.volunteerCounterIcon">
    <img :class="$style.stateabundantIcon" alt="" src="/stateabundant.svg" v-if="state == 'abundant'" />
    <img :class="$style.stateNonAbundant" alt="" src="/volunteer-counter-icon3.svg" v-else-if="state == 'managable'" />
    <img :class="$style.stateNonAbundant" alt="" src="/volunteer-counter-icon1.svg" v-else-if="state == 'short'" />
    <img :class="$style.stateNonAbundant" alt="" src="/volunteer-counter-icon2.svg" v-else-if="state == 'empty'" />
    <div :class="$style.stateabundantIcon" v-else>
      <img :class="$style.closeIcon" alt="" src="/close@2x.png" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
const props = defineProps({
  state: { type: String, default: 'unavailable' }
})
console.log('got state: '+props.state);
</script>
<style module>
.stateabundantIcon {
  display: flex;
}
.stateNonAbundant {
  width: 15px;
}

.closeIcon {
  width: 15px;
  height: 15px;
}

.volunteerCounterIcon {
  /* background: pink; */
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin: 2px;
  justify-content: center;
}
</style>
