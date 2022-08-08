import { reactive } from 'vue';
import useValidators from '@/views/shippingInformation/hook/validators';

const errors = reactive({});

export default function useFormValidation() {
  const { isEmpty, isName, minLength, isZipCode, isEmail } = useValidators();

  const removeValidationMessage = (fieldNameProps) => {
    setTimeout(() => {
      errors[fieldNameProps] = '';
    }, 7000);
  };

  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 2);

    removeValidationMessage(fieldName);
  };

  const validateNameCharacters = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isName(fieldName, fieldValue);

    removeValidationMessage(fieldName);
  };

  const validateAddressField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 4);

    removeValidationMessage(fieldName);
  };

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);

    removeValidationMessage(fieldName);
  };

  const validateZipCodeField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isZipCode(fieldName, fieldValue, 4);

    removeValidationMessage(fieldName);
  };

  return {
    errors,
    validateNameField,
    validateAddressField,
    validateEmailField,
    validateZipCodeField,
    validateNameCharacters,
  };
}
