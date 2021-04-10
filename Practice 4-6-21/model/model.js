
var homeContent = ``;
var aboutContent = ``;
var productsContent = ``;
var contactContent = ``;
var gamesContent = ``;

function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}
function getName() {
    console.log("");
}

export { getName, getPageContent };