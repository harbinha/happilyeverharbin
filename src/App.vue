<template>
  <div id="app">
    <div class="container main">

      <!-- HEADER -->
      <div class="row header block">
        <div class="row">
          <div class="column column-75 header-title">
            <h1 class="cabernet">Happily Ever Harbin</h1>
          </div>

          <div class="column column-25 header-meta">
            <!-- TODO: break this out to it's own vue  -->
            <div class="meta-block">
              <div class="hashtag bold">#HappilyEverHarbin</div>
              <div class="days-to-go">339 Days To Go</div>
            </div>
          </div>
        </div>
      </div>
      
      
      <!-- NAV LINKS -->
      <div class="row nav block">
        <ul class="nav-links">
          <li><a href="#home">Accomodations</a></li>
          <li><a href="#news">Our Story</a></li>
          <li><a href="#contact">Bridal Party</a></li>
          <li><a href="#about">Registy</a></li>
        </ul>
      </div>


      <!-- INTRO BLOCK -->
      <div class="row intro block">
        <p>
            We are so excited to celebrate with our closest <span class="bold cabernet">family and friends!</span><br/>
            Thank you for traveling near and far to <span class="bold cabernet">eat, drink, and dance</span> with us.<br/>
            If you have any questions don’t hestitate to contact the<br/>
            <span class="bold">Maid of Honor, Jenna Stearns at jenna.paige.stearns@gmail.com</span>
        </p>
      </div>

      <!-- MAP -->
      <div class="row map block">
        <img src="./assets/map.jpg" alt="wedding map">
      </div>


      <!-- ACCOMODATIONS -->
      <div class="row accomodations-header block">
        <h3 class="cabernet">Accomodations</h3>
        <div class="bold">We have room blocks at the following hotels</div>
      </div>
      <div class="row accomodations-links block">
        <div class="column column-25">
          <a :href="omniUrl">
            <div class="accomodation">
              <div class="accomodation-details">
                <p>Omni Charlottesville</p>
              </div>
            </div>
          </a>
        </div>
        <div class="column column-25">
          <a :href="hamptonUrl">
            <div class="accomodation">
              <div class="accomodation-details">
                <p>Hampton Inn Charlottesville</p>
              </div>
            </div>
          </a>
        </div>
        <div class="column column-25">
          <a :href="dardenUrl">
            <div class="accomodation">
              <div class="accomodation-details">
                <p>University of Virginia Inn at Darden</p>
              </div>
            </div>
          </a>
        </div>
      </div>


      <!-- AIRPORTS -->
      <div class="row airports block">
        <div class="airports-title">
          <h3 class="bold">Airports</h3>
        </div>
        <div class="column airport-details">
          <div class="row">
            <div class="column column-50 airports-title">
              <p class="airport-name">Charlottesville Albemarle Airport</p>
              <p class="airport-location">(24 mins to the Downtown Mall)</p>
              </p>
            </div>
            <div class="column column-50 airports-title">
              <p class="airport-name">Richmond International Airport</p>
              <p class="airport-location">(1hr 20 mins to the Downtown Mall)</p>
              </p>
            </div>
          </div>
        </div>
      </div>


      <!-- LOCAL ATTRACTIONS -->
      <div class="row attractions block">
        <p style="color: white; font-weight: bold;">GET IMAGE</p>
        <!-- <img src="" alt=""> -->
      </div>


      <!-- SHUTTLE -->
      <div class="row shuttle block">
        <div class="column shuttle-text">
          <h3 class="shuttle-title">Shuttle</h3>
          <p class="bold">Shuttle information will be included in your invitation!</p>
          <p class="bold">Please note that the ceremony will begin at 6:00 PM</p>
        </div>
        <div class="column shuttle-img"></div>
      </div>

      <!-- OUR STORY -->
      <div class="row our-story block">
        <div class="column our-story-title">
          <h3>Our Story</h3>
        </div>
        <div class="column our-story-image">
          <p style="color: white; font-weight: bold;">GET IMAGE</p>
        </div>

        <div class="column our-story-preface">
          <p class="our-story-preface-text">Lauren and Hunter can both agree that they met at work.<br/>
          However, there is still debate whether it was the moment they ran into each other with a hummingbird 
          or a JMU sweatshirt that sealed the deal (we will compromise and include both versions).</p>
        </div>

        <div class="column our-story-stories">
          <div class="row">
            <div class="column column-50"></div>
            <div class="column column-50"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      omniUrl: 'https://www.omnihotels.com/hotels/charlottesville',
      hamptonUrl: 'https://secure3.hilton.com/en_US/hp/reservation/book.htm?execution=e1s1',
      dardenUrl: 'https://www.reseze.net/cassets/mkt/Inn_at_Darden/lp/96863.html'
    }
  }
}
</script>

<style>
  h1, h2, h3, p, ul, li {
    margin: 0;
  }
  .bold {
    font-weight: bold;
  }
  .cabernet {
    color: #540212;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main {
    margin-top: 30px;
  }

  .block {
    border: 1px solid black;
    margin-top: 20px;
  }

  /* .header {} */
  .header-title {
    text-align: left;
  }
  .header-meta {
    text-align: right;
  }
  .intro {
    border: 1px solid #600f27;
    justify-content: center;
    padding: 10px 0;
  }

  /* .meta-block {} */

  .nav-links {
    list-style-type: none;
    padding: 0;
    overflow: hidden;
  }
  .nav-links li {
    float: left;
  }
  .nav-links a {
    color: #2c3e50;
    padding: 0 16px;
    text-transform: uppercase;
  }
  .nav-links a:hover {
    color: #540212;
  }

  .map {
    flex-direction: column;
  }

  .accomodations-header {
    flex-direction: column;
    text-align: left;
  }

  .accomodations-links {
    height: 200px;
    justify-content: space-between;
  }
  .accomodations-links .column {
    padding: 0; 
  }

  .accomodation {
    align-items: center;
    background-color: #600f27;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: bold;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .accomodation-details {
    border: 1px solid #fff;
    display: flex;
    height: 90%;
    justify-content: center;
    padding: 20px;
    width: 90%;
  }
  .accomodation-details p {
    align-self: center;
  }

  .airports {
    background-color: #07334e;
    flex-direction: column;
    height: 200px;
    padding: 20px;
  }

  .airport-details {
    align-items: center;
    display: flex !important;
  }

  .airports-title {
    color: #fff;
    text-align: center;
  }

  .airport-name {
    font-size: 18px;
  }
  .airport-location {
    font-size: 14px;
  }

  .attractions {
    background-color: #6395a4;
    height: 600px;
  }

  .shuttle {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  .shuttle-text { 
    padding-bottom: 30px;
    padding-top: 10px;
    text-align: left;
  }

  .shuttle-title {
    color: #540212;
  }

  .shuttle-img {
    background-color: grey;
  }

  .our-story {
    flex-direction: column;
  }

  .our-story-title {
    color: #540212;
    padding-bottom: 20px;
    text-align: left;
  }
  .our-story-image {
    background-color: grey;
    height: 300px;
    width: 100%;
  }

  .our-story-preface {
    align-items: center;
    display: flex !important;
    flex-direction: column;
    padding: 20px !important;
  }

  .our-story-preface-text {
    width: 70%;
  }
</style>
