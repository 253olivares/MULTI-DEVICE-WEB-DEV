var homeContent = `<div class="quote">
<div class="textCenter">
    <p class="dialog">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
    </p>
    <p class="individuual">John Smith</p>
    <p class="info">Corporation CEO, books author.</p>
</div>
</div>
<div class="upcomingEvents">
<div class="eventInfo">
    <p class="label">UPCOMING EVENTS:</p>
    <hr>
    <div class="calender">
        <div class="event">
            <div class="date">
                <p class="day">06</p>
                <p class="month">JUN</p>    
            </div>
            <div class="contentEvent">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="event">
            <div class="date">
                <p class="day">30</p>
                <p class="month">JUL</p>    
            </div>
            <div class="contentEvent">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="event">
            <div class="date">
                <p class="day">30</p>
                <p class="month">AUG</p>    
            </div>
            <div class="contentEvent">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="event">
            <div class="date">
                <p class="day">23</p>
                <p class="month">NOV</p>    
            </div>
            <div class="contentEvent">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
        <div class="event">
            <div class="date">
                <p class="day">23</p>
                <p class="month">DEC</p>    
            </div>
            <div class="contentEvent">
                <p>Sed et persipiatis unde omnis iste natus</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
            </div>
        </div>
    </div>
</div>
</div>`;
var aboutContent = `<div class="history">
<div class="historyBackground">
    <p class="inText">OUR HISTORY:</p>
    <hr>
</div>
<p class="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;

export function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}