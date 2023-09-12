<template>
  <div :class="$style.button">
    <div :class="$style.statedefault" v-if="state=='default'">
      <div :class="$style.button1">{{text}}</div>
    </div>
    <div :class="$style.stateselected" v-else-if="state=='selected'">
      <div :class="$style.button2">{{text}}</div>
    </div>
    <div :class="$style.stateneutral" v-else>
      <div :class="$style.button3">{{text}}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const props = defineProps({
  state: {
    type:String,
    defualt: 'default'
  },
  text:{
    type:String,
    default:'Button'
  }
});
</script>
<style module>
.button1 {
  flex: 1;
  position: relative;
  font-weight: 500;
}

.statedefault {
  border-radius: var(--br-13xl);
  background-color: var(--color-cornflowerblue-100);
  display: flex;

  flex-direction: row;
  padding: var(--padding-3xs) 2vw;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-size: var(--button-text-size);
  font-family: var(--button-text);
}

.button2 {
  position: relative;
  font-weight: 500;
}

.stateselected {
  border-radius: var(--br-13xl);
  background-color: #55a5ef;
  border: 3px solid var(--color-black);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--button-text-size);
  font-family: var(--button-text);
}

.button3 {
  flex: 1;
  position: relative;
}

.stateneutral {
  border-radius: var(--br-13xl);
  background-color: var(--color-gainsboro);
  width: 150px;
  height: 49px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) 0px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  font-size: var(--button-text-size);
  font-family: var(--button-text);
}

.button {
  margin: 0.5vw;
  padding: 0.1vw;
  border-radius: var(--br-8xs);
  display: flex;
  flex-direction: row;
  height: 49px;
  justify-content: center;
  text-align: center;
}</style>
