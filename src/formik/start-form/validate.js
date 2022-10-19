const mailValidate = (stringValue) => {
  return stringValue.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const validate = (values) => {
  const errors = {};
  if (!values.prjCity) {
    errors.prjCity = 'Укажите город'
  } else if(values.prjCity.length < 1) {
    errors.prjCity = 'Укажите город'
  }

  if (!values.prjPass) {
    errors.prjPass = "Укажите пароль";
  } else if (values.prjPass.length < 5) {
    errors.prjPass = "Используйте не менее 5 символов";
  }

  if (!values.prjPassRepeat) {
    errors.prjPassRepeat = "Укажите пароль";
  } else if (values.prjPassRepeat.length < 5) {
    errors.prjPassRepeat = "Используйте не менее 5 символов";
  } else if (values.prjPassRepeat !== values.prjPass) {
    errors.prjPassRepeat = "Пароли не совпадают";
  }

  if (!values.prjMail) {
    errors.prjMail = "Укажите Е-mail";
  } else if (!mailValidate(values.prjMail)) {
    errors.prjMail = "Неверный E-mail";
  }

  return errors;
};

module.exports = validate;
