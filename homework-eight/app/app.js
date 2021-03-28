var userVarName = "Variable";

//code for the home page
var homeContent = `<div class="hero_image">
<h1>Cyber Security Agency Name</h1>
</div>
<div class="contentHome1">
<img src="images/Number1.png" alt="">
<h3>Voted Number 1 Cyber Security Agency in 2020</h3>
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



//cpmtemt for my about page
var aboutContent = `<div class="founder">
<img src="images/Chad.jpg" alt="">
<h3>Isaac Newton</h3>
<br>
<p>Founded Cyber Security Agency after getting his information stolen several times. To prevent this from happening time and time again Issac decided to
    begin his own secure
    agency that
    centers in helping proctect consumers. Issac began his journy in 2012 to establish a trustworthy and
    securty agency where you can rely on our protection to keep your data from being stolen!</p>
</div>
<div class="location">
<h1>WHERE?</h1>
</div>
<div class="LocationInfo">
<img src="images/Indian.jpg" alt="">
<p> Cyber Security was founded here in the state of indiana. Best
    known for its corn. Currently we are
    looking into options of expandingg into other areas especially in the west coast. Lorem ipsum dolor
    sit, amet consectetur adipisicing elit. Sapiente, quo consequuntur nisi incidunt nulla quod
    reprehenderit tempore rem deleniti, aperiam corrupti iure consequatur eligendi velit in! Repellat
    consequatur necessitatibus itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
    repudiandae, earum non nulla tenetur nobis illum molestias fugiat, cupiditate sed deleniti ab
    dolorem animi voluptas aspernatur? Culpa minus libero quidem!
</p>
</div>
<div class="why">
<h1>WHY?</h1>
</div>
<div class="whyInfo">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati voluptas pariatur dolorem
    veritatis quasi hic cupiditate voluptatum impedit consequatur temporibus eum, facere voluptate
    voluptatibus eaque, eveniet iusto officia repellendus! Voluptate eveniet porro excepturi suscipit.
    Totam, commodi quidem accusantium sapiente quas corporis voluptatibus quia maiores sunt et
    doloremque animi dolore beatae libero labore assumenda obcaecati exercitationem id ipsa, minus
    quisquam eveniet recusandae! Iste voluptas necessitatibus tenetur odio quasi porro velit totam, fuga
    laudantium pariatur. Maxime, repellat. Suscipit veniam distinctio blanditiis odit amet accusantium
    incidunt magnam pariatur, quam saepe temporibus aliquam est, doloribus adipisci ipsum facere omnis
    praesentium eaque delectus labore!</p>
</div>
<div class="now">
<h1>NOW?</h1>
</div>
<div class="nowInfo">
<h1>Currently assisting 100's of businesses across Indiana!</h1>
<br>
<br>
<img src="images/indiana-county-map-1000px-1.jpg" alt="">
<br>
<br>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum sed beatae illo inventore ad
    autem rem quam ex asperiores, eum vitae facilis corrupti omnis nesciunt quaerat minus, alias
    praesentium. Pariatur nobis eos omnis eius in, quo tempora perferendis nesciunt, itaque dignissimos
    voluptas a possimus dolorum aliquid quis tenetur recusandae architecto odit! Ex vel accusantium
    ipsam veritatis cum, enim, ab repellendus mollitia iure, impedit autem voluptas quae odit eos
    molestias velit ipsa. Suscipit iste adipisci delectus esse cum laudantium voluptatibus dolorem, ipsa
    vel, a qui modi. Autem ducimus impedit, rem explicabo nostrum ex voluptatem hic, deleniti laudantium
    magni suscipit eligendi?
</p>
</div>`;



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