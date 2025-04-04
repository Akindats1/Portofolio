import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center text-white">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 py-20 z-10" data-aos="fade-up">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://github.com/Akindats1/MyPortfolio/blob/main/src/components/assests/AbdulrasheedBello.jpg"
              alt="Profile"
              className="rounded-full w-32 h-32 mx-auto border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">AbdulRasheed Bello</h1>
          <p className="text-xl mb-8">.NET Software Developer | Graphics Designer | Civil Engineer</p>
          <Link 
            to="contact" 
            smooth={true} 
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition cursor-pointer inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
