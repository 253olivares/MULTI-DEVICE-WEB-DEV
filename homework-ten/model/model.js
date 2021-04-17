var homeContent = ``;
var aboutContent = `<div class="AboutInfo">
<div class="aboutcontent">
    <p class="title">ABOUT:</p>
    <hr>
    <p class="infotext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium,
        totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="clientquotes">
    <p class="title">
        CLIENT QUOTES:
    </p>
    <hr>
    <div class="client1">
        <div class="image"></div>
        <div class="text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. </p>
            <p class="person">- Miranda Brown</p>
        </div>
    </div>
    <div class="client2">
        <div class="image"></div>
        <div class="text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. </p>
            <p class="person">- Johnathan wes</p>
        </div>
    </div>
</div>
</div>`;
var toursContent = `
<div class="tourPage">
            <header class="center">
                <span>Tours: </span>
            </header>
            <div class="tours">
                <div class="tourPromo Isreal">
                    <h1>Isreal</h1>
                    <h3>from $1000</h3>
                    <div class="promoHolder">
                        <button id="isreal" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo USA">
                    <h1>U.S.A</h1>
                    <h3>from $1500</h3>
                    <div class="promoHolder">
                        <button id="USA" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo Austrailia">
                    <h1>Austrailia</h1>
                    <h3>from $1800</h3>
                    <div class="promoHolder">
                        <button id="australia" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo Zealand">
                    <h1>New Zealand</h1>
                    <h3>from $1200</h3>
                    <div class="promoHolder">
                        <button id="zealand" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo France">
                    <h1>France</h1>
                    <h3>from $2500</h3>
                    <div class="promoHolder">
                        <button id="france" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo Egypt">
                    <h1>Egypt</h1>
                    <h3>from $900</h3>
                    <div class="promoHolder">
                        <button id="egypt" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo Japan">
                    <h1>Japan</h1>
                    <h3>from $1300</h3>
                    <div class="promoHolder">
                        <button id="japan" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo Canada">
                    <h1>Canada</h1>
                    <h3>from $2000</h3>
                    <div class="promoHolder">
                        <button id="canada" class="local">LEARN MORE</button>
                    </div>
                </div>
                <div class="tourPromo UAE">
                    <h1>U.A.E</h1>
                    <h3>from $3000</h3>
                    <div class="promoHolder">
                        <button id="UAE" class="local">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>`;
var specialoffersContent = `<div class="SpecialOfferPage">
<div class="header">
    <p>
        SPECIAL OFFER(S):
    </p>
    <hr>
</div>
<div class="Barcelona">
    <div class="BarcelonaImage">
    </div>
    <div class="Barcelona_Info">
        <div class="head">
            <p>BARCELONA, SPAIN</p>
        </div>
        <hr>
        <div class="discount">
            <p>(20% OFF!)</p>
        </div>
        <p class="BarcelonaInfo">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. </p>
        <button>
            LEARN MORE
        </button>
    </div>
</div>
<div class="Bangkok">
    <div class="BangkokImage">
    </div>
    <div class="Bangkok_info">
        <div class="head">
            <p>BANGKOK, THAILAND</p>
        </div>
        <hr>
        <div class="discount">
            <p>(20% OFF!)</p>
        </div>
        <p class="BangkokInfo">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
        </p>
        <button>
            LEARN MORE
        </button>
    </div>
</div>
</div>`;
var blogContent = `<div class="BlogPage">
<div class="header">
    <p>BLOG:</p>
    <hr>
</div>
<div class="blog">
    <div class="date">
        <p class="day">06</p>
        <p class="month">Jun</p>
    </div>
    <div class="content">
        <div class="blogImage"></div>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.</p>
    </div>
</div>
<div class="blog last">
    <div class="date">
        <p class="day">23</p>
        <p class="month">Jul</p>
    </div>
    <div class="content">
        <div class="blogImage"></div>
        <p>Sed et persipiatis unde omnis iste natus</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae
            dicta sunt explicabo.</p>
    </div>
</div>
</div>`;
var contactContent = `<div class="ContactUsPage">
<p class="title">CONTACT US:</p>
<hr>
<div class="Information">
    <div class="imageLocal">
        <img src="images/c9630e6a0d4eea8424c9e77634f917b5.png" alt="">
        <p class="location">
            travel-fly Inc. <br>
            8901 Marmora Road, <br>
            Glasgow, D04 89GR. <br>
            Freephone:+1 800 559 6580 <br>
            Telephone:+1 800 603 6035 <br>
            FAX:+1 800 889 9898 <br>
            E-mail: mail@travelfly.org
        </p>
    </div>
    <form action="">
        <input type="text" placeholder="Your name...">
        <input type="text" placeholder="Email Address">
        <input type="text" placeholder="Company">
        <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
        <button>
            SEND MESSAGE
        </button>
    </form>
</div>
</div>`;
var australiaContent = `<div class="tour_individual">
<div class="tour_hero Austrailia">
    <div class="header">
        <p>AUSTRALIA TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $1800 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview aus1">

    </div>
    <div class="preview aus2">

    </div>
    <div class="preview aus3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var canadaContent = `<div class="tour_individual">
<div class="tour_hero Canada">
    <div class="header">
        <p>CANADA TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $2000 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview canada1">

    </div>
    <div class="preview canada2">

    </div>
    <div class="preview canada3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var egyptContent = `<div class="tour_individual">
<div class="tour_hero Egypt">
    <div class="header">
        <p>EGYPT TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $900 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview egypt1">

    </div>
    <div class="preview egypt2">

    </div>
    <div class="preview egypt3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var franceContent = `<div class="tour_individual">
<div class="tour_hero France">
    <div class="header">
        <p>FRANCE TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $2500 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview france1">

    </div>
    <div class="preview france2">

    </div>
    <div class="preview france3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var isrealContent = `<div class="tour_individual">
<div class="tour_hero isreal">
    <div class="header">
        <p>ISREAL TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $1000 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview isreal1">

    </div>
    <div class="preview isreal2">

    </div>
    <div class="preview isreal3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var japanContent = `<div class="tour_individual">
<div class="tour_hero Japan">
    <div class="header">
        <p>JAPAN TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $1300 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview japan1">

    </div>
    <div class="preview japan2">

    </div>
    <div class="preview japan3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var UAEContent = `<div class="tour_individual">
<div class="tour_hero UAE">
    <div class="header">
        <p>U.A.E TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $3000 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview uae1">

    </div>
    <div class="preview uae2">

    </div>
    <div class="preview uae3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var USAContent = `<div class="tour_individual">
<div class="tour_hero USA">
    <div class="header">
        <p>U.S.A TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $1500 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview usa1">

    </div>
    <div class="preview usa2">

    </div>
    <div class="preview usa3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;
var zealandContent = `<div class="tour_individual">
<div class="tour_hero Zealand">
    <div class="header">
        <p>NEW ZEALAND TOUR PACKAGE:</p>
    </div>
    <div class="price">
        <p>STARTING FROM $1200 (prices may vary)</p>
    </div>
</div>
<div class="tour_preview">
    <div class="preview nz1">

    </div>
    <div class="preview nz2">

    </div>
    <div class="preview nz3">

    </div>
</div>
<div class="tour_days">
    <div class="day1">
        <p class="dayhead">Day #1:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day2">
        <p class="dayhead">Day #2:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
    <div class="day3">
        <p class="dayhead">Day #3:</p>
        <hr>
        <p class="daytext">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
    </div>
</div>
<div class="tour_book">
    <button>BOOK NOW</button>
</div>

</div>`;

export function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}