define(function () {
    var setDataInInfoField = function (user, infoField) {
        infoField.avatar.src = user.general.avatar;
        infoField.topic.innerText = user.general.firstName + ' ' + user.general.lastName;
        infoField.countryBlock.innerText = 'country: ' +  user.address.country;
        infoField.cityBlock.innerText = 'city: ' + user.address.city;
        infoField.streetBlock.innerText = 'street: ' + user.address.street;
        infoField.zipCodeBlock.innerText = 'zipCode: ' + user.address.zipCode;
        infoField.emailBlock.innerText = 'email: ' + user.contact.email;
        infoField.phoneBlock.innerText = 'phone: ' + user.contact.phone;
        infoField.jobBlock.innerText = 'job: ' + user.job.title;
        infoField.companyBlock.innerText = 'company: ' + user.job.company
    };
    return {
        setDataInInfoField: setDataInInfoField
    }
})