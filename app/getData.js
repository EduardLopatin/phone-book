define(function () {
    function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'clients.json', false);
        xhr.send();
        return xhr.responseText
    }
    return getData()
    });