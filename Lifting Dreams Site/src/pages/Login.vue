
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import TextField from '../components/TextField.vue';
import HeadingText from '../components/HeadingText.vue';
import LableText from '../components/LableText.vue';
import BodyText from '../components/BodyText.vue';
import DefaultButton from '../components/Button.vue';
import router from "../main";
import {checkLoginDetails} from '../logic/backendCom';

async function onSignInButtonClick() {
  let validLogin = await checkLoginDetails(name,password);
  if(validLogin){
    router.push({ path: 'Dates' });
  }else{
    console.log('Login Details not Recognized');
  }
}
let name = '';
let password = '';
</script>

<template>
  <div :class="$style.login">
    <main>
      <div :class="$style.formParent">
        <div>
          <HeadingText>Login</HeadingText>
        </div>
        <div :class="$style.lableTextParent">
          <div>
            <LableText>Email</LableText>
            <TextField initial-text="" emit-name="nameInput" @nameInput="(t)=>name = t"/>
          </div>
          <div :class="$style.lableText">
            <LableText>Password</LableText>
            <TextField initial-text="" emit-name="pwInput" @pwInput="(t)=>password = t"/>
          </div>
        </div>
        <div>
          <DefaultButton state="default" @click="onSignInButtonClick" text="Sign In" />
          <div :class="$style.bodyTextParent">
            <BodyText>Already have an account?</BodyText>
            <div :class="$style.bodyText2">
              <div :class="$style.bodyTextWrapper">
                <a :class="$style.bodyText3" href="./Signup">Signup</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    <img :class="$style.liftingdreamsLogoOnly4Icon" alt="" src="/liftingdreams-logo-only-4.svg" />
  </div>
</template>
<style module>
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
  font-size: var(--subheading-text-size);
  font-family: var(--body-text);
  color: var(--color-black);
  text-align: left;
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
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6xl);

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
  font-size: var(--body-text-size);
  line-height: 100%;
  font-family: var(--body-text);
  color: var(--color-black);
  text-align: left;
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
  width: 225px;
  height: 38px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
}

.bodyText3 {
  align-self: stretch;
  flex: 1;
  position: relative;
  font-size: var(--body-text-size);
  line-height: 100%;
  font-family: var(--body-text);
  color: var(--color-cornflowerblue-100);
  text-align: left;
}

.bodyText2 {
  width: 78px;
  height: 38px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: -16px;
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
  justify-content: flex-start;
  gap: var(--gap-xs);
}

.frameParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xs) 0px;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-6xl);
}

.formParent {
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

.liftingdreamsLogoOnly4Icon {
  position: absolute;
  top: 4.5vh;
  right: 8vw;
  width: 130px;
  height: 133px;
  overflow: hidden;
}

.login {
  position: relative;
  background-color: var(--color-gray);
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
