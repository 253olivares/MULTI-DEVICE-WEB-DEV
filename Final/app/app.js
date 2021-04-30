import * as MODEL from "../model/model.js";
function init() {
    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        if (contentID == "homeContent") {
            MODEL.getPageContent(contentID);
            $(".blackLogo").css("display", "none");
            $(".whiteLogo").css("display", "block");
            $(".colorChange")
                .removeClass(`black`)
                .addClass(`white`);
            $(".navContainer")
                .addClass(`heroImage`);
            $(".homeInfo")
                .css("display", "block");
        } else if(contentID == "galleryContent"){
            MODEL.getPageContent(contentID);
            $(".colorChange")
            .removeClass(`white`)
            .addClass(`black`);
            $(".navContainer")
                .removeClass(`heroImage`);
            $(".homeInfo")
                .css("display", "none");
                $(".blackLogo").css("display", "none");
            $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            $(".click").click(function(e){
                let btnID = this.id;
                let contentID = btnID + "Content";
                MODEL.getPageContent(contentID);
            });
        } else if (contentID == "blogContent") {
            MODEL.getPageContent(contentID);
            $(".colorChange")
            .removeClass(`white`)
            .addClass(`black`);
            $(".navContainer")
                .removeClass(`heroImage`);
            $(".homeInfo")
                .css("display", "none");
                $(".blackLogo").css("display", "none");
            $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            $(".post").click(function(e){
                let btnID = this.id;
                let contentID = btnID + "Content";
                MODEL.getPageContent(contentID);
            });
        }else {
            MODEL.getPageContent(contentID);
            $(".colorChange")
            .removeClass(`white`)
            .addClass(`black`);
            $(".navContainer")
                .removeClass(`heroImage`);
            $(".homeInfo")
                .css("display", "none");
                $(".blackLogo").css("display", "none");
            $(".whiteLogo").css("display", "none");
            $(".blackLogo").css("display", "block");
            
        }
    });

};
function socialMedia(){
    $(".media").click(function (e){
        let btnID = this.id;    
        console.log(btnID);
        if(btnID == "facebook"){
            window.open("https://www.facebook.com");
        }else if (btnID =="instagram"){
            window.open("https://www.instagram.com");
        }else if (btnID == "twitter"){
            window.open("https://www.twitter.com");
        }
    });
}
function logoClick(){
    $(".logo").click(function (e){
        let btnID = this.id;    
        let contentID = btnID + "Content";
        MODEL.getPageContent(contentID);
        $(".blackLogo").css("display", "none");
            $(".whiteLogo").css("display", "block");
            $(".colorChange")
                .removeClass(`black`)
                .addClass(`white`);
            $(".navContainer")
                .addClass(`heroImage`);
            $(".homeInfo")
                .css("display", "block");
    });
}

$(document).ready(function () {
    init();
    socialMedia();
    logoClick();
    MODEL.getPageContent("homeContent");
});