<template>
    <div class="welcome container">
        <p>Welcome</p>
        <SignUpForm v-if="showSignup" />
        <LoginForm v-else />
        <p v-if="!showSignup">
            Don't have an account?
            <span @click="showSignup = !showSignup">Sign Up</span>
        </p>
        <p v-else>
            Already have an account?
            <span @click="showSignup = !showSignup">Sign In</span>
        </p>
    </div>
</template>

<script>
import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { ref } from "vue";
export default {
    components: { SignUpForm, LoginForm },
    setup() {
        const showSignup = ref(false);
        return { showSignup };
    },
};
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px 0;
}
</style>