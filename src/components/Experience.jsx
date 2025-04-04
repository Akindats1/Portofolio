function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Professional Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Design work"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Graphic Designer</h3>
              <p className="text-gray-600">TeliyTech LTD | London Area, United Kingdom</p>
              <p className="text-gray-500">September 2024 - Present</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Software development"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Software Developer and Engineer</h3>
              <p className="text-gray-600">Mirza Ghulam qadir Shaheed IT.Lab</p>
              <p className="text-gray-500">June 2023 - Present</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Software engineering"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-600">Ahmadiyya Muslim Community | Nigeria</p>
              <p className="text-gray-500">June 2022 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;