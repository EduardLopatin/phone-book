define(function () {
    var setDataInItem = function (newUser, userData){
        newUser.avatar.setAttribute('src', userData.general.avatar)
        newUser.nameField.innerText = userData.general.firstName + ' ' + userData.general.lastName
        newUser.jobField.innerText = userData.job.title
    }
 return {
     setDataInItem: setDataInItem
 }
})