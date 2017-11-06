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
      <div class="column our-story-title">
        <h3 class="cabernet">Our Story</h3>
      </div>
      <div class="row our-story block">
        <div class="column our-story-image">
          <p style="color: white; font-weight: bold;">GET IMAGE</p>
        </div>

        <div class="column our-story-preface">
          <p class="our-story-preface-text">Lauren and Hunter can both agree that they met at work.<br/>
          However, there is still debate whether it was the moment they ran into each other with a hummingbird 
          or a JMU sweatshirt that sealed the deal (we will compromise and include both versions).</p>
        </div>

        <div class="column our-story-stories block">
          <div class="row">
            <div class="column column-50">
              <div class="something"></div>
              <p class="our-story">
Lauren started working at Gannett/USA Today in June 2015 after her JMU friend Erika encouraged her to apply for a position on their design team. One September morning, Erika and Lauren were walking on the patio outside of the office and saw an injured hummingbird lying on the ground. The girls were casually saving the hummingbird's life (with Lauren afraid to touch it and giving it water) when an unfamiliar colleague walked by them and asked what they were doing. The new friend picked up the hummingbird and helped the little bird fly away. After the grand save, the unfamiliar face introduced himself and walked off. Lauren turned to Erika and asked "do you know that guy?"...Erika replied "nope" and little did either of them know Lauren would fall for the hummingbird savior :p<br/>
***Lauren thinks this is not how they met because Hunter did not talk to her again for a few weeks***
              </p>
            </div>
            <div class="column column-50">
              <div class="something"></div>
              <p class="our-story">
Lauren and Hunter were working on the same floor of Gannett for a few months before ever running into each other. One Friday afternoon, Lauren was nervous for a date later that evening when she started pacing in the office. She ran into a group of unfamiliar co workers and one of them happened to be wearing a JMU sweatshirt. Everyone introduced themselves and Lauren brought up she was also a JMU grad. The group mentioned going to the gym at lunch and invited her to join next week if she wanted. She took note and later in the evening after a very sad and boring date could not wait for Monday's gym squad. After a few days of awkward conversations on gym equipment Lauren was asked out on a date! Lauren's favorite gym memory is Hunter telling her that he had a cat, loved Star Wars, and wanted to visit a local brewery…..which is where she had to pretend to like beer, not be allergic to cats, or share that she had never seen a Star Wars film. But despite having those odds against them, the force was with them ;)
              </p>
            </div>
          </div>
        </div>
      </div>

    <!-- BRIDAL PARTY -->
    <div class="bridal-party-title">
      <h3 class="cabernet">Bridal Party</h3>
    </div>
    <div class="row bridal-party block">
      <!-- TODO: how is bridal party organized on page? -->
      <div v-for="person in bridalParty" :key="person.name" class="column column-50">
        <person :name="person.name" :description="person.description" :how-we-met="person.howWeMet" :image-url="person.imageUrl"></person>
      </div>
    </div>


    <!-- REGISTRY -->
    <div class="registry-title">
      <h3 class="cabernet">Registry</h3>
    </div>
    <div class="row registries">
      <div class="column column-25">
        <div class="registry">
          <p>Amazon</p>
        </div>
      </div>
      <div class="column column-25">
        <div class="registry">
          <p>Crate&amp;Barrel</p>
        </div>
      </div>
      <div class="column column-25">
        <div class="registry">
          <p>ZOLA</p>
        </div>
      </div>
    </div>


    <!-- CLOSING NOTES -->
    <div class="row closing-notes">
      <div class="column">
        <p><span class="bold">Site Designed and Developed By:</span> Hunter and Lauren</p>
        <p class="closing-day-count">See you in 339 Days!</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import person from './components/person.vue';
export default {
  name: 'app',
  components: {
    'person': person
  },
  data() {
    return {
      omniUrl: 'https://www.omnihotels.com/hotels/charlottesville',
      hamptonUrl: 'https://secure3.hilton.com/en_US/hp/reservation/book.htm?execution=e1s1',
      dardenUrl: 'https://www.reseze.net/cassets/mkt/Inn_at_Darden/lp/96863.html',
      bridalParty: [
        {
          name: 'Obi-Wan Kenobi',
          description: 'Became more powerful than you can possibly imagine',
          howWeMet: 'Saved me from Tuscan Raiders on Tatooine',
          imageUrl: ''
        },
        {
          name: 'Yoda',
          description: 'The lean green sith fighting machine',
          howWeMet: 'Riding my back on Dagobah',
          imageUrl: ''
        },
        {
          name: 'Vader',
          description: 'The Emporer\'s wrath',
          howWeMet: 'Bastard cut my hand off on cloud city',
          imageUrl: ''
        },
        {
          name: 'Chewbacca',
          description: 'Homeboy and co-pilot',
          howWeMet: 'Getting a lift from Mos Eisly cantina with Obi-Wan',
          imageUrl: ''
        },
        {
          name: 'Leia',
          description: 'Princess from Alderaan',
          howWeMet: 'Rescued her from a star destroyer like a fucking champion',
          imageUrl: ''
        }
      ]
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
    /* border: 1px solid black; */
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
    padding: 20px 0;
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

  .our-story-stories {
    text-align: left;
  }
  
  .something {
    background-color: grey;
    height: 100px;
    margin: 20px auto;
    width: 200px;
  }
  .bridal-party {
    flex-wrap: wrap;
  }
  .bridal-party-title,
  .registry-title,
  .our-story-title {
    color: #540212;
    padding-top: 20px;
    text-align: left;
  }

  .bridesmaids, .groomsmen {
    height: 600px;
  }
  .person-img {
    background-color: grey;
    height: 100%;
    width: 100%;
  }
  .person-name {
    color: #540212;
  }
  .person-text {
    text-align: left;
  }

  .registries {
    background-color: #07334e;
    justify-content: space-between;
    height: 200px;
  }

  .registry {
    color: #fff;
    display: flex;
    justify-content: center;
    height: 100%;
  }
  /* TODO: remove one I get registry logos */
  .registry p {
    align-self: center;
    font-weight: bold;
  }

  .closing-notes {
    padding: 20px 0;
  }

  .closing-day-count {
    color: #540212;
    font-style: italic;
  }
</style>
