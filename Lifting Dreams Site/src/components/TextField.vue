<template>
  <!-- <div :class="$style.textField"> -->
  <input :class="$style.textField" @input=" event => $emit(emitName,textRef)" v-model="textRef" />
  <!-- <div :class="$style.textField1">{{initialText}}</div> -->
  <!-- </div> -->
</template>
<script lang="ts" setup>
import { defineComponent, ref, emit } from "vue";
import TimePicker from "./TimePicker.vue";

const props = defineProps({
  initialText: { type: String, default: "Text Field" },
  emitName: { type: String, required: true,},
});
const textRef = ref(props.initialText);

</script>
<style module>
.textField1 {
  position: relative;
  line-height: 100%;
}

.textField {
  position: relative;
  border-radius: var(--br-7xs);
  background-color: var(--color-silver);
  width: 199px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--body-text-size);
  color: var(--color-black);
  font-family: var(--body-text);
}
</style>
