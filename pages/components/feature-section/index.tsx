import { tw } from 'twind';
// import Check from 'constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change the game
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              {/* <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} /> */}
              <div className={tw(`ml-4 text-xl`)}>Realtime Dashboard</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              A Realtime dashboard runs on your own computer, allowing you to see telemetry including tire temps, g force and coordinates
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              {/* <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} /> */}
              <div className={tw(`ml-4 text-xl`)}>Laptime Lobby Leaderboard</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Connect to our laptime lobbies with your friends to see how your lap times stack up against eachother
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              {/* <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} /> */}
              <div className={tw(`ml-4 text-xl`)}>Make Your Own Project</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              All the data we send is visible to you when you create an iot-ensemble account allowing you to create your own projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
