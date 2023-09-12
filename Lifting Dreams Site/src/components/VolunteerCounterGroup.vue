<template>
  <div :class="$style.volunteerCounterIcon">
    <Indicator v-if="!available" state="unavailable" />
    <Indicator v-else-if="count == 0" state="empty" />
    <div v-else :class="$style.counterGroupParent">
      <div :class="$style.sqwoosh"></div>
      <div :class="$style.volunteerCounterGroup" >
        <Indicator v-for="i in count" :state="state" />
      </div>
      <div :class="$style.sqwoosh"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, computed } from "vue";
import Indicator from './VolunteerCounterIcon.vue';
const props = defineProps({
  minCount: { type: Number, default: 1, required: true },
  count: { type: Number, default: 0, required: true },
  available: { type: Boolean, default: false, required: true },
})
const state = computed(() => {
  if (props.count > props.minCount * 2) {
    return 'abundant';
  } else if (props.count > props.minCount) {
    return 'managable';
  } else {
    return 'short';
  }
})
</script>
<style module>
.volunteerCounterGroup {
  position: relative;
  border-radius: var(--br-8xs);
  overflow: hidden;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  max-height: 200px;
  flex-direction: column-reverse;
  margin: 2px;
}
.sqwoosh{
  display: flex;
  flex-grow: 1;
}
.counterGroupParent{
  display: flex;
  flex-direction: row;

}

</style>
