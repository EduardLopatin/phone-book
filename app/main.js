define(function (require) {
    var getData = require('./getData');
    var leftLayout = require('./createLeftLayout');
    var usersList = require('./usersList/createUsersList');
    var infoFullBlock = require('./infoFullBlock/createInfoFullBlock');
    var search = require('./search/createSearchField');
    getData = JSON.parse(getData);
    leftLayout.createLeftLayout();
    search.createInput();
    usersList.createUsersList(getData);
    infoFullBlock.createInfoFullBlock(getData);

});
