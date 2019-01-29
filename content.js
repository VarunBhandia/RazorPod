console.log("Internship Task content script running");
let BASEURL = "https://www.amazon.in/s/?field-keywords=mobiles&page=";

console.log(location.href.substring(0, 53));
if (location.href.substring(0, 53) == BASEURL) {

  var E_PRICE = document.getElementsByClassName("a-size-base a-color-price s-price a-text-bold");
  var E_NAME = document.getElementsByClassName("a-size-medium s-inline  s-access-title  a-text-normal");

  for (var i = 0, len = E_PRICE.length - 1; i < len; i++) {

    if (E_NAME[i]) {
      let data1 = "NAME = " + E_NAME[i].innerText;
      let data2 = "   PRICE = " + E_PRICE[i].innerText;

      let data = data1 + data2;

      console.log(data);
    }
  }

  // function WriteToFile() {

  //   let fso = CreateObject("Scripting.FileSystemObject");  
  //   let s = fso.CreateTextFile("/home/moss/Desktop/EmailCreater/test.txt", True);
  //   s.writeline("HI");
  //   s.writeline("Bye");
  //   s.writeline("-----------------------------");
  //   s.Close();
  // }

  WriteToFile();

  var urlParams = new URLSearchParams(window.location.href);
  let PAGE = parseInt(urlParams.get('page'));
  if (PAGE < 20) {
    PAGE = PAGE + 1;
    console.log("PAGE = " + PAGE);
    BASEURL = "https://www.amazon.in/s/?field-keywords=mobiles&page=" + PAGE;
    console.log(BASEURL);
    window.location.href = BASEURL;
  }

}