define(function (require) {
    var usersData = require('./../getData');
    var infoField = require('./../infoFullBlock/createInfoFullBlock');
    var setData = require('./../infoFullBlock/setDataInInfoField');
    usersData = JSON.parse(usersData);
    var declareAction = function (block) {
        block.onclick = action
    }
    function action() {
        var target = document.getElementById('infoFullBlock')
        if(target.style.display = 'none'){
            target.style.display = 'block'
        }
        var field = infoField.infoField;
        var user =  usersData[this.id];
        setData.setDataInInfoField(user, field)
    }

    return {
        declareAction: declareAction
    }
})