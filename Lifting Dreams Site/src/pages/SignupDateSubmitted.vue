<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import router from "../main";
import AvailableDateIndicator from "../components/AvailableDateIndicator.vue";
import BodyText from "../components/BodyText.vue";
import DefaultButton from "../components/Button.vue";
import ButtonText from "../components/ButtonText.vue";
import CancelButton from "../components/CancelButton.vue";
import CheckBox from "../components/CheckBox.vue";
import DatelocationDisplayBox from "../components/DatelocationDisplayBox.vue";
import DeleteButton from "../components/DeleteButton.vue";
import Dropdown from "../components/Dropdown.vue";
import HeadingText from "../components/HeadingText.vue";
import LableText from "../components/LableText.vue";
import NumberPicker from "../components/NumberPicker.vue";
import SubheadingText from "../components/SubheadingText.vue";
import TextField from "../components/TextField.vue";
import TimePicker from "../components/TimePicker.vue";
import VolunteerCounterIcon from "../components/VolunteerCounterIcon.vue";
import VolunteerCounterGroup from "../components/VolunteerCounterGroup.vue";

const date = router.currentRoute.value.params['date'].concat();
const location = router.currentRoute.value.params['location'].concat();

function returnClick() {
  router.push({ name: 'Dates', params: { location: location, date: date } });
}
</script>
<template>
  <div :class="$style.signupDateSubmitted">
    <main :class="$style.pageFrame">
      <img :class="$style.liftingdreamsLogoOnlyIcon" alt="" src="/liftingdreams-logo-only-4.svg" />
      <SubheadingText :class="$style.nameText">Jeff Ooshuizen</SubheadingText>
      <div :class="$style.frameParent">
        <div :class="$style.subheadingTextGroup">
          <SubheadingText :class="$style.subheadingText2"> Your form has been submitted!</SubheadingText>
          <BodyText :class="$style.bodyText">You have signup up to volunteer on 02/08/2023 at Love Christian.</BodyText>
        </div>
        <!-- <DefaultButton :class="$style.button" state="neutral" text="Volunteer for another date"/> -->
        <div :class="$style.button" @click="returnClick">
          <div :class="$style.button1">Volunteer for another date</div>
        </div>
      </div>
    </main>
  </div>
</template>
<style module>
.backgroundsDesktopIcon {
  position: absolute;
  width: 100vw;
  overflow: hidden;
}

.nameText {

position: absolute;
top: 14vh;
right: calc(8vw + 150px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
}

.liftingdreamsLogoOnlyIcon {
  position: absolute;
  top: 4.5vh;
  right: 8vw;
  width: 130px;
  height: 133px;
  overflow: hidden;
}

.subheadingText1 {
  position: relative;
}

.subheadingTextWrapper {
  display: flex;
  flex-direction: column;
  padding: var(--padding-8xs) 0px;
  align-items: flex-start;
  justify-content: flex-start;
}

.subheadingText {
  position: absolute;
  top: 129px;
  left: 969px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.subheadingText2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bodyText1 {
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 100%;
}

.bodyTextWrapper {
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
}

.bodyText {
  width: 579px;
  height: 73px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--body-text-size);
  font-family: var(--body-text);
}

.subheadingTextGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-10xs);
}

.button1 {
  flex: 1;
  position: relative;
}

.button {
  border-radius: var(--br-13xl);
  background-color: var(--color-gainsboro);
  width: 344px;
  height: 49px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs) 0px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.frameParent {
  position: relative;
  top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 17px;
}

.pageFrame {
  position: absolute;
  width: 100vw;
  height: 100vw;
  overflow: hidden;
  text-align: left;
  font-size: var(--subheading-text-size);
  color: var(--color-black);
  font-family: var(--subheading-text);
}

.signupDateSubmitted {
  position: relative;
  background-color: var(--color-white);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
