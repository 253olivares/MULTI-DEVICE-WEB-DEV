import * as MODEL from "../model/model.js"


function init() {
    let currentHeroImage = "home";
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID = "content";
        $(".hero")
            .removeClass(`${currentHeroImage}-hero-image`)
            .addClass(``);
        currentHeroImage = btnId;
        $(".hero-content .page-name").html(btnId);


        MODEL.getPageContent(contentID);
    });
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
});