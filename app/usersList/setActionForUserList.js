define(function (require) {
    var usersData = require('./../getData');
    var infoField = require('./../infoFullBlock/createInfoFullBlock');
    var setData = require('./../infoFullBlock/setDataInInfoField');
    usersData = JSON.parse(usersData);
    var declareAction = function (block) {
        block.onclick = action
    }
    function action() {
        var field = infoField.infoField;
        var user =  usersData[this.id];
        console.log(user);
        setData.setDataInInfoField(user, field)
    }

    return {
        declareAction: declareAction
    }
})