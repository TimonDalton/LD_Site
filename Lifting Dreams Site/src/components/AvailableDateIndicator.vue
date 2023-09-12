<script lang="ts" setup>
import { defineComponent, ref} from "vue";

import router from "../main";

const props = defineProps({
  state: { default: 'available' },
  date: String,
  location: String,
});

function onClick(){
  let pageProps = '';
  router.push({path:`/signup-date/${props.location??''}/${props.date??''}`,});
}

</script>

<template>
  <div :class="$style.availableDateIndicator" >
    <div :class="$style.stateavailable" v-if="state == 'available'" @click="onClick">
      <div :class="$style.ddMonth">{{ date }}</div>
    </div>
    <div :class="$style.stateconfirmed" v-else-if="state == 'confirmed'" @click="onClick">
      <div :class="$style.ddMonth">{{ date }}</div>
      <img :class="$style.doneIcon" alt="" src="/done2@2x.png" />
    </div>
    <div :class="$style.stateunavailable" v-else>
      <div :class="$style.ddMonth">{{ date }}</div>
    </div>
  </div>
</template>

<style module>
.ddMonth {
  position: relative;
  line-height: 100%;
}

.stateavailable {
  border-radius: var(--br-9xs);
  background-color: var(--color-deepskyblue);
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.doneIcon {
  position: relative;
  width: 21px;
  height: 19px;
  object-fit: cover;
}

.stateconfirmed {
  border-radius: var(--br-9xs);
  background-color: var(--color-limegreen);
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
  gap: var(--gap-7xs);
}

.stateunavailable {
  border-radius: var(--br-9xs);
  background-color: var(--color-darkgray-200);
  border: 2px solid var(--color-black);
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
}

.availableDateIndicator {
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0.1vw;
  text-align: left;
  font-size: var(--body-text-size);
  color: var(--color-black);
  font-family: var(--body-text);
}</style>
