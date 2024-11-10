import myJavaScriptFile from './js.js';


export default function Locations() {
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Ottawa, ON",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <p className="text-3xl uppercase">It's happening all around you</p>
      <div className="flex justify-center pt-24">
        <div className="grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-8 text-2xl lg:grid-cols-2">
          {cities.map((city, i) => (
            <p className="lg:odd:text-left lg:even:text-right" key={i}>
              {city}
            </p>
          ))}
        </div>
      </div>
      <br>
      </br>
      <br>
      </br><br>
      </br><br>
      </br>
      <main>
  <h1>Copy me!</h1>
  <div class="click-to-copy-container">
    <button 
      class="click-to-copy"
      title="Click to Copy Email Address"
    >
      hackclub@gmail.com
    </button>
    <span>Copied!</span>
  </div>
  <a href="mailto:hackclubnairobi@gmail.com" class="click-to-copy-fallback">
  hackclubnairobi@gmail.com
  </a>
  
</main>
    </div>
    
  );
}
