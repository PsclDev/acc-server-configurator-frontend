<template>
  <base-card maxWidth="25">
    <div class="container">
      <form @submit.prevent="submitForm">
        <base-form-input
          @inputValueChanged="validateUsername"
          class="mb-3"
          icon="user"
          title="Username"
          :valid="validityUsername"
          errorMessage="Invalid Username - must contain at least 2 chars"
          inputType="text"
        />
        <base-form-input
          @inputValueChanged="validatePassword"
          class="mb-3"
          icon="key"
          title="Password"
          :valid="validityPassword"
          errorMessage="Invalid Password - Min Length 8 | Uppercase | Lowercase | Number | Special Char"
          inputType="password"
        />
        <base-form-input
          @inputValueChanged="validateInvitecode"
          :class="mode === 'signup' ? '' : 'hide'"
          class="mb-5"
          icon="user-tag"
          title="Invite Code"
          :valid="validityInviteCode"
          errorMessage="Invalid Invite Code - must containt at least 1 char"
          inputType="text"
        />

        <button
          :disabled="validityForm"
          class="button is-primary mr-3"
          :class="isLoading ? 'is-loading' : ''"
        >
          {{ mode === 'login' ? 'Login' : 'Signup' }}
        </button>
        <button class="button is-ghost ml-3" type="button" @click="switchMode">
          {{ mode !== 'login' ? 'Login instead' : 'Signup instead' }}
        </button>
        <p v-if="errorOccured" class="has-text-danger">
          {{ errorForm }}
        </p>
      </form>
    </div>
  </base-card>
</template>

<script>
import BaseFormInput from '../UI/BaseFormInput';

export default {
  components: {
    BaseFormInput
  },
  data() {
    return {
      mode: 'login',
      isLoading: false,
      username: '',
      validityUsername: 'pending',
      password: '',
      validityPassword: 'pending',
      invitecode: '',
      validityInviteCode: 'pending',
      validForm: 'pending',
      errorOccured: false,
      errorForm: ''
    };
  },
  methods: {
    switchMode() {
      if (this.mode === 'login') this.mode = 'signup';
      else this.mode = 'login';

      this.validateForm();
    },
    validateUsername(value) {
      if (String(value).length >= 2) {
        this.validityUsername = 'valid';
        this.username = value;
      } else this.validityUsername = 'invalid';

      this.validateForm();
    },
    validatePassword(value) {
      if (
        this.mode === 'login' ||
        (/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
          value
        ) &&
          value.length > 7)
      ) {
        this.validityPassword = 'valid';
        this.password = value;
      } else this.validityPassword = 'invalid';

      this.validateForm();
    },
    validateInvitecode(value) {
      if (value.length >= 1) {
        this.validityInviteCode = 'valid';
        this.invitecode = value;
      } else {
        this.validityInviteCode = 'invalid';
      }

      this.validateForm();
    },
    validateForm() {
      if (
        (this.mode === 'signup' &&
          this.validityUsername === 'valid' &&
          this.validityPassword === 'valid' &&
          this.validityInviteCode === 'valid') ||
        (this.mode === 'login' &&
          this.validityUsername === 'valid' &&
          this.validityPassword === 'valid')
      )
        this.validForm = 'valid';
      else this.validForm = 'invalid';
    },
    async submitForm() {
      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('auth/signin', {
            username: this.username,
            password: this.password
          });
        } else {
          await this.$store.dispatch('auth/signup', {
            username: this.username,
            password: this.password,
            invitecode: this.invitecode
          });
        }
      } catch (error) {
        this.errorOccured = true;
        this.errorForm = String(error.message);
      }

      this.isLoading = false;
    }
  },
  computed: {
    validityForm() {
      return this.validForm !== 'valid';
    }
  }
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>