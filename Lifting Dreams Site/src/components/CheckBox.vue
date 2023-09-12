<template>
  <div :class="$style.checkBox">
    <div :class="$style.stateunticked" v-if="!checked">
      <div :class="$style.rectangleParent">
        <div :class="$style.frameChild" />
        <div :class="$style.checkBoxText">{{text}}</div>
      </div>
    </div>
    <div :class="$style.stateticked" v-else>
      <div :class="$style.rectangleParent">
        <div :class="$style.doneWrapper">
          <img :class="$style.doneIcon" alt="" src="/done@2x.png" />
        </div>
        <div :class="$style.checkBoxText">{{text}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";
  const props = defineProps({
    checked:{type:Boolean,default:false},
    text:{type:String,default:"Check Box Text"}
  });
</script>
<style module>
  .frameChild {
    position: relative;
    background-color: var(--color-gainsboro);
    width: 29px;
    height: 29px;
  }
  .checkBoxText {
    position: relative;
  }
  .rectangleParent {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xs);
  }
  .stateunticked {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .doneIcon {
    position: relative;
    width: 21px;
    height: 33px;
    object-fit: cover;
  }
  .doneWrapper {
    background-color: var(--color-gainsboro);
    width: 29px;
    height: 29px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .stateticked {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .checkBox {
    position: relative;
    box-sizing: border-box;
    width: 263px;
    height: 50px;
    padding: 20px;
    overflow: hidden;
    text-align: left;
    font-size: var(--button-text-size);
    color: var(--color-black);
    font-family: var(--subheading-text);
  }
</style>
