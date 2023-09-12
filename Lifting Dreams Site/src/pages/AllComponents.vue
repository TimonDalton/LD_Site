<script lang="ts" setup>
import { defineComponent, defineAsyncComponent, ref } from "vue";
import AvailableDateIndicator from "../components/AvailableDateIndicator.vue";
import BodyText from "../components/BodyText.vue";
import Button from "../components/Button.vue";
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
import AvailableDateAndVolunteersGroup from "../components/AvailableDateAndVolunteersGroup.vue";
import LocationDates from '../components/LocationDates.vue';

// const asyncComp = f defineAsyncComponent({
    // loader
// });
</script>

<template>
    <div>
        <AvailableDateIndicator state="available" date="23 August" />
        <AvailableDateIndicator state="confirmed" date="23 August" />
        <AvailableDateIndicator state="unavailable" date="23 August" />
        <BodyText>Body Text</BodyText>
        <Button state="default" text="Default Button" />
        <Button state="selected" text="Selected Button" />
        <Button state="neutral" text="Neutral Button" />
        <ButtonText text="Button Text" />
        <CancelButton text="Cancel" />
        <CheckBox :checked="false" text="Check Box Text" />
        <CheckBox :checked="true" text="Check Box Text" />
        <DatePlaceDisplayBox locationText="Leghlabile High School" dateText="23 August 2023" />
        <DeleteButton />
        <Dropdown />
        <HeadingText>Heading Text </HeadingText>
        <LableText>Lable Text</LableText>
        <NumberPicker />
        <SubheadingText>Subheading Text</SubheadingText>
        <TextField initialText="This is initial text" />
        <TimePicker time="12:00" text="Time Context" />
        <VolunteerCounterIcon state="abundant" />
        <VolunteerCounterIcon state="managable" />
        <VolunteerCounterIcon state="short" />
        <VolunteerCounterIcon state="empty" />
        <VolunteerCounterIcon state="unavailable" />
        <div class="nextTo">
            <VolunteerCounterGroup :available="false" :count="3" :min-count="2" />
            <VolunteerCounterGroup :available="true" :count="0" :min-count="2" />
            <VolunteerCounterGroup :available="true" :count="2" :min-count="3" />
            <VolunteerCounterGroup :available="true" :count="2" :min-count="1" />
            <VolunteerCounterGroup :available="true" :count="3" :min-count="1" />
        </div>
        <AvailableDateAndVolunteersGroup :available="true" :count="25" :min-count="2" state="available" date="2 August"
            location="Mamelodi" />
        <Suspense>
            <template #default>
                <LocationDates />
            </template>
            <template #fallback>
                Location Dates Fallback
                <!-- <LocationDates /> -->
            </template>

        </Suspense>
    </div>
</template>
<style module>
.nextTo {
    display: flex;
    flex-direction: row;
}
</style>
  