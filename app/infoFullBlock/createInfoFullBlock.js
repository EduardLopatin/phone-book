define(function (require) {
    var usersData = require('./../getData');
    usersData = JSON.parse(usersData);
    var items = createFieldItems();
    var createInfoFullBlock = function () {
        createInfoFullFieldLayout();
        var target = document.getElementById('infoFullBlock');
        appendBlockElements(items, target);
    };
    function appendBlockElements(items, target) {
        items.block.appendChild(items.topic)
        items.block.appendChild(items.avatarBlock)
        items.avatarBlock.appendChild(items.avatar)
        items.block.appendChild(items.cityBlock)
        items.block.appendChild(items.countryBlock)
        items.block.appendChild(items.streetBlock)
        items.block.appendChild(items.zipCodeBlock)
        items.block.appendChild(items.emailBlock)
        items.block.appendChild(items.phoneBlock)
        items.block.appendChild(items.jobBlock)
        items.block.appendChild(items.companyBlock)
        target.appendChild(items.block);
    }
    function createInfoFullFieldLayout() {
        var field = document.createElement('div');
        field.style.float = 'left';
        field.style.padding = '10px';
        field.style.marginLeft = '10px';
        field.id = 'infoFullBlock';
        field.style.width = '30vw';
        field.style.backgroundColor = 'darkcyan';
        field.style.display = 'none';
        document.body.appendChild(field);
    }
    function createFieldItems() {
        return {
            block: document.createElement('div'),
            topic: document.createElement('h3'),
            avatarBlock: document.createElement('div'),
            avatar: document.createElement('img'),
            cityBlock: document.createElement('div'),
            countryBlock: document.createElement('div'),
            streetBlock: document.createElement('div'),
            zipCodeBlock: document.createElement('div'),
            emailBlock: document.createElement('div'),
            phoneBlock: document.createElement('div'),
            companyBlock: document.createElement('div'),
            jobBlock: document.createElement('div')
        }
    }
    return {
        createInfoFullBlock: createInfoFullBlock,
        infoField: items
    }
});