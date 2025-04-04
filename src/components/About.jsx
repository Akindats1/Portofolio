function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional workspace" 
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Programming setup"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Code editor"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="space-y-6">
            <p className="text-gray-600">
              Passionate and dedicated software developer with extensive experience in C#, .NET, and graphics designing. With a strong foundation in backend development and a keen eye for design, I bring a unique blend of technical and creative skills to every project.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="C#"
                    className="w-12 h-12 mb-2"
                  />
                  <h4 className="font-semibold">C# Development</h4>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                    alt=".NET"
                    className="w-12 h-12 mb-2"
                  />
                  <h4 className="font-semibold">.NET Framework</h4>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-12 h-12 mb-2"
                  />
                  <h4 className="font-semibold">Version Control</h4>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                    alt="Visual Studio"
                    className="w-12 h-12 mb-2"
                  />
                  <h4 className="font-semibold">Development Tools</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;