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
              <div class="days-to-go">{{daysToGo}} Days To Go</div>
            </div>
          </div>
        </div>
        
        
        <!-- NAV LINKS -->
        <ul class="nav">
          <li class="nav-anchor"><a class="nav-href" href="#accommodations">Accommodations</a></li>
          <li class="nav-anchor"><a class="nav-href" href="#story">Our Story</a></li>
          <li class="nav-anchor"><a class="nav-href" href="#party">Bridal Party</a></li>
          <li class="nav-anchor"><a class="nav-href" href="#registry">Registry</a></li>
        </ul>


        <!-- OUR FACES -->
          <div class="row our-faces">
            <div class="col-12 col-sm-8 lead-first-img">
              <img class="img-fluid lead-img" src="./assets/lead-left.jpg" alt="Lauren and Hunter wedding">
            </div>
            <div class="col-12 col-sm-4">
              <img class="img-fluid lead-img" src="./assets/lead-right.jpg" alt="Lauren and Hunter wedding">
            </div>
            <div class="w-100"></div>
            <div class="col-12 photo-credit">Melissa Durham Photography</div>
          </div>

        <!-- INTRO BLOCK -->
        <div class="container">
          <div class="row intro block">
            <p>
                We are so excited to celebrate with our closest <span class="bold cabernet">family and friends!</span><br/>
                Thank you for traveling near and far to <span class="bold cabernet">eat, drink, and dance</span> with us.<br/>
                If you have any questions don't hestitate to contact the<br/>
                <span class="bold">Maid of Honor, Jenna Stearns at jenna.paige.stearns@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <!-- MAP -->
      <div class="main-row row map">
        <div class="container">
          <img class="img-fluid" src="./assets/map.svg" alt="wedding map">
        </div>
      </div>

    <div class="container">

        <!-- ACCOMmODATIONS -->
        <a name="accommodations"></a>
        <div class="accommodations-header block">
          <h3 class="accommodations-title cabernet">Accommodations</h3>
          <div class="bold">We have room blocks at the following hotels</div>
        </div>
        <div class="row accommodations-links block">
          <div class="col-12 col-md-4">
            <a :href="omniUrl"  target="_blank">
              <div class="accommodation">
                <div class="accommodation-details">
                  <span>Omni Charlottesville</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a :href="hamptonUrl"  target="_blank">
              <div class="accommodation">
                <div class="accommodation-details">
                  <span>Hampton Inn Charlottesville</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a :href="dardenUrl"  target="_blank">
              <div class="accommodation">
                <div class="accommodation-details">
                  <span>University of Virginia <br>
                    Inn at Darden</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- AIRPORTS -->
      <div class="main-row row airports block">
        <div class="container">
          <div class="row">
            <div class="col airports-title">
              <h3 class="bold">Airports</h3>
            </div>
            <div class="w-100"></div>
            <div class="col airports-title">
              <p class="airport-name">Charlottesville Albemarle Airport</p>
              <p class="airport-location">(24 mins to the Downtown Pedestrian Mall)</p>
              </p>
            </div>
            <div class="col airports-title">
              <p class="airport-name">Richmond International Airport</p>
              <p class="airport-location">(1hr 20 mins to the Downtown Pedestrian Mall)</p>
              </p>
            </div>
          </div>
        </div>
      </div>


      <!-- LOCAL ATTRACTIONS -->
      <div class="container">
        <img class="img-fluid attractions" src="./assets/local.png" alt="local attractions">
      </div>

      <!-- SHUTTLE -->
      <div class="main-row row shuttle">
        <div class="container">
          <h3 class="bold">Shuttles</h3>
          <p class="shuttles-first-line">Shuttle information will be included in your invitation!</p>
          <p>Please note that the ceremony will begin at 6:00 PM</p>
        </div>
      </div>

      <hr>
      <!-- OUR STORY -->
      <a name="story"></a>
      <div class="container">
        <h3 class="our-story-title">Our Story</h3>
      </div>
      <!-- <div class="container"> -->
        <div class="main-row row block">
          <div class="col-12 story-photo">
            <img src="./assets/new_saber.jpg" alt="" class="img-fluid">
          </div>
        </div>
      <!-- </div> -->

      <div class="container our-story-intro">
        <p>Lauren and Hunter can both agree that they met at work.<br />
          However, there is still debate whether it was the moment they ran into each other with a hummingbird or a JMU sweatshirt that sealed the deal.</p>
      </div>

      <div class="container our-story-stories block">
        <div class="row">
          <div class="col-12 col-md-6 story">
            <p class="bold">Lauren's Story</p>
            <p class="our-story">
              Lauren was nervous for a date one Friday afternoon, so
              she started pacing on the office floor. She ran into a guy in
              a JMU sweatshirt that was talking to co-workers about
              going to the gym at lunch. Turns out she wasn't interested
              in the Friday night date, but the following week endured
              lifting weights on her lunch break so she could talk to the
              JMU alum ;)
            </p>
          </div>
          <div class="col-12 col-md-6 story">
            <p class="bold">Hunter's Story</p>
            <p class="our-story">
              It was an early summer morning and Lauren and her
              co-worker (and roomie!) were on the patio outside 
              trying to save a hummingbird that was on the floor.
              Hunter walked by the girls and decided to help them
              save this bird's life. He was a savior and it was magical.
              *Lauren thinks this doesn't count because no one
              knew/nor asked for each other's names haha*
            </p>
          </div>
        </div>
      </div>

    <!-- BRIDAL PARTY -->
    <a name="party"></a>
    <div class="container">
      <h3 class="bridal-party-title cabernet">Bridal Party</h3>
      <div class="row">
        <div v-for="person in bridalParty" :key="person.name" class="col-12 col-sm-6 col-md-4">
          <person :name="person.name" :description="person.description" :title="person.title" :image-url="person.imageUrl"></person>
        </div>
      </div>
    </div>

    <hr>

    <!-- REGISTRY -->
    <a name="registry"></a>
    <div class="container registry-title">
      <h3 class="cabernet">Registry</h3>
    </div>
    
    <div class="main-row row registries">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3 registry">
            <a :href="registries.amazon" target="_blank">
              <img class="img-fluid amazon" src="./assets/amazon_logo.png" alt="">
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-3 registry">
            <a :href="registries.crate" target="_blank">
              <img class="img-fluid crate" src="./assets/Crate-Barrel-Logo_white.png" alt="">
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-3 registry">
            <a :href="registries.sonoma" target="_blank">
              <img class="img-fluid sonoma" src="./assets/sonoma.png" alt="">
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-3 registry">
            <a :href="registries.zola" target="_blank">
              <img class="img-fluid zola" src="./assets/zola_white.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>


    <!-- CLOSING NOTES -->
    <div class="container closing-notes">
      <p><span class="bold">Site Designed and Developed By:</span> Hunter and Lauren</p>
      <p class="closing-day-count">See you in {{daysToGo}} Days!</p>
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
    let countDownDate = new Date("Sept 15, 2018").getTime(),
        now = new Date().getTime(),
        distance = countDownDate - now,
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return {
      daysToGo: days,
      omniUrl: 'https://www.omnihotels.com/hotels/charlottesville/weddings/stearns-harbin-wedding',
      hamptonUrl: 'https://secure3.hilton.com/en_US/hp/reservation/book.htm?inputModule=HOTEL&ctyhocn=CHOMSHX&spec_plan=CHHSHW&arrival=20180914&departure=20180916&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT',
      dardenUrl: 'https://goo.gl/S4C1Qp',
      registries: {
        amazon: 'https://www.amazon.com/wedding/share/stearns-harbin',
        crate: 'https://www.crateandbarrel.com/gift-registry/lauren-stearns-and-hunter-harbin/r5710726',
        sonoma: 'https://www.williams-sonoma.com/registry/22q5z9v9tt/registry-list.html',
        zola: 'https://www.zola.com/registry/stearns-harbin'
      },
      bridalParty: [
        {
          name: 'Jenna',
          title: 'Maid of Honor',
          description: 'Lauren\'s first friend and has more blackmail than the whole bridal party combined.',
          imageUrl: '/static/jenna_bw.jpg'
        },
        {
          name: 'Andrew',
          title: 'Best Man',
          description: 'He is Hunter\'s Spartan and Tough Mudder comrade and has witnessed his brother with hair.',
          imageUrl: '/static/andrew_bw.jpg'
        },
        {
          name: 'Alli',
          title: 'Bridesmaid',
          description: 'We shared a carpet square in Pre-K...it was kind of a big deal. Now we\'re family :)',
          imageUrl: '/static/alli_bw.jpg'
        },
        {
          name: 'Bryton',
          title: 'Groomsman',
          description: 'It all started a long time ago in a college townhouse far, far away.... Hunter\'s roommate at JMU who also loves Star Wars.',
          imageUrl: '/static/bryton_bw.jpg'
        },
        {
          name: 'Carson',
          title: 'Bridesmaid',
          description: 'Adventures at camp and abroad. If it involves food and walking way too far...she\'s in!',
          imageUrl: '/static/carson_bw.jpg'
        },
        {
          name: 'Chad',
          title: 'Bridesdude',
          description: 'Highschool to college to long phone calls about struggling to adult :p Chad has been Lauren\'s wingman from the beginning!',
          imageUrl: '/static/chad_bw.jpg'
        },
        {
          name: 'John',
          title: 'Groomsman',
          description: 'He is Hunter\'s inspiration and taught him everything about the rewards of hard work, commitment, and discipline. He also had to put up with Hunter as a teenager....drums and heavy metal. Respect. ',
          imageUrl: '/static/john_bw.jpg'
        },
        {
          name: 'Katrina',
          title: 'Bridesmaid',
          description: 'She survived coding classes and media law with Lauren. Now she gets to celebrate with beer festivals in CO!',
          imageUrl: '/static/katrina_bw.jpg'
        },
        {
          name: 'Kevin',
          title: 'Groomsman',
          description: 'He has lived with Hunter in college and somehow put up with his antics. Video game and nerd extraordinaire, you can find him and his wife Sarah at the movies or local breweries.',
          imageUrl: '/static/kevin_bw.jpg'
        },
        {
          name: 'Molly',
          title: 'Bridesmaid',
          description: 'She is Lauren\'s most artistic friend! They took art classes together from grade school - high school.',
          imageUrl: '/static/molly_bw.jpg'
        },
        {
          name: 'Nicole',
          title: 'Bridesmaid',
          description: 'She met Lstearns senior year at JMU and the two have been inseperable since. She also coined the name Lstearns and won\'t be changing that...',
          imageUrl: '/static/nicole_bw.jpg'
        },
        {
          name: 'Sarah',
          title: 'Groomslady',
          description: 'She is Hunter\'s drinking buddy and Lauren\'s makeup guru. The perfect day for Sarah is a trip to Sephora and then an evening at a local brewery. Despite Lauren\'s Instagram, she is in fact Sammy\'s mom.',
          imageUrl: '/static/sarah_bw.jpg'
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
  p, h1, h2, h3 {
    margin-bottom: 0;
  }
  .main-row {
    margin-right: 0;
    margin-left: 0;  
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

  .lead-img {
    max-width: 100%;
  }

  .block {
    /* border: 1px solid black; */
    margin-top: 20px;
  }

  .our-faces {
    align-items: center;
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

  .photo-credit {
    text-align: right;
  }

  /* .meta-block {} */
  .nav {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: left;
    text-transform: uppercase;
  }
  .nav-anchor {
    margin-right: 20px;
  }
  .nav-href:hover {
    color: #540212;
    text-decoration: none;
  }

  .attractions {
    margin: 40px 0;
  }

  .map {
    background-color: #eaebde;
    padding-top: 30px;
    margin-top: 30px;
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
    /* margin: 0 auto; */
    margin: 0 auto 20px auto;
    max-width: 300px;
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
    padding: 20px 20px 26px 20px;
  }
  .shuttles-first-line {
    font-size: 18px;
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

  .shuttle {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    color: #fff;
  }
  .story {
    padding-bottom: 20px;
  }
  .story-photo {
    padding: 0;
  }
  .our-story-intro {
    margin-top: 20px;
  }
  .our-story-stories {
    text-align: center;
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
  .registry-title {
    margin-bottom: 20px;
  }
  .bridal-party-title {
    margin-bottom: 15px;
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
    align-items: center;
    background-color: #07334e;
    min-height: 200px;
  }

  .closing-notes {
    padding: 20px 0;
  }

  .closing-day-count {
    color: #540212;
    font-style: italic;
  }

  .amazon {
    max-width: 75%;
  }
  .crate {
    max-width: 70%;
    margin-right: 30px;
  }
  .sonoma {}
  .zola {
    max-width: 55%;
  }

  @media (max-width: 768px) {
      .header-meta {
        order: -1;
      }
      .header-title {
        text-align: center;
      }
  }
  @media (max-width: 576px) {
    .nav {
      flex-direction: column;
      text-align: center;
    }
    .registry {
      margin-bottom: 20px;
    }
    .crate {
      margin-right: 0;
    }
    .lead-first-img {
      margin-bottom: 20px;
    }
  }
</style>
