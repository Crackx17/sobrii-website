import React, { useState } from 'react';
import {
  Monitor,
  ArrowDown,
  Calculator,
  PieChart,
  Users,
  Building2,
  MessageSquare,
  Mail,
  ChevronRight,
  Shield,
  Clock,
  Zap,
  ChevronDown,
} from 'lucide-react';

function Section({ children, className = '', bg = 'bg-white' }) {
  return (
    <section
      className={`h-screen snap-start flex items-center justify-center px-4 md:px-8 ${bg} ${className}`}
    >
      <div className="max-w-6xl w-full mx-auto">{children}</div>
    </section>
  );
}

export default function App() {
  const [pcCount, setPcCount] = useState<number>(500);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section */}
      <Section bg="bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">sobrii</h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Revolutionizing PC fleet management for a sustainable future
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Calculate your savings
          </button>
        </div>
        <ArrowDown
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          size={32}
        />
      </Section>

      {/* PC Fleet Sustainability Issue */}
      <Section bg="bg-white-50">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          The Challenge
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <PieChart className="w-12 h-12 mb-4 text-green-600" />
            <h3 className="text-2xl font-bold mb-4">40% Energy Waste</h3>
            <p className="text-gray-600">
              Current PC fleet management practices result in significant energy
              waste during non-working hours.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Monitor className="w-12 h-12 mb-4 text-green-600" />
            <h3 className="text-2xl font-bold mb-4">Hardware Lifespan</h3>
            <p className="text-gray-600">
              Improper power management leads to reduced hardware lifespan and
              increased replacement costs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Calculator className="w-12 h-12 mb-4 text-green-600" />
            <h3 className="text-2xl font-bold mb-4">Rising Costs</h3>
            <p className="text-gray-600">
              Increasing energy prices and hardware costs impact your bottom
              line significantly.
            </p>
          </div>
        </div>
      </Section>

      {/* What is Sobrii */}
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              What is Sobrii?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Sobrii is an intelligent PC fleet management solution that
              optimizes power consumption while extending hardware lifespan.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-lg">
                <Shield className="w-6 h-6 text-green-600" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Clock className="w-6 h-6 text-green-600" />
                <span>24/7 monitoring & optimization</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <Zap className="w-6 h-6 text-green-600" />
                <span>Instant deployment</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* ROI Section */}
      <Section bg="bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Return on Investment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FF8B8B] text-white p-8 rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-4">40%</div>
              <div className="text-xl">Energy Cost Reduction</div>
            </div>
            <div className="bg-[#7DDBB6] text-white p-8 rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-4">60%</div>
              <div className="text-xl">Carbon Footprint Cut</div>
            </div>
            <div className="bg-[#8B9EFF] text-white p-8 rounded-3xl transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-4">1.5y</div>
              <div className="text-xl">Payback Period</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[
            {
              name: 'Sarah Chen',
              role: 'CEO',
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80',
            },
            {
              name: 'David Kumar',
              role: 'CTO',
              image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
            },
            {
              name: 'Emma Wilson',
              role: 'Head of Design',
              image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
            },
            {
              name: 'Alex Rivera',
              role: 'Lead Developer',
              image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
            },
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-square w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Clients */}
      <Section bg="bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          Trusted By
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <Building2 className="w-12 h-12 text-gray-400" />
              </div>
            ))}
        </div>
      </Section>

      {/* Calculator */}
      <Section>
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            Calculate Your Savings
          </h2>
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of PCs
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={pcCount}
                  onChange={(e) => setPcCount(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-2xl font-bold mt-2">
                  {pcCount} PCs
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-[#FF8B8B] text-2xl font-bold">
                    €{(pcCount * 40).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-[#7DDBB6] text-2xl font-bold">
                    {(pcCount * 0.5).toFixed(1)}t
                  </div>
                  <div className="text-sm text-gray-600">CO₂ Reduced</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-[#8B9EFF] text-2xl font-bold">1.5y</div>
                  <div className="text-sm text-gray-600">ROI Period</div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Get Detailed Report
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-gray-50">
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How does Sobrii work?',
                a: 'Sobrii uses advanced algorithms to analyze PC usage patterns and automatically optimizes power settings for maximum efficiency.',
              },
              {
                q: "What's the installation process?",
                a: 'Our team handles the entire installation process remotely, with zero disruption to your operations.',
              },
              {
                q: 'Is it secure?',
                a: 'Yes, Sobrii operates entirely within your network and meets enterprise-grade security standards.',
              },
              {
                q: 'What support do you offer?',
                a: 'We provide 24/7 technical support and regular system updates to ensure optimal performance.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-6 flex justify-between items-center">
                  <h3 className="text-xl font-bold">{faq.q}</h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section bg="bg-black text-white">
        <div className="max-w-xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-white focus:border-transparent"
              ></textarea>
            </div>
            <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}
