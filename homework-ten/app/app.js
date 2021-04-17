import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        console.log(contentID);
        if (contentID == "toursContent") {
            MODEL.getPageContent(contentID);
            $(".local").click(function (e) {
                let tourID = this.id;
                let contentID = tourID + "Content";
                console.log(contentID);
                MODEL.getPageContent(contentID);
            });
        } else if (contentID == "homeContent") {
            MODEL.getPageContent(contentID);
        } else {
            MODEL.getPageContent(contentID);
        }
    });
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
});