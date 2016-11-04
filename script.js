(function () {
    function PhoneBook() {
        var usersData =  getData();
        usersData = JSON.parse(usersData);
        console.log(usersData);
        createUserListField();
        createUsers(usersData);

        function createUsers(usersData) {
            var target = document.getElementById('userList');
            usersData.forEach(function (user) {
                createListItem(user, target)
            })
        }
        function createListItem(user, target) {
            var newUser = {};
            createDomElementsForUser(newUser);
            setStyleForItem(newUser);
            putDomElementsOnPlaces(newUser, target);
            setDataInItem(newUser , user);
        }
        function setDataInItem(newUser, userData){
            newUser.avatar.setAttribute('src', userData.general.avatar)
            newUser.infoField.innerHTML = userData.general.firstName + ' '
            + userData.general.lastName + '<br><br>'
                + userData.job.title
        }
        function setStyleForItem(user) {
            setStyleForAvatar(user);
            setStyleForInfoField(user);
            setStyleForBlock(user);
        }
        function setStyleForBlock(user) {
            var element = user.block.style;
            element.height = '70px';
            element.marginBottom = '5px';
            element.backgroundColor = 'lightcyan'
        }
        function setStyleForAvatar(user) {
            var element = user.avatar.style;
            element.width = '70px';
            element.height = '70px';
            element.float = 'left'
        }
        function setStyleForInfoField(user) {
            var element = user.infoField.style;
            element.textAlign = 'right';
            element.padding = '6px'
        }

        function putDomElementsOnPlaces(user, target) {
            user.block.appendChild(user.avatar);
            user.block.appendChild(user.infoField);
            target.appendChild(user.block);
        }
        function createDomElementsForUser(user) {
            user.block = document.createElement('div');
            user.avatar = document.createElement('img');
            user.infoField = document.createElement('div');
        }

        function createUserListField() {
            var userListField = document.createElement('div');
            userListField.style.width = '17vw';
            userListField.id = 'userList';
            document.body.appendChild(userListField);
        }

        function getData() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'clients.json', false);
            xhr.send();
            return xhr.responseText
        }
    }
    var book = new PhoneBook();
})();
