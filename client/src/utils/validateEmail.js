const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {

  const invalidArray = emails.split(',').map(email => email.trim()).filter(email => !validRegex.test(email));

  if (invalidArray.length) {
    return `These emails appear to be invalid: ${invalidArray}`;
  }

  return;
}