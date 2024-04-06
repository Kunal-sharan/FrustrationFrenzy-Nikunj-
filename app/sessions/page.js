import BlurredVideoBackground from '../Components/BlurredVideoBackground';

const IndexPage = () => {
  return (
    <div>
      <BlurredVideoBackground videoSrc="/events_video.mp4" />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-16 justify-items-center items-center">
            <img src="/img1.jpeg" alt="Image 1" className="h-64 w-full object-cover rounded-lg" />
            <img src="/img2.jpeg" alt="Image 2" className="h-64 w-full object-cover rounded-lg" />
            <img src="/img3.jpeg" alt="Image 3" className="h-64 w-full object-cover rounded-lg" />
            <img src="/img4.jpeg" alt="Image 4" className="h-64 w-full object-cover rounded-lg" />
            <img src="/img5.jpeg" alt="Image 5" className="h-64 w-full object-cover rounded-lg" />
            <img src="/img6.jpeg" alt="Image 6" className="h-64 w-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
