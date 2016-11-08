define(function () {
    var setStyleForBlock = function (user) {
        var element = user.block.style;
        element.height = '50px';
        element.marginBottom = '5px';
        element.backgroundColor = 'lightcyan'
    }
    var setStyleForAvatar = function (user) {
        var element = user.avatar.style;
        element.width = '50px';
        element.height = '50px';
        element.float = 'left';
    }
    var setStyleForInfoField = function (user) {
        var element = user.infoField.style;
        element.textAlign = 'left';
        element.padding = '6px';
        setStyleForNameField(user);
        setStyleForJobField(user)
    }
    function setStyleForNameField(user) {
        var element = user.nameField.style;
        element.textAlign = 'right'
        element.color = 'darkgreen'
    }
    function setStyleForJobField(user) {
        var element = user.jobField.style;
        element.textAlign = 'right'
        element.fontSize = '12px'
    }
    return {
        setStyleForBlock: setStyleForBlock,
        setStyleForAvatar: setStyleForAvatar,
        setStyleForInfoField: setStyleForInfoField

    }
})
