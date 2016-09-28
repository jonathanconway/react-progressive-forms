import 'whatwg-fetch';

function serializeForm (form) {
  // Collect the form data while iterating over the inputs
  var data = {};
  for (var i = 0, ii = form.length; i < ii; ++i) {
    var input = form[i];
    if (input && input.name) {
      data[input.name] = input.value;
    }
  }
  return data;
}

function submitForm (form) {
  return fetch(form.action, {
    method: form.method.toUpperCase(),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(serializeForm(form)),
    credentials: 'include'
  })
  .then((res) => res.json());
}

function handleSubmitResponse (json) {
  if (json) {
    this.setState(json);

    if (this.state.errors && Object.keys(this.state.errors).length > 0) {
      this.refs.errors.focus();
    }

    if (json.redirectTo) {
      this.context.router.transitionTo(json.redirectTo);
    }
  }
}

export { submitForm, handleSubmitResponse };