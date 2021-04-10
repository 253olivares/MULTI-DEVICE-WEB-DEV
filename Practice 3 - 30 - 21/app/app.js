var userVarName = "Variable";

function init() {
    let currentHeroImage = "home";

    $("nav a").click(function (e) {
        let btnId = this.idl;
        let contentID = btnId + "Conetent";

        $(".hero")
            .removeClass(`${currentHeroImage}-hero-image`)
            .addClass(`${btnId}-hero-image`);
    })

}


$(document).ready(function () {
    MODEL.getPageContent("homeContent");
    init();
})