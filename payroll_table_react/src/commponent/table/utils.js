const requiredRule = {
  isValid: value => value?.trim().length > 0,
  errorText: 'This field is required',
};
  
const validationRules = {
  number: {
    isValid: number => number.match(/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/, ''),
    errorText: 'Your Number must have only number!',
  } || requiredRule,
  price: {
    isValid: price => price.match(/^(0|[1-9]\d*)(\.[0-9]{1,2})?$/),
    errorText: 'Your Price must have only number!',
  } || requiredRule,
  product: requiredRule,
};

export function validate(changed, validationStatus) {
  return Object.keys(changed).reduce((status, id) => {
    let rowStatus = validationStatus[id] || {};
    if (changed[id]) {
      rowStatus = {
        ...rowStatus,
        ...Object.keys(changed[id]).reduce((acc, field) => {
          const isValid = validationRules[field].isValid(changed[id][field]);
          return {
            ...acc,
            [field]: {
              isValid,
              error: !isValid && validationRules[field].errorText,
            },
          };
        }, {}),
      };
    }

    return { ...status, [id]: rowStatus };
  }, {});
};