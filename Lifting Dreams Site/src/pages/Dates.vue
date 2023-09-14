<script lang="ts" setup async>
import { defineComponent, ref } from "vue";
import AvailableDateIndicator from "../components/AvailableDateIndicator.vue";
import BodyText from "../components/BodyText.vue";
import DefaultButton from "../components/Button.vue";
import ButtonText from "../components/ButtonText.vue";
import CancelButton from "../components/CancelButton.vue";
import CheckBox from "../components/CheckBox.vue";
import DatePlaceDisplayBox from "../components/DatelocationDisplayBox.vue";
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
import AvailableDateAndVolunteersGroup from "../components/AvailableDateAndVolunteersGroup.vue";

import LocationDates from "../components/LocationDates.vue";
import  {getLocations} from '../logic/backendCom';

import router from "../main";

console.log('router params: ');
console.log(router.currentRoute.value.params);
let locationName = 'Choose location';
if (router.currentRoute.value.params['location']) {
  locationName = router.currentRoute.value.params['location'].concat();
}
const locations = [{id:0,name:'mamelodi'}];//await getLocations(); 
let currentLocation = locations.length>0?ref(locations[0]):ref({id:0});
</script>

<template>
  <div :class="$style.dates">
    <main :class="$style.lineParent">
      <img :class="$style.liftingdreamsLogoOnlyIcon" alt="" src="/liftingdreams-logo-only-4.svg" />
      <div :class="$style.dropdown">
        <Dropdown :text="locationName" />
      </div>
      <div :class="$style.subheadingText">
        <SubheadingText>The more the merrier!</SubheadingText>
      </div>
      <div :class="$style.subheadingText2">
        <SubheadingText>Jeff Oosthuizen</SubheadingText>
      </div>
      <div :class="$style.datesIndicatorParent">
        <Suspense>
          <template #default>
            <LocationDates :location-id="currentLocation['id']"/>
          </template>
          <template #fallback>
            Location Dates Fallback
            <!-- <LocationDates /> -->
          </template>
        </Suspense>
        <!-- <div :class="$style.line" />
        <BodyText :class="$style.dateStartLable">27/07/2023</BodyText>
        <div :class="$style.availableDateIndicatorParent">
          <AvailableDateAndVolunteersGroup :date="'2 August'" :place="place" :available="true" :state="'available'"
            :count="21" :min-count="1" />
          <AvailableDateAndVolunteersGroup :date="'9 August'" :place="place" :available="true" :state="'confirmed'"
            :count="1" :min-count="1" />
          <AvailableDateAndVolunteersGroup :date="'16 August'" :place="place" :available="true" :state="'available'"
            :count="2" :min-count="1" />
          <AvailableDateAndVolunteersGroup :date="'23 August'" :place="place" :available="false" :state="'unavailable'"
            :count="0" :min-count="1" />
          <AvailableDateAndVolunteersGroup :date="'30 August'" :place="place" :available="true" :state="'available'"
            :count="0" :min-count="1" />
          <AvailableDateAndVolunteersGroup :date="'6 September'" :location="place" :available="false" :state="'unavailable'"
            :count="0" :min-count="1" />
        </div> -->
      </div>
    </main>
  </div>
</template>
<style module>
.backgroundsDesktopIcon {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.datesIndicatorParent {
  display: flex;
  position: relative;
  top: 60vh;
}


.ddMonth {
  position: relative;
  font-size: var(--body-text-size);
  line-height: 100%;
  font-family: var(--body-text);
  color: var(--color-black);
  text-align: left;
}

.availableDateIndicator {
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-deepskyblue);
  border-radius: var(--br-9xs);
  height: 49px;
  display: flex;
  flex-direction: column;
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

.availableDateIndicator1 {
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-limegreen);
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-7xs);
}

.ddMonth3 {
  position: relative;
  line-height: 100%;
}

.availableDateIndicator3 {
  border-radius: var(--br-9xs);
  background-color: var(--color-darkgray-200);
  border: 2px solid var(--color-black);
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  align-items: center;
  justify-content: center;
}


.volunteerCounterIcon {
  position: relative;
  width: 15px;
  height: 15px;
}

.volunteerCounterIconParent {
  position: absolute;
  top: 733px;
  left: 367px;
  width: 33px;
  height: 92px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
  transform: rotate(-180deg);
  transform-origin: 0 0;
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
  left: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.subheadingText2 {
  position: absolute;
  top: 14vh;
  right: calc(8vw + 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.dropdownChild {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: var(--color-gainsboro);
}

.dropdownText {
  position: absolute;
  top: 22.92%;
  left: 6.49%;
}

.dropdownItem {
  position: absolute;
  height: 29.69%;
  width: 5.9%;
  top: 43.23%;
  right: 4.35%;
  bottom: 27.08%;
  left: 89.74%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}

.dropdown {
  position: absolute;
  top: 9vh;
  left: 6vw;
  width: 308px;
  height: 48px;
  font-size: var(--button-text-size);
}

.liftingdreamsLogoOnlyIcon {
  position: absolute;
  top: 4.5vh;
  right: 8vw;
  width: 130px;
  height: 133px;
  overflow: hidden;
}


.dates {
  position: relative;
  background-color: var(--color-white);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
