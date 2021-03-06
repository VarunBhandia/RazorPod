console.log("Internship Task content script running");


// write your keywork here
let KEYWORD = 'mobiles';

// URL that I will change
let BASEURL = "https://www.amazon.in/s/?field-keywords=" + KEYWORD + "&page=";

if (location.href.substring(0, 53) == BASEURL) {
    var E_PRICE = document.getElementsByClassName("a-size-base a-color-price s-price a-text-bold");
    var E_NAME = document.getElementsByClassName("a-size-medium s-inline  s-access-title  a-text-normal");
    var E_LINK = document.getElementsByClassName("a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal");
    
    // traverse the page and will collect information of products
    for (var i = 0, len = E_PRICE.length - 1; i < len; i++) 
    {

        if (E_NAME[i]) 
        {
            let name = E_NAME[i].innerText;
            let price = E_PRICE[i].innerText;
            let link = E_LINK[i].href;

            let data = {
                name: name,
                price: price,
                link: link

            };
            chrome.runtime.sendMessage({ data: data })
        }

    }

    // this will change the URL and will traverse the <MAX_LIMIT> pages 

    // to get the current  page number
    var urlParams = new URLSearchParams(window.location.href);
    let PAGE = parseInt(urlParams.get('page'));

    chrome.runtime.sendMessage({ page: PAGE })

    // define your maximum limit
    let MAX_LIMIT = 20;
    if (PAGE < MAX_LIMIT) 
    {
        PAGE = PAGE + 1;
        BASEURL = "https://www.amazon.in/s/?field-keywords=" + KEYWORD + "&page=" + PAGE;
        window.location.href = BASEURL;
    }

}