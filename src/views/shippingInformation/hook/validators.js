export default function useValidators() {
  const isEmpty = (fieldName, fieldValue) =>
    !fieldValue ? `The ${fieldName} field is required` : '';

  const minLength = (fieldName, fieldValue, min) =>
    fieldValue.length < min
      ? `The ${fieldName} field must be at least ${min} characters long`
      : '';

  const isAddress = (fieldName, fieldValue, min) =>
    fieldValue.length < min
      ? `The ${fieldName} field must be at least ${min} characters long`
      : '';

  const isEmail = (fieldName, fieldValue) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !re.test(fieldValue)
      ? `This is not a valid ${fieldName} address`
      : '';
  };

  const isZipCode = (fieldName, fieldValue, min) => {
    const re = /(^\d{5}(?:s?[-\s]s?\d{4})?$)/;

    const checkZipLength = () =>
      fieldValue.length < min
        ? `The ${fieldName} code must be at least ${min} characters long`
        : '';

    checkZipLength();

    return !re.test(fieldValue) ? `This is not a valid ${fieldName} code` : '';
  };

  return { isEmpty, minLength, isEmail, isAddress, isZipCode };
}
