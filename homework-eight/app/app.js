var userVarName = "Variable";
var homeContent = `<div class="hero_image">
<h1>Security Agency Name</h1>
</div>
    <div class="contentHome1">
        <img src="images/Number1.png" alt="">
            <h3>Voted Number 1 Security Agency in 2020</h3>
</div>
        <div class="hero_image2">
            <h1>Real Time Support</h1>
        </div>
        <div class="Feedback">
            <h1>Hear what others have said about us!</h1>
            <hr>
                <br>
                    <br>
                        <div class="quotes">
                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure repellat, fugit officiis sit
                            eligendi maiores adipisci tenetur! Laudantium totam explicabo blanditiis enim dolorum eligendi
                            eveniet facere temporibus quo nemo nobis, commodi ratione voluptatum corporis magni ipsa odit
                            eos perferendis dolores ullam autem porro. Quos, quasi voluptate reiciendis libero enim
                            excepturi, qui voluptatum minus, dolorum suscipit optio magnam quia non eos doloribus? A
                            molestiae dignissimos exercitationem, sapiente quas, libero recusandae necessitatibus harum
        vitae laudantium, similique asperiores." <span>- Jacob, Dillons</span></p>
                            <br>
                                <br>
                                    <br>
                                        <br>
                                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure repellat, fugit officiis sit
                                            eligendi maiores adipisci tenetur! Laudantium totam explicabo blanditiis enim dolorum eligendi
                                            eveniet facere temporibus quo nemo nobis, commodi ratione voluptatum corporis magni ipsa odit
                                            eos perferendis dolores ullam autem porro. Quos, quasi voluptate reiciendis libero enim
                                            excepturi, qui voluptatum minus, dolorum suscipit optio magnam quia non eos doloribus? A
                                            molestiae dignissimos exercitationem, sapiente quas, libero recusandae necessitatibus harum
        vitae laudantium, similique asperiores." <span>- Daniel, Jacobs</span></p>
                                            <br>
                                                <br>
                                                    <br>
                                                        <br>
                                                            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure repellat, fugit officiis sit
                                                            eligendi maiores adipisci tenetur! Laudantium totam explicabo blanditiis enim dolorum eligendi
                                                            eveniet facere temporibus quo nemo nobis, commodi ratione voluptatum corporis magni ipsa odit
                                                            eos perferendis dolores ullam autem porro. Quos, quasi voluptate reiciendis libero enim
                                                            excepturi, qui voluptatum minus, dolorum suscipit optio magnam quia non eos doloribus? A
                                                            molestiae dignissimos exercitationem, sapiente quas, libero recusandae necessitatibus harum
        vitae laudantium, similique asperiores." <span>- Ryan, Banuelos</span></p>
</div>
</div>`;
var aboutContent = "<h1>ABOUT</h1><p>This is a page</p>";
var productsContent = "<h1>PRODUCTS</h1><p>This is a page</p>";
var contactContent = "<h1>CONTACT</h1><p>This is a page</p>";

function init() {
    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentID = btnId + "Content";
        $("#app").html(eval(contentID));
    });
}

$(document).ready(function () {
    init();
});