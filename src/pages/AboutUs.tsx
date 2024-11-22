import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Users, Target, Award, Globe2 } from 'lucide-react';

export default function AboutUs() {
  const founders = [
    {
      name: "Salman Bareesh",
      role: "Founder, CTO & CMO",
      bio: "As CTO & CMO, Salman Bareesh brings a unique blend of technical expertise and marketing acumen to Professionals. His innovative approach to technology and deep understanding of digital marketing has been instrumental in shaping our service delivery platform. With extensive experience in the tech industry, Salman leads our technical infrastructure and marketing initiatives, ensuring we stay ahead of industry trends while delivering exceptional value to our clients."
    },
    {
      name: "Ayyaz Rashid",
      role: "Founder & CEO",
      bio: "Ayyaz Rashid serves as the visionary leader of Professionals, bringing years of experience in business development and client relations. His passion for helping professionals succeed has been the driving force behind our company's mission. Under his leadership, Professionals has grown from a startup to a trusted name in LinkedIn premium services, serving clients across multiple industries and regions."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients' success at the heart of everything we do. Our team works tirelessly to understand and meet the unique needs of each client, ensuring they receive personalized solutions that drive real results."
    },
    {
      icon: Target,
      title: "Excellence in Service",
      description: "Quality is non-negotiable at Professionals. We maintain the highest standards in our service delivery, constantly innovating and improving to exceed client expectations."
    },
    {
      icon: Award,
      title: "Integrity & Trust",
      description: "We believe in building lasting relationships based on trust and transparency. Our commitment to ethical business practices and honest communication has earned us the confidence of our clients."
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      description: "While we operate from India, our vision is global. We serve clients worldwide, bringing international best practices and insights to help them succeed in their respective markets."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A051E] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Us
        </h1>

        <div className="space-y-12">
          {/* Company Overview */}
          <section className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Our Story</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in 2023, Professionals emerged from a vision to democratize access to premium LinkedIn services. We recognized that while LinkedIn's premium features offer immense value for professional growth and business development, not everyone could access these tools at standard rates.
              </p>
              <p>
                What started as a solution for a small group of professionals has grown into a trusted service provider, helping individuals and businesses across the globe leverage LinkedIn's powerful features for their professional success.
              </p>
              <p>
                Today, we serve a diverse client base ranging from individual professionals to large enterprises, all while maintaining our core commitment to quality, affordability, and exceptional service.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Mission & Vision</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower professionals and businesses worldwide by making premium LinkedIn services accessible, affordable, and effective for everyone seeking to enhance their professional presence and networking capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the global leader in LinkedIn premium service solutions, known for our innovation, reliability, and commitment to client success.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">Our Leadership</h2>
            <div className="space-y-6">
              {founders.map((founder, index) => (
                <div key={index} className="glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                  <p className="text-purple-400 text-lg mb-4">{founder.role}</p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="glass-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Why Choose Us</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                At Professionals, we differentiate ourselves through our unwavering commitment to client success, technical expertise, and comprehensive support system. Our team of experts ensures smooth service delivery while maintaining the highest standards of security and privacy.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Authorized service provider with direct LinkedIn partnerships</li>
                <li>Flexible payment options to suit your needs</li>
                <li>24/7 customer support for seamless service experience</li>
                <li>Proven track record of client satisfaction</li>
                <li>Competitive pricing without compromising on quality</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}