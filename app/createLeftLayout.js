define(function () {
    function createLeftLayout() {
        var layout = document.createElement('div');
        layout.id = 'leftLayout';
        layout.style.width = '20vw';
        layout.style.float = 'left';
        document.body.appendChild(layout)
    }
    return{
        createLeftLayout:createLeftLayout
    }
})