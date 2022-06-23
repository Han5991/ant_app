const validation = (value, rules, form) => {
  let valid = true;
  for (const rule in rules) {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        break;
      case 'minLength':
        valid = valid && validateMinLength(value, rules[rule]);
        break;
      case 'confirmPassword':
        valid =
          valid && validateConfirmPassword(value, form[rules.confirmPassword].value);
        break;
      default:
        valid = true;
    }
  }
  return valid;
};
const validateRequired = value => {
  return value !== '' ? true : false;
};

const validateEmail = value => {
  const expression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(value).toLocaleLowerCase());
};

const validateMinLength = (value, ruleValue) => {
  return value.length >= ruleValue ? true : false;
};

const validateConfirmPassword = (confirmPassword, password) => {
  return confirmPassword === password ? true : false;
};
export {validation};
