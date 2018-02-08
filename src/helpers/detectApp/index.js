const isApp = _ => {
  const isInWebAppiOS = window.navigator.standalone == true
  const isInWebAppChrome = window.matchMedia('(display-mode: standalone)')
    .matches

  if (isInWebAppiOS || isInWebAppChrome) {
    return true
  }

  return false
}

export default isApp
