define(function (require) {
    var data = require('./../getData');
    data = JSON.parse(data);
    var usersList = require('./../usersList/createUsersList');

    function createInput() {
        var input = document.createElement('input');
        var leftLayout = document.getElementById('leftLayout')
        input.setAttribute('type','text');
        setStyleForInput(input);
        leftLayout.appendChild(input);
        setEvent(input);
    }

    function setStyleForInput(input) {
        input.style.width = '20vw';
        input.style.marginBottom = '10px';
        input.placeholder = 'search';
        // input.style.float = 'left'
    }
    function checkData(data, input) {
        input = input.toLowerCase();
        var searchResult = [];
        data.forEach(function (user) {
            var name = user.general.firstName + user.general.lastName;
            name = name.toLowerCase();
            if(name.includes(input) && input.length > 0){
                searchResult.push(user)
            }
        });
        clearUserList();
        if(input.length == 0){
            usersList.createUsersList(data);
        }else {
            usersList.createUsersList(searchResult);
        }

    }
    function clearUserList() {
        var target = document.getElementById('userList')
        target.innerHTML = ''
    }
    function setEvent(input) {
        input.addEventListener('keyup',function (event) {
            var key = event.keyCode;
            if((key >= 65 && key <= 90) || key == 8){
                checkData(data, event.target.value);
            }
        })
    }
    return{
        createInput:createInput
    }
})