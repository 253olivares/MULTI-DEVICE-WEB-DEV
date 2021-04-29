import * as MODEL from "../model/model.js";

function init() {
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        console.log(contentID);
        if (contentID == "toursContent") {
            MODEL.getPageContent(contentID);
            $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            $(".colorChange")
                .removeClass(`white`)
                .addClass(`black`);
            $(".removeClass")
                .removeClass(`containter`);
            $(".homeHeroinfo")
                .css("display", "none");
            $(".local").click(function (e) {
                let tourID = this.id;
                let contentID = tourID + "Content";
                console.log(contentID);
                MODEL.getPageContent(contentID);
            });
        } else if (contentID == "homeContent") {
            MODEL.getPageContent(contentID);
            $(".blackLogo").css("display", "none");
            $(".whiteLogo").css("display", "block");
            $(".colorChange")
                .removeClass(`white`)
                .addClass(`white`);
            $(".removeClass")
                .addClass(`containter`);
            $(".homeHeroinfo")
                .css("display", "block");
                $("button").click(function (e) {
                    $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            $(".colorChange")
                .removeClass(`white`)
                .addClass(`black`);
            $(".removeClass")
                .removeClass(`containter`);
            $(".homeHeroinfo")
                .css("display", "none");
                    let tourID = this.id;
                    let contentID = tourID + "Content";
                    console.log(contentID);
                    MODEL.getPageContent(contentID);
                });

        } else {
            MODEL.getPageContent(contentID);
            $(".colorChange")
                .removeClass(`white`)
                .addClass(`black`);
            $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            $(".removeClass")
                .removeClass(`containter`);
            $(".homeHeroinfo")
                .css("display", "none");
        }
    });

}

$(document).ready(function () {
    init();
    $(".blackLogo").css("display", "none");
    MODEL.getPageContent("homeContent");
    $("button").click(function (e) {
        $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            $(".colorChange")
                .removeClass(`white`)
                .addClass(`black`);
            $(".removeClass")
                .removeClass(`containter`);
            $(".homeHeroinfo")
                .css("display", "none");
        let tourID = this.id;
        let contentID = tourID + "Content";
        console.log(contentID);
        MODEL.getPageContent(contentID);
    });
});