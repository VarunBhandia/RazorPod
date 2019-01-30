console.log("Internship Task background script running");

//to recieve the object
chrome.runtime.onMessage.addListener(gotMessage);

let result = [];
let page = 1;
function gotMessage(request, sender){

    //push the current data to array
    result.push(request.data);
    page = request.page;

    //pass page and result to function
    consoleResult(result,page);

}

//This will print the result afer the traverse is complete
function consoleResult(result, page){

    if (page == 20)
    {
        console.log(" Result", result);
    }

}


