import "./hero.css";


const Hero = () => {
  return <div className='hero'>Hero
  <div className='hSection left'>Hero</div>
    <h1 className="hTitle">
      Hey There,
      <br />
        <span>I'm Jordan!</span>
        <div className="awards">
          <h2>Top Rated Gooner</h2>
          <p>Best Gooner NA</p>
          <div> className="awardList"
            <img src="/award1.png" alt="" ></img>
            <img src="/award1.png" alt="" ></img>
            <img src="/award1.png" alt="" ></img>
          </div>
        </div>
        {/* SCROLL SVG */}
        <svg>
          
        </svg>
    </h1>
  <div className='hSection right'>Hero</div>
  </div>;
};

export default Hero