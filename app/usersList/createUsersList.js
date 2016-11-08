define(function (require) {
    var setListStyle = require('./setStyleForList');
    var setDataInList = require('./setDataInList');
    var usersData = require('./../getData');
    usersData = JSON.parse(usersData);
    var setActionForUserList = require('./setActionForUserList');
    function createUserListField() {
        var userListField = document.createElement('div');
        userListField.style.width = '20vw';
        userListField.id = 'userList';
        var leftLayout = document.getElementById('leftLayout');
        leftLayout.appendChild(userListField);
    }
    function createListItem(user, target) {
        var newUser = createDomElementsForUser();
        appendItemElements(newUser, target);
        setStyleForItem(newUser);
        setDataInList.setDataInItem(newUser, user);
        return newUser;
    }
    function createDomElementsForUser() {
        return {
            block: document.createElement('div'),
            avatar: document.createElement('img'),
            infoField: document.createElement('div'),
            nameField: document.createElement('div'),
            jobField: document.createElement('div')
        }
    }
    function appendItemElements(user, target) {
        user.block.appendChild(user.avatar);
        user.block.appendChild(user.infoField);
        user.infoField.appendChild(user.nameField);
        user.infoField.appendChild(user.jobField);
        target.appendChild(user.block);
    }
    function setStyleForItem(user) {
        setListStyle.setStyleForBlock(user);
        setListStyle.setStyleForAvatar(user);
        setListStyle.setStyleForInfoField(user);
    }
    function setId(newUser, usersData, user) {
        newUser.block.id = usersData.indexOf(user)
    }
    var createUsersList = function (usersData) {
        createUserListField();
        var target = document.getElementById('userList');
        usersData.forEach(function (user) {
            var newUser =  createListItem(user, target);
            setId(newUser, usersData, user);
            setActionForUserList.declareAction(newUser.block)
        })
    };
    return {
        createUsersList: createUsersList
    }
})