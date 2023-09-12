<template>
  <div :class="$style.deleteButton">
    <div :class="$style.statedefault"  v-if="state == 'default' ">
      <div :class="$style.cancelButton">
        <div :class="$style.cancel">{{text}}</div>
      </div>
    </div>
    <div :class="$style.statevariant2" v-else>
      <div :class="$style.deleteParent">
        <div :class="$style.delete">Delete</div>
        <img :class="$style.maskGroupIcon" alt="" src="/mask-group@2x.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { defineComponent, ref } from "vue";
  const props = defineProps({
    state: {type:String,default:"default"},
    text: {type:String,default:'Delete'}
  });
</script>
<style module>
  .cancel {
    position: relative;
    font-weight: 500;
  }
  .cancelButton {
    border-radius: var(--br-13xl);
    background-color: var(--color-tomato);
    display: flex;
    flex-direction: row;
    padding: var(--padding-3xs);
    align-items: center;
    justify-content: center;
  }
  .statedefault {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .delete {
    flex: 1;
    position: relative;
    font-weight: 500;
  }
  .maskGroupIcon {
    position: relative;
    object-fit: cover;
  }
  .deleteParent {
    border-radius: var(--br-13xl);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }
  .statevariant2 {
    border-radius: var(--br-13xl);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .deleteButton {
    position: relative;
    border-radius: var(--br-8xs);
    box-sizing: border-box;
    width: 200px;
    height: 70px;
    overflow: hidden;
    padding: 10px;
    text-align: left;
    font-size: var(--button-text-size);
    color: var(--color-black);
    font-family: var(--button-text);
  }
</style>
