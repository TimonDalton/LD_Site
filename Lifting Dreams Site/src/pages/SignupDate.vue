<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import router from "../main";
import { getSignupDetails } from '../logic/backendCom';
import AvailableDateIndicator from "../components/AvailableDateIndicator.vue";
import BodyText from "../components/BodyText.vue";
import DefaultButton from "../components/Button.vue";
import ButtonText from "../components/ButtonText.vue";
import CancelButton from "../components/CancelButton.vue";
import CheckBox from "../components/CheckBox.vue";
import DatePlaceDisplayBox from "../components/DatePlaceDisplayBox.vue";
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
console.log('router params: ');
console.log(router.currentRoute.value.params);

const date = router.currentRoute.value.params['date'].concat();
const location = router.currentRoute.value.params['location'].concat();
const dateId:Number = +(router.currentRoute.value.params['date_id'].concat());

const transportRadio = ref(-1);
const transportCount = ref(0);
function selectTransportAtIndex(index: number) {
  if (transportRadio.value == index) {
    transportRadio.value = -1;
  } else {
    transportRadio.value = index;
  }
}
const gradeCheckbox = ref([]);
function toggleGradeChecked(index:Number) {
  if (gradeCheckbox.value.includes(index)) {
    gradeCheckbox.value.splice(gradeCheckbox.value.indexOf(index), 1);
  } else {
    gradeCheckbox.value.push(index);
  }
}
const subjectCheckbox = ref([]);
function toggleSubjectChecked(index) {
  if (subjectCheckbox.value.includes(index)) {
    subjectCheckbox.value.splice(subjectCheckbox.value.indexOf(index), 1);
  } else {
    subjectCheckbox.value.push(index);
  }
}

function cancelClick() {
  router.push({ name: 'Dates', params: { location: location } });
}
function cancelSignupClick() {
  console.log('Signup Cancelled');
  console.log('TODO: Promt: Are you sure?');
  router.push({ name: 'Dates', params: { location: location } });
}
function submitClick() {
  router.push({ name: 'SignupDateSubmitted', params: { date_id: dateId }, });
}

getSignupDetails(dateId).then(
  sInfo => {
    if (sInfo.transport.status == 'lift-required') {
      transportRadio.value = 0;
    }
    else if (sInfo.transport.status == 'own-transport') {
      transportRadio.value = 1;
    } else if (sInfo.transport.status == 'lift-provider') {
      transportRadio.value = 2;
      //TODO use transport count
    } else {
      if (sInfo.transport.status != '') {
        throw 'transport status error: Unknown type: ' + sInfo.transport.status;
      }
    }
    if (sInfo.grades.g3_5) {
      if (!gradeCheckbox.value.includes(0)) {
        gradeCheckbox.value.push(0);
      }
    }
    if (sInfo.grades.g6_7) {
      if (!gradeCheckbox.value.includes(1)) {
        gradeCheckbox.value.push(1);
      }
    }
    if (sInfo.grades.g8_9) {
      if (!gradeCheckbox.value.includes(2)) {
        gradeCheckbox.value.push(2);
      }
    }
    if (sInfo.subjects.math) {
      if (!subjectCheckbox.value.includes(0)) {
        subjectCheckbox.value.push(0);
      }
    }
    if (sInfo.subjects.english) {
      if (!subjectCheckbox.value.includes(1)) {
        subjectCheckbox.value.push(1);
      }
    }


  }
).catch(error => console.log(error));


</script>

<template>
  <div :class="$style.editDateSignup">
    <main :class="$style.pageFrame">
      <img :class="$style.liftingdreamsLogoOnlyIcon" alt="" src="/liftingdreams-logo-only-4.svg" />
      <SubheadingText :class="$style.nameText">Jeff Ooshuizen</SubheadingText>
      <DatePlaceDisplayBox :class="$style.datelocationDisplayBox" :date-text="date" :location-text="location" />
      <!-- <div :class="$style.datelocationDisplayBox">
        <div :class="$style.datelocationDisplayBoxChild" />
        <div :class="$style.arealocation">Memelodi- Love Christian</div>
        <div :class="$style.ddMonthYear">2 August 2023</div>
      </div> -->
      <form :class="$style.frameParent">
        <div :class="$style.frameGroup">
          <div :class="$style.subheadingTextGroup">
            <div :class="$style.checkBoxWrapper">
              <SubheadingText>Transport from Hazelwood</SubheadingText>
            </div>
            <div :class="$style.checkBoxParent">
              <CheckBox :checked="transportRadio == 0" @click="selectTransportAtIndex(0)" text="I need a lift" />
              <CheckBox :checked="transportRadio == 1" @click="selectTransportAtIndex(1)" text="I don't need a lift" />
              <CheckBox :checked="transportRadio == 2" @click="selectTransportAtIndex(2)" text="I can provide a lift" />
              <NumberPicker text="To how many?" :number="transportCount" />
            </div>
          </div>
          <div :class="$style.subheadingTextGroup">
            <div :class="$style.checkBoxWrapper">
              <SubheadingText>Where would you like to help?</SubheadingText>
            </div>
            <div :class="$style.frameParent1">
              <div :class="$style.checkBoxParent">
                <CheckBox :checked="gradeCheckbox.includes(0)" @click="toggleGradeChecked(0)" text="Grade 3-5" />
                <CheckBox :checked="gradeCheckbox.includes(1)" @click="toggleGradeChecked(1)" text="Grade 6-7" />
                <CheckBox :checked="gradeCheckbox.includes(2)" @click="toggleGradeChecked(2)" text="Grade 8-9" />
              </div>
              <div :class="$style.checkBoxParent">
                <CheckBox :checked="subjectCheckbox.includes(0)" @click="toggleSubjectChecked(0)" text="English" />
                <CheckBox :checked="subjectCheckbox.includes(1)" @click="toggleSubjectChecked(1)" text="Math" />
              </div>
            </div>
          </div>
        </div>
        <nav :class="$style.cancelButtonParent">
          <CancelButton @click="cancelClick" />
          <DeleteButton @click="cancelSignupClick" text="Cancel Signup" />
          <DefaultButton @click="submitClick" text="Submit" state="default" />

        </nav>
      </form>
    </main>
  </div>
</template>
<style module>
.backgroundsDesktopIcon {
  position: absolute;
  width: 100vw;
  overflow: hidden;
}

.liftingdreamsLogoOnlyIcon {
  position: absolute;
  top: 4.5vh;
  right: 8vw;
  width: 130px;
  height: 133px;
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
  top: 14vh;
  right: 22vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.datelocationDisplayBoxChild {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: var(--color-gainsboro);
}

.arealocation {
  position: absolute;
  top: 50%;
  left: 6.49%;
}

.ddMonthYear {
  position: absolute;
  top: 17.35%;
  left: 6.49%;
}

.datelocationDisplayBox {
  position: absolute;
  top: 9vh;
  left: 6vw;
  width: 308px;
  height: 98px;
  font-size: var(--button-text-size);
}

.subheadingText3 {
  position: relative;
  font-size: var(--subheading-text-size);
  font-family: var(--subheading-text);
  color: var(--color-black);
  text-align: left;
}

.frameChild {
  position: relative;
  background-color: var(--color-gainsboro);
  width: 29px;
  height: 29px;
}

.checkBoxText {
  position: relative;
  font-size: var(--button-text-size);
  font-family: var(--subheading-text);
  color: var(--color-black);
  text-align: left;
}

.rectangleParent {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xs);
}

.checkBox {
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

.numberContext {
  position: relative;
  font-size: var(--font-size-base);
  font-family: var(--subheading-text);
  color: var(--color-black);
  text-align: left;
}

.div {
  position: absolute;
  width: 27.1%;
  top: 19.35%;
  left: 37.4%;
  font-size: var(--font-size-base);
  font-family: var(--subheading-text);
  color: var(--color-black);
  text-align: left;
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
  width: 140px;
  height: 32px;
}

.checkBoxGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
}

.checkBoxParent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
}

.subheadingTextGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-8xl);
}

.checkBoxWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.frameParent1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-96xl);
}

.frameGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-28xl);
}

.cancel {
  position: relative;
  font-size: var(--button-text-size);
  font-weight: 500;
  font-family: var(--button-text);
  color: var(--color-black);
  text-align: left;
}

.cancelButton {
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-darkgray-100);
  border-radius: var(--br-13xl);
  width: 150px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.cancelButton1 {
  border-radius: var(--br-13xl);
  background-color: var(--color-tomato);
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
}

.deleteButton {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.button1 {
  flex: 1;
  position: relative;
  font-size: var(--button-text-size);
  font-weight: 500;
  font-family: var(--button-text);
  color: var(--color-black);
  text-align: center;
}

.button {
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs) 0px;
  background-color: var(--color-cornflowerblue-100);
  border-radius: var(--br-13xl);
  width: 150px;
  height: 49px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}

.cancelButtonParent {
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 19px;
}

.frameParent {
  position: relative;
  top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-33xl);
}

.pageFrame {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: left;
  font-size: var(--subheading-text-size);
  color: var(--color-black);
  font-family: var(--subheading-text);
}

.editDateSignup {
  position: relative;
  background-color: var(--color-white);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
