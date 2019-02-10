chrome.runtime.onMessage.addListener(gotMessage);
let result = [];

let LINK = [
    "https://www.amazon.in/OnePlus-Mirror-Black-128GB-Storage/dp/B07DJD1Y3Q/ref=sr_1_305_sspa?ie=UTF8&qid=1549688804&sr=8-305-spons&keywords=mobiles&psc=1",
    "https://www.amazon.in/dp/B07GZ2TD2J/ref=sspa_dk_hqp_detail_aax_0?psc=1",
    "https://www.amazon.in/dp/B07G7WVMXD/ref=sspa_dk_hqp_detail_aax_0?psc=1"
]

function gotMessage(request, sender) {
    result.push(request.price);
    console.log(result);
    if (request.lno1 < 2) {


        request.lno1 = request.lno1 + 1;
        URL = LINK[request.lno1] + "&lno=" + request.lno1;

        chrome.tabs.update(sender.tab.id, {
            url: URL
        });
    }

}