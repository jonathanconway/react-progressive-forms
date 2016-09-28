function acceptsJSON(req) {
  return req.headers.accept.indexOf('json') > -1
}

function rerender (req, res, model) {
  req.session.model = Object.assign(req.session.model || {}, model);
  
  if (acceptsJSON(req)) {
    res.json(model);
  } else {
    res.redirect(req.url);
  }
}

function redirect (req, res, to, model) {
  model.redirectTo = to;
  
  req.session.model = Object.assign(req.session.model || {}, model);
  
  if (acceptsJSON(req)) {
    res.json(req.session.model);
  } else {
    res.redirect(to);
  }
}


export { acceptsJSON, rerender, redirect }