<template>
  <form class="relative w-[33.375rem]">
    <div class="mb-3.5">
      <span class="text-brand-gray-1 font-base font-medium leading-4">{{
        $t('Name and Surname')
      }}</span>

      <c-input
        :value="fullName"
        :placeholder="$t('Full name')"
        @input="validateName" />

      <div
        v-if="errors.name"
        class="absolute text-xs text-rose-500 pl-3">
        {{ errors.name }}
      </div>
    </div>

    <div class="mb-3.5">
      <span class="text-brand-gray-1 font-base font-medium leading-4"
        >{{ $t('City / street / apartment number') }}
      </span>

      <c-input
        :value="fullAddress"
        :placeholder="$t('Address')"
        @input="validateAddress" />

      <div
        v-if="errors.address"
        class="absolute text-xs text-rose-500 pl-3">
        {{ errors.address }}
      </div>
    </div>

    <div class="flex mb-3.5">
      <div>
        <span class="text-brand-gray-1 font-base font-medium leading-4">{{
          $t('ZIP code')
        }}</span>

        <c-input
          :value="zipCode"
          :placeholder="$t('ZIP code')"
          @input="validateZipCode" />

        <div
          v-if="errors.zip"
          class="absolute text-xs text-rose-500 pl-3">
          {{ errors.zip }}
        </div>
      </div>

      <div>
        <div class="space-x-8">
          <span
            class="text-brand-gray-1 font-base font-medium leading-4 pl-8"
            >{{ $t('Shipping') }}</span
          >

          <c-select :select-items="selectItems" />
        </div>
      </div>
    </div>

    <div class="mb-3.5">
      <span class="text-brand-gray-1 font-base font-medium leading-4">{{
        $t('Email address')
      }}</span>

      <c-input
        :value="emailAddress"
        :placeholder="$t('Enter your email address')"
        @input="validateEmail" />

      <div
        v-if="errors.email"
        class="absolute text-xs text-rose-500 pl-3">
        {{ errors.email }}
      </div>
    </div>
  </form>
</template>

<script>
import { computed, provide, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import cInput from '@/components/Input.component.vue';
import cSelect from '@/components/Select.component.vue';
import useFormValidation from '@/views/shippingInformation/hook/useFormValidation';

export default defineComponent({
  name: 'cForm',
  components: { cInput, cSelect },

  setup() {
    const store = useStore();

    const inputFullName = (payload) => {
      store.commit('SET_INPUT_FULL_NAME', payload.target.value);
    };

    const inputAddress = (payload) => {
      store.commit('SET_INPUT_ADDRESS', payload.target.value);
    };

    const inputZipCode = (payload) => {
      store.commit('SET_INPUT_ZIP_CODE', payload.target.value);
    };

    const inputEmail = (payload) => {
      store.commit('SET_INPUT_EMAIL', payload.target.value);
    };

    const currentPage = computed(() => store.getters.getPathNumber);

    const selectItems = computed(() => store.state.selectItems);
    provide('number', currentPage.value[0]);

    const {
      validateNameField,
      validateAddressField,
      validateZipCodeField,
      validateEmailField,
      errors,
    } = useFormValidation();

    const fullName = ref('');

    const validateName = (e) => {
      fullName.value = e.target.value;
      validateNameField('name', fullName.value);
    };

    const fullAddress = ref('');

    const validateAddress = (e) => {
      fullAddress.value = e.target.value;
      validateAddressField('address', fullAddress.value);
    };

    const zipCode = ref('');

    const validateZipCode = (e) => {
      zipCode.value = e.target.value;
      validateZipCodeField('zip', zipCode.value);
    };

    const emailAddress = ref('');

    const validateEmail = (e) => {
      emailAddress.value = e.target.value;
      validateEmailField('email', emailAddress.value);
    };

    return {
      inputFullName,
      inputAddress,
      inputZipCode,
      inputEmail,
      validateName,
      validateAddress,
      validateZipCode,
      validateEmail,
      fullName,
      fullAddress,
      zipCode,
      emailAddress,
      errors,
      selectItems,
    };
  },
});
</script>
