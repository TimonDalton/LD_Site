<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import TextField from '../components/TextField.vue';
import HeadingText from '../components/HeadingText.vue';
import LableText from '../components/LableText.vue';
import BodyText from '../components/BodyText.vue';
import DefaultButton from '../components/Button.vue';
import router from "../main";
import {postUserSignup} from '../logic/backendCom';

let name = "";
let email = "";
let phoneNumber = "";
let profession = "";
let password = "";
let passwordConfirm = "";

async function onSignupButtonClick() {
  if(password!= passwordConfirm){
    console.log(`passwords don't match`);
    return;
  }
  const signupStatus = await postUserSignup(name,password);
  if(signupStatus == 200){
    router.push({ path: 'Dates' });
  }else{
    console.log('error in sign up');
  }
}
</script>

<template>
  <div :class="$style.signup">
    <main :class="$style.frameParent">
      <HeadingText>Signup</HeadingText>
      <div :class="$style.frameChild" />
      <div :class="$style.frameGroup">
        <div :class="$style.frameContainer">
          <div :class="$style.lableTextParent">
            <LableText>Name</LableText>
            <TextField emit-name="nameInput" @nameInput="(t)=>name = t" initial-text=""/>
          </div>
          <div :class="$style.lableTextParent">
            <LableText>Email</LableText>
            <TextField emit-name="emailInput" @emailInput="(t)=>email = t" initial-text=""/>
          </div>
          <div :class="$style.lableText">
            <!-- <div :class="$style.lableText">
              <b :class="$style.lableText1">Phone Number</b>
            </div> -->
            <LableText>Phone Number</LableText>
            <TextField emit-name="pnInput" @pnInput="(t)=>email = t" initial-text=""/>
          </div>
        </div>
        <div :class="$style.frameContainer">
          <div :class="$style.lableTextParent1">
            <!-- <div :class="$style.lableText">
              <b :class="$style.lableText1">Profession (Optional)</b>
            </div> -->
            <LableText>Profession (Optional)</LableText>
            <TextField emit-name="profInput" @profInput="(t)=>email = t" initial-text=""/>
          </div>
          <div :class="$style.lableText">
            <!-- <div :class="$style.lableText">
              <b :class="$style.lableText1">Password</b>
            </div> -->
            <LableText>Password</LableText>
            <TextField emit-name="pwInput" @pwInput="(t)=>email = t" initial-text=""/>
          </div>
          <div :class="$style.lableTextParent3">
            <!-- <div :class="$style.lableText">
              <b :class="$style.lableText1">Confirm Password</b>
            </div> -->
            <LableText>Confirm Password</LableText>
            <TextField emit-name="pwConfirmInput" @pwConfirmInput="(t)=>email = t" initial-text=""/>
          </div>
        </div>
      </div>
      <div :class="$style.buttonParent">
        <DefaultButton text="Sign Up" state="default" @click="onSignupButtonClick" />

        <!-- <button :class="$style.button">
          <div :class="$style.button1">Sign Up</div>
        </button> -->
        <div :class="$style.bodyTextParent">
          <BodyText>Already have an account?</BodyText>
          <div :class="$style.bodyText2">
            <div :class="$style.bodyTextWrapper">
              <a :class="$style.bodyText1" href="./Login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <img :class="$style.liftingdreamsLogoOnly3Icon" alt="" src="/liftingdreams-logo-only-3.svg" />
  </div>
</template>
<style module>
.frameChild {

  position: absolute;
  top: 116px;
  left: 0px;
  width: 1440px;
  height: 908px;
  display: flex;
  flex-direction: column;
  padding: 92px var(--padding-284xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 91px;
  text-align: left;
  font-size: var(--heading-text-size);
  color: var(--color-black);
  font-family: var(--body-text);
}

.headingText1 {
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
}

.headingTextWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-8xs) 0px;
  align-items: flex-start;
  justify-content: flex-start;
}

.headingText {
  align-self: stretch;
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.lableText1 {
  position: relative;
}

.lableText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.textField {
  border: none;
  background-color: var(--color-silver);
  border-radius: var(--br-7xs);
  width: 225px;
  display: flex;
  flex-direction: row;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
}

.lableTextParent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xs);
}

.frameContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
}

.lableTextParent1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
}

.lableTextParent3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}

.frameGroup {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) 0px;
  /* align-items: flex-start; */
  justify-content: center;
  gap: 153px;
  font-size: var(--subheading-text-size);
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
  height: 46px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
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

.bodyText {}

.bodyText2 {
  /* width: 65px;
  height: 38px; */
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -16px;
  color: var(--color-cornflowerblue-100);
}

.bodyTextParent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.buttonParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-11xl) 0px;
  align-items: center;
  gap: var(--gap-xs);
  font-size: var(--body-text-size);
}

.frameParent {
  position: absolute;
  top: 20vh;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-284xl);
  box-sizing: border-box;
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  gap: 5vh;
  text-align: left;
  font-size: var(--heading-text-size);
  color: var(--color-black);
  font-family: var(--body-text);
}

.liftingdreamsLogoOnly3Icon {
  position: absolute;
  top: 4.5vh;
  right: 8vw;
  width: 130px;
  height: 133px;
  overflow: hidden;
}

.signup {
  position: relative;
  background-color: var(--color-gray);
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
