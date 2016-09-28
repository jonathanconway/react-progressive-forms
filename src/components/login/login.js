/**
* Is the email address well-formed?
*/
function checkEmailAddressValid(emailAddress) {
  return emailAddress.indexOf('@') > 0;
}

export { checkEmailAddressValid }