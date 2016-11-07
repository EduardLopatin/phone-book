define(function (require) {
    var data = require('./../getData');
    data = JSON.parse(data);
    function createInput() {
        var input = document.createElement('input');
        input.setAttribute('type','text');
       return input
    }
    var input = createInput();
    document.body.appendChild(input);
    setEvent(input);
    function checkData(data, input) {
        data.forEach(function (user) {
           var info = user.general.firstName
            info.toLowerCase();
            input.toLowerCase();
            if(input == info[0]){

            }
        })
    }
    function setEvent(input) {
            input.addEventListener('keyup',function (e) {
                checkData(data, e.key);
            })
    }
})