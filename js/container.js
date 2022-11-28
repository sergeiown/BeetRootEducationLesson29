function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.async = false; //to prevent default asinc value in dynamic script
  script.defer = true;
  document.body.append(script);
}

loadScript("./js/minimum.js");
// loadScript("../js/normal.js");
// loadScript("../js/maximum.js");
