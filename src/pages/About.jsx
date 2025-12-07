export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mission */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-accent">Mission</span>
          </h1>
          <p className="text-lg max-w-4xl mx-auto">
            At DE Innovative Solutions, our mission is to break the mold of generic web design. We hand-code custom, high-performance websites that are meticulously crafted to elevate your brand, ensure lightning-fast speed, and provide a seamless user experience—because your business deserves a digital presence that is as unique and reliable as you are.
          </p>
        </section>

        {/* Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Our Story: <span className="text-accent">More Than Just Code</span>
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              It all started with a passion for problem-solving. As a student, I spent countless hours mastering the languages of the web—HTML, CSS, JavaScript—not as a homework assignment, but out of a genuine love for building things from scratch.
            </p>
            <p className="mt-4">
              That passion turned professional when I began freelancing for businesses using popular platforms. But I quickly grew frustrated. I kept bumping into the same walls: templates that limited creativity, plugins that slowed sites down, and an inability to create something truly unique for a client.
            </p>
            <p className="mt-4">
              That frustration sparked an idea. I founded DE Innovative Solutions on a simple principle: businesses deserve better. They deserve websites with unlimited freedom of design, blistering speed, and rock-solid security—the kind you can only get from custom, hand-coded craftsmanship.
            </p>
            <p className="mt-4">
              Today, that principle is at the heart of every project. We don't just write code; we build strategic digital assets that help our clients stand out, connect with their audience, and grow their business. I'm proud to still partner with my first clients and excited to bring that same dedication to your project. Let's build something amazing, together.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            What Sets Us <span className="text-accent">Apart</span>?
          </h2>
          <ul className="max-w-4xl mx-auto space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <strong>Expert Website Development:</strong> Robust and scalable hard-coded websites.
            </li>
          </ul>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Meet the <span className="text-accent">Team</span>!
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dominic */}
            <div className="text-center">
              <img
                src="/assets/Dominic-Avatar.jpg"
                alt="Dominic E. - Founder and Lead Website Developer"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-primary">Dominic E.</h3>
              <p className="text-accent font-medium">Founder and Lead Website Developer</p>
              <p className="mt-2 text-gray-600">
                The expert behind the code, crafting personalized and cutting-edge websites that perfectly reflect your vision and goals.
              </p>
            </div>

            {/* Samantha */}
            <div className="text-center">
              <img
                src="/assets/Samantha-Avatar.jpg"
                alt="Samantha N. - Client Liaison & Admin"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-primary">Samantha N.</h3>
              <p className="text-accent font-medium">Client Liaison & Admin</p>
              <p className="mt-2 text-gray-600">
                Your dedicated point of contact, ensuring seamless communication and a smooth web development journey from start to finish.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}