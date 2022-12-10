import './App.css'
import carIMG from './heroImage/Optimized_car.png'
import groundIMG from './heroImage/ground.png'
import Iframe from 'react-iframe'
import HLCurve from './components/hl-Curve'
import HLDoor from './components/hl-Door'

function App() {
  return (
    <>
      <div id={'hero'}>
        <nav>
          <a href={'#story'}>STORY</a>
          <a href={'#play'}>PLAY</a>
          <a href={'#highlights'}>HIGHLIGHTS</a>
          <a href={'#gallery'}>GALLERY</a>
        </nav>
        <div id="text">
          <h1>Alfa Romeo 33 Stradale</h1>
          <h2>33</h2>
        </div>
        <img
          id={'car'}
          src={carIMG}
          alt={'The legendary Alfa Romeo 33 Stradale'}
        />
        <img id={'ground'} src={groundIMG} alt="" />
      </div>
      <div className={'main'}>
        <div id={'story'}>
          <div className={'story-title'}>
            <p>Italian style and performance</p>
          </div>
          <div className={'story-body'}>
            <p>
              The Alfa Romeo 33 Stradale is a highly sought-after and
              collectible sports car that was produced by the Italian automaker
              Alfa Romeo from 1967 to 1969. Only 18 examples were built, making
              it one of the rarest Alfa Romeo models. The car's unique bodywork,
              which features an elongated nose and sharp angles, was designed by
              Franco Scaglione at Bertone and is based on the Alfa Romeo Tipo 33
              racing car.
              <br /> The 33 Stradale is powered by a 2.0-liter V8 engine that
              produces 230 horsepower and allows the car to reach a top speed of
              over 160 mph. The Alfa Romeo 33 Stradale is a true masterpiece of
              engineering and design, offering a unique blend of speed, style,
              and exclusivity that sets it apart from other sports cars.
            </p>
          </div>
        </div>
        <div id="play">
          {/* insert an iframe here */}
          <Iframe
            url="https://player.vimeo.com/video/453147000?h=58716f252b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            id="play-video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="To The Greater View"
          />
        </div>
        <div id="highlights">
          <div className="hl-card">
            <div className="hl-card-content">
              <h1>Curve Flow</h1>
              <p>
                The Alfa Romeo 33 Stradale features a distinctive nose design
                with curves that flow perfectly from tip to tail, inviting
                onlookers to stare and stare. This design was created by Franco
                Scaglione and was inspired by the Alfa Romeo Tipo 33 racing car.
              </p>
            </div>
            <div className="hl-card-canvas">
              <HLCurve />
            </div>
          </div>

          <div className="hl-card">
            <div className="hl-card-content">
              <h1>Butterfly Door</h1>
              <p>
                The Alfa Romeo 33 Stradale has doors that are hinged at the
                front, allowing them to swing outwards to provide access to the
                car's interior. This design, also known as butterfly doors, is
                rare on production cars and adds to the 33 Stradale's
                distinctive and exotic appearance.
              </p>
            </div>
            <div className="hl-card-canvas">
              <HLDoor />
            </div>
          </div>
          <div className="hl-card">
            <div className="hl-card-content">
              <h1>Purely Hand Made</h1>
              <p>
                The 33 Stradale was built by hand, resulted in differences in
                each model. For example, the first two cars had twin headlights,
                replaced for later cars by single headlights. The position of
                the windscreen wiper, and even the number of them, is another
                thing that differentiates each example from the others.
              </p>
            </div>
          </div>
        </div>
        <div id="gallery"></div>
      </div>
    </>
  )
}

export default App
