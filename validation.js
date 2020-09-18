const CheckPassword = (password) => {
  const regex1 = /[0-9]{1,}/;
  const regex2 = /[a-zA-Z]{1,}/;
  let errorMsg = true;
  if (password === '') {
    errorMsg = false;
  } else if (
    !regex1.test(password) ||
    !regex2.test(password) ||
    password.length < 8
  ) {
    errorMsg = false;
  }
  return errorMsg;
};
const CheckEmail = (email) => {
  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  email = email.trim();
  console.log('This email', email);
  let errorMsg = true;
  if (email == '') {
    errorMsg = false;
  } else if (!regex.test(email)) {
    console.log('email');
    errorMsg = false;
  }

  return errorMsg;
};

module.exports = {
  CheckEmail,
  CheckPassword,
};
