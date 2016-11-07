define(function (require) {
    var getData = require('./getData');
    var usersList = require('./usersList/createUsersList');
    var infoFullBlock = require('./infoFullBlock/createInfoFullBlock');
    require('./search/createSearchField');
    getData = JSON.parse(getData);
    usersList.createUsersList(getData);
    infoFullBlock.createInfoFullBlock(getData);

});
