console.log("Email Creator content script running");
const BASEURL = "https://parser.zapier.com/mailboxes/";

console.log(location.href.substring(0,35));

if (location.href.substring(45,49) === "wait" )
{
  document.getElementsByTagName("a")[6].click();
  }

if (location.href === BASEURL )
{
  document.getElementsByClassName("retreat-button retreat-button-primary")[0].click();
}

if (location.href.substring(0,36) === BASEURL &&  location.href.substring(36,39) != '' && location.href.substring(45,49) != "wait" )
{
  console.log("Running");

  document.getElementsByClassName("retreat-button retreat-button-primary")[0].click();
}