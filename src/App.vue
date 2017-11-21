<template>
  <div id="app">
    <div class="main">
      <div class="container"> 
        <!-- HEADER -->
        <div class="row header block">        
          <div class="col-12 col-md-8 header-title">
            <h1 class="cabernet">Happily Ever Harbin</h1>
          </div>

          <div class="col-12 col-md-4 header-meta">
            <!-- TODO: break this out to it's own vue  -->
            <div class="meta-block">
              <div class="hashtag bold">#HappilyEverHarbin</div>
              <div class="days-to-go">339 Days To Go</div>
            </div>
          </div>
        </div>
        
        
        <!-- NAV LINKS -->
        <div class="row nav block">
          <div class="col-12 col-sm-3"><a href="#home">Accommodations</a></div>
          <div class="col-12 col-sm-3"><a href="#news">Our Story</a></div>
          <div class="col-12 col-sm-3"><a href="#contact">Bridal Party</a></div>
          <div class="col-12 col-sm-3"><a href="#about">Registry</a></div>
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
      </div>
      <!-- MAP -->
      <div class="row map block">
        <img src="./assets/map.jpg" alt="wedding map">
      </div>

    <div class="container">

        <!-- ACCOMmODATIONS -->
        <div class="row accommodations-header block">
          <h3 class="accommodations-title cabernet">Accommodations</h3>
          <div class="bold">We have room blocks at the following hotels</div>
        </div>
        <div class="row accommodations-links block">
          <div class="col-12 col-md-4">
            <a :href="omniUrl">
              <div class="accommodation">
                <div class="accommodation-details">
                  <span>Omni Charlottesville</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a :href="hamptonUrl">
              <div class="accommodation">
                <div class="accommodation-details">
                  <span>Hampton Inn Charlottesville</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a :href="dardenUrl">
              <div class="accommodation">
                <div class="accommodation-details">
                  <span>University of Virginia Inn at Darden</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- AIRPORTS -->
      <div class="row airports block">
        
        
        <div class="container">
          
          <div class="row">
            <div class="col airports-title">
              <h3 class="bold">Airports</h3>
            </div>
            <div class="w-100"></div>
            <div class="col airports-title">
              <p class="airport-name">Charlottesville Albemarle Airport</p>
              <p class="airport-location">(24 mins to the Downtown Mall)</p>
              </p>
            </div>
            <div class="col airports-title">
              <p class="airport-name">Richmond International Airport</p>
              <p class="airport-location">(1hr 20 mins to the Downtown Mall)</p>
              </p>
            </div>
          </div>
        </div>
      </div>


      <!-- LOCAL ATTRACTIONS -->
      <div class="container">
        <div class="row attractions block">
          <p style="color: white; font-weight: bold;">GET IMAGE</p>
          <!-- <img src="" alt=""> -->
        </div>
      </div>

      <!-- SHUTTLE -->
      <div class="row shuttle block">
        <div class="container">
          <h3>Shuttles</h3>
          <p>Shuttle information will be included in your invitation!</p>
          <p>Please note that the ceremony will begin at 6:00 PM</p>
        </div>
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
          name: 'Jenna',
          title: 'Maid of Honor',
          description: 'Lauren\'s first friend and has more blackmail than the whole bridal party combined.',
          imageUrl: ''
        },
        {
          name: 'Andrew',
          title: 'Best Man',
          description: 'Has witnessed his brother with hair. ___MORE___',
          imageUrl: ''
        },
        {
          name: 'Alli',
          title: 'Bridesmaid',
          description: 'We shared a carpet square in Pre-K...it was kind of a big deal. Now we\'re family :)',
          imageUrl: ''
        },
        {
          name: 'Bryton',
          title: 'Groomsman',
          description: 'It all started in a townhouse in a college town far far away. Hunter\'s college roommate who also loves Star Wars.',
          imageUrl: ''
        },
        {
          name: 'Carson',
          title: 'Bridesmaid',
          description: 'Adventures at camp and abroad. If it involves food and walking way too far...she\'s in!',
          imageUrl: ''
        },
        {
          name: 'Chad',
          title: 'Bridesdude',
          description: 'Highschool to college to long phone calls about struggling to adult :p Chad has been Lauren’s wingman from the beginning!',
          imageUrl: ''
        },
        {
          name: 'John',
          title: 'Groomsman',
          description: 'He had to put up with Hunter as a teenager....drums and heavy metal. Respect.',
          imageUrl: ''
        },
        {
          name: 'Katrina',
          title: 'Bridesmaid',
          description: 'She survived coding classes and media law with Lauren. Now she gets to celebrate with beer festivals in CO!',
          imageUrl: ''
        },
        {
          name: 'Kevin',
          title: 'Groomsman',
          description: 'He has lived with Hunter and put up with his antics. You can find these guys at the movies or local breweries now.',
          imageUrl: ''
        },
        {
          name: 'Molly',
          title: 'Bridesmaid',
          description: 'She is Lauren’s most artistic friend! They took art classes together from grade school - high school.',
          imageUrl: ''
        },
        {
          name: 'Nicole',
          title: 'Bridesmaid',
          description: 'She met Lstearns senior year and the two have been inseperable since. She also coined the name Lstearns and won\'t be changing that...',
          imageUrl: ''
        },
        {
          name: 'Sarah',
          title: 'Groomslady',
          description: 'She is Hunter’s drinking buddy and Lauren\'s makeup guru. The perfect day for Sarah is a trip to Sephora and then an evening at a local brewery.',
          imageUrl: ''
        }
      ]
    }
  }
}
</script>

<style>
  a {
    color: #000;  
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
  .nav {
    max-width: 560px;
  }
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

  .accommodations-header {
    flex-direction: column;
    text-align: left;
  }

  .accommodations-links {
    justify-content: space-between;
  }

  .accommodations-title {
    font-weight: 300;
    margin-bottom: 0;
  }

  .accommodation {
    align-items: center;
    background-color: #600f27;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: bold;
    height: 200px;
    justify-content: center;
  }

  .accommodation-details {
    align-items: center;
    background-color: #600f27;
    border: 1px solid #fff;
    display: flex;
    height: 90%;
    justify-content: center;
    /* padding: 20px; */
    width: 90%;
  }
  .accommodation-details p {
    align-self: center;
  }

  .airports, .shuttle {
    background-color: #07334e;
    padding: 20px;
  }

  .airports-title {
    color: #fff;
    text-align: center;
  }

  .airport-name {
    font-size: 18px;
    margin-bottom: 0;
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
    color: #fff;
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

  @media (max-width: 768px) {
      .header-meta {
        order: -1;
      }
      .header-title {
        text-align: center;
      }
  }
</style>
