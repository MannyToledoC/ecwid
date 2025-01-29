// Get ecwid app api thing
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://djqizrxa6f10j.cloudfront.net/ecwid-sdk/js/1.3.0/ecwid-app.js";
document.head.appendChild(s);

EcwidApp.init({
  app_id: "custom-app-100229268-1", // Replace with your actual app ID
  autoloadedflag: true,
  autoheight: true
});

let storeData = EcwidApp.getPayLoad();
console.log(storeData);
