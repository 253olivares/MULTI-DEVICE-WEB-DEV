var MODEL = (function () {
    var homeContent = " ";
    var aboutContent = " ";

    var _getPageContent = function (pageId) {
        _addNames(pageId, "Todd");
        $("#app").html(eval(pageId));
    }
    var _showName = function (userName) {
        console.log(userName);
    }
    var _addNames = function (firstName, secondName) {
        console.log(firstName + " " + secondName);
    }


    return {
        getPageContent: _getPageContent,
        showName: _showName,
    }
})();