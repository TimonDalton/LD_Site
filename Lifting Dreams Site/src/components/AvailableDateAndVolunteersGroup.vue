<script lang="ts" setup>
import { computed, defineComponent, ref } from "vue";
import VolunteerCounterGroup from "../components/VolunteerCounterGroup.vue";
import AvailableDateIndicator from "../components/AvailableDateIndicator.vue";
const props = defineProps({
    available:{type:Boolean,default:true},
    state:{type:String,default:'available'},
    count: {type:Number,default:0},
    minCount: {type:Number,default:2},
    date: {type:String,default:'dd/mm'},
    location: {type:String,default:'Mamelodi'},
});
</script>
<template>
    <div :class="$style.container">
        <VolunteerCounterGroup :available="available" :count="count" :min-count="minCount"
        />
        <div :class="$style.spacer"></div>
        <AvailableDateIndicator :state="state" :date="date" :location="location" :class="$style.volunteerIndicatorGroup"/>
    </div>
</template>
<style module>

.container {
    /* background:yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 150px;
}
.spacer{
    height: 20px;
}
.volunteerIndicatorGroup{

}

</style>
  