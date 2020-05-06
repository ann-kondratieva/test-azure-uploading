export const email = (value) =>
  value &&
  (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    value,
  ) ||
    value.includes('@-'))
    ? 'Неверный формат'
    : undefined;

export const required = (value) =>
  value === 0 || (value && /\w+/.test(value)) ? undefined : 'Обязательное поле';

/* eslint-disable no-control-regex */
export const checkNonLatin = (value) =>
  /^[\u0000-\u007F]*$/.test(value) ? undefined : 'Вы используете нелатинские символы';
/* eslint-enable no-control-regex */

export const password = (value) => {
  let regex = {
    lowerCase: /^(?=.*[a-z]).+$/g,
    upperCase: /^(?=.*[A-Z]).+$/g,
    number: /^(?=.*[0-9]).+$/g,
    specialSymbols: /['#$%^&*:;{}_ ]{1}/g,
  };
  if (value && value.length < 8) {
    return 'Безопасный пароль должен содержать не менее 8 символов';
  }
  if (value && !regex.lowerCase.test(value)) {
    return 'Безопасный пароль должен хотя бы одну маленькую букву';
  }
  if (value && !regex.upperCase.test(value)) {
    return 'Безопасный пароль должен хотя бы одну большую букву';
  }
  if (value && !regex.number.test(value)) {
    return 'Безопасный пароль должен хотя бы одно число';
  }
  if (value && regex.specialSymbols.test(value)) {
    return 'Безопасный пароль должен хотя бы один специальный символ';
  }
  return undefined;
};
