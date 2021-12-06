import { tw } from 'twind';

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-red to-pink shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <video loop autoPlay muted src="vid.mp4" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
