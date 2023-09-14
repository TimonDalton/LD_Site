<script lang="ts" setup async>
import { } from 'vue';
import AvailableDateAndVolunteersGroup from "../components/AvailableDateAndVolunteersGroup.vue";
import BodyText from "../components/BodyText.vue";
import { getLocationDates,getLocationNameById } from '../logic/backendCom';

const props = defineProps({
    locationId: { type: Number,default:0 }
});
let location = await getLocationNameById(props.locationId);
let locationDates = await getLocationDates(props.locationId);
console.log('Location Dates');
console.log(locationDates);

</script>

<template >
    <div>
        <div :class="$style.line" />
        <BodyText :class="$style.dateStartLable">27/07/2023</BodyText>
        <div :class="$style.availableDateIndicatorParent">
            <AvailableDateAndVolunteersGroup v-for="date in locationDates" :date="date.date" :location="location"
                :available="date.state != 'unavailable'" :state="date.state" :count="date.count" :min-count="1" :location-event-id="date.locationEventId"/>
            <!-- <AvailableDateAndVolunteersGroup :date="'9 August'" :location="location" :available="true" :state="'confirmed'"
                :count="1" :min-count="1" />
            <AvailableDateAndVolunteersGroup :date="'16 August'" :location="location" :available="true" :state="'available'"
                :count="2" :min-count="1" />
            <AvailableDateAndVolunteersGroup :date="'23 August'" :location="location" :available="false"
                :state="'unavailable'" :count="0" :min-count="1" />
            <AvailableDateAndVolunteersGroup :date="'30 August'" :location="location" :available="true" :state="'available'"
                :count="0" :min-count="1" />
            <AvailableDateAndVolunteersGroup :date="'6 September'" :location="location" :available="false"
                :state="'unavailable'" :count="0" :min-count="1" /> -->
        </div>
    </div>
</template>

<style module>
.availableDateIndicatorParent {
    margin: 0;
    position: absolute;
    /* top: 600px; */
    left: 308px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;
    gap: 46px;
    text-align: left;
    font-size: var(--body-text-size);
    color: var(--color-black);
    font-family: var(--body-text);
}


.dateStartLable {
    position: relative;
    /* top: 10px;
    left: 10px; */
    top: 221px;
    left: calc(13vw - 115px);
    font-size: 12px;
}

.line {
    position: relative;
    z-index: 1;
    display: flex;
    flex-grow: 1;
    top: 240px;
    left: 13vw;
    width: 80vw;
    border-top: 1px solid var(--color-black);
    box-sizing: border-box;
    height: 1px;
}
</style>