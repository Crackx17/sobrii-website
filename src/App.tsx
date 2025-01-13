import React, { useState, useEffect, useRef } from "react";
import {
  ArrowDown,
  Cog,
  Zap,
  Building2,
  ChevronDown,
  Leaf,
  Laptop,
  Cpu,
  BatteryWarning,
  ShieldCheck,
} from "lucide-react";

function Section({ 
  children, 
  className = '', 
  bg = 'bg-white' 
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section
      className={`h-screen snap-start flex items-center justify-center px-4 md:px-8 ${bg} ${className}`}
    >
      <div className="max-w-6xl w-full mx-auto">{children}</div>
    </section>
  );
}

function CountUpNumber({ 
  end, 
  duration = 2000 
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef} className="text-7xl md:text-8xl font-bold">
      {count.toLocaleString()}
    </span>
  );
}

function TrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const partners = [
    { name: 'Accenture', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300&h=100&q=80' },
    { name: 'Deloitte', logo: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=300&h=100&q=80' },
    { name: 'KPMG', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&h=100&q=80' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?auto=format&fit=crop&w=300&h=100&q=80' },
    { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92?auto=format&fit=crop&w=300&h=100&q=80' },
    { name: 'SAP', logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=300&h=100&q=80' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === partners.length - 3 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div className="space-y-16">
      {/* Deployed PCs Counter */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl text-gray-600 font-medium">
            PCs actuellement déployés
          </h3>
          <CountUpNumber end={14865} />
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Nos clients et partenaires font confiance à Sobrii pour optimiser leur parc informatique
        </p>
      </div>

      {/* Partners Carousel */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 px-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-32 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [pcCount, setPcCount] = useState<number>(500);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const calculatorRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState("");

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Ici vous pouvez ajouter l'appel à votre API
      console.log("Email soumis:", email);
      // Par exemple:
      // await fetch('votre-api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // });
      
      setShowNewsletter(false);
      setEmail("");
      alert("Merci pour votre inscription !");
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Section bg="bg-black text-white">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-9xl font-bold mb-6 md:mb-8">sobrii</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-8">La solution pour une sobriété numérique intelligente et rentable. <br></br>
          Réduisez l’empreinte carbone, diminuez vos coûts énergétiques et prolongez la durée de vie de vos PC</h2>
        
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button
              onClick={scrollToCalculator}
              className="w-full md:w-auto bg-white text-black px-6 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculer le ROI
            </button>
            <a
              href="https://calendly.com/karim-aul0/sobrii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white text-black px-6 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Demander une démo
            </a>
          </div>
        </div>
        <ArrowDown
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
          size={32}
        />
      </Section>

      {/* Les Enjeux Section */}
      <Section bg="bg-white-50">
        <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-10 text-center">
          Les Enjeux 
        </h2>

        <h3 className="text-lg md:text-2xl font-bold mb-8 md:mb-10 text-center px-4">
        Gérer efficacement son parc informatique est un défi stratégique pour les organisations 
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300"
            >
              <div className="w-12 h-12 mx-auto">
                {index === 0 && <Zap className="text-black-600" />}
                {index === 1 && <Leaf className="text-black-600" />}
                {index === 2 && <Laptop className="text-black-600" />}
                {index === 3 && <Cpu className="text-black-600" />}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {index % 4 === 0 && "Optimiser la consommation énergétique"}
                {index % 4 === 1 && "Réduire l'empreinte carbone"}
                {index % 4 === 2 && "Prolonger la durée de vie des PC"}
                {index % 4 === 3 && "Contrôler l'obsolescence des composants"}
              </h3>
              <p className="text-gray-600 text-center text-sm md:text-base">
                {index % 4 === 0 &&
                  "Réduisez les coûts énergétiques grâce à une optimisation intelligente. Analysez les usages réels, adaptez la consommation électrique aux besoins"}
                {index % 4 === 1 &&
                  "Agissez sur la durabilité en réduisant les émissions liées à vos équipements. Prolongez la durée de vie des ordinateurs et diminuez l’impact environnemental jusqu’à 50 %."}
                {index % 4 === 2 &&
                  "Maximisez la performance et la durabilité de vos équipements. Allongez la durée de vie des ordinateurs de 2 ans grâce à une gestion prédictive et réduisez les coûts de remplacement."}
                {index % 4 === 3 &&
                  "Gardez le contrôle sur vos composants. Anticipez les pannes, réduisez les interruptions et optimisez vos coûts avec une gestion proactive des garanties et des cycles de vie."}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Que fait sobrii Section */}
      <Section>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8">
              Que fait sobrii ?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 px-4 md:px-0">
              sobrii est une solution Numérique Responsable qui réduit la consommation électrique, l'empreinte carbone des parcs PC et supervise l'obsolescence des composants.
            </p>
            <div className="space-y-4 px-4 md:px-0">
              <div className="flex items-center gap-4 text-base md:text-lg">
                <Zap className="w-6 h-6 flex-shrink-0 text-black-600" />
                <span>Mesure précise de la consommation électrique et carbone</span>
              </div>
              <div className="flex items-center gap-4 text-base md:text-lg">
                <Cog className="w-6 h-6 flex-shrink-0 text-black-600" />
                <span>Optimisation des machines (durabilité et consommation)</span>
              </div>
              <div className="flex items-center gap-4 text-base md:text-lg">
                <BatteryWarning className="w-6 h-6 flex-shrink-0 text-black-600" />
                <span>Maintenance prédictive des composants</span>
              </div>
              <div className="flex items-center gap-4 text-base md:text-lg">
                <ShieldCheck className="w-6 h-6 flex-shrink-0 text-black-600" />
                <span>Solution éco-conçu / bas carbone - sans impact sur les PC</span>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0 px-4 md:px-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Dashboard"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </Section>

      {/* Calculator Section */}
      <Section>
        <div ref={calculatorRef} className="max-w-2xl mx-auto w-full px-4 md:px-0">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-12 text-center">
            Calculer vos économies 
          </h2>
          <h3 className="text-lg md:text-2xl font-bold mb-8 md:mb-12 text-center">
            Hyptothèse sur un parc avec 70% de PC Portables avec une durée de vie moyenne de 4,5 ans 
          </h3>
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl shadow-lg">
            <div className="space-y-6 md:space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de PC 
                </label>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="100"
                  value={pcCount}
                  onChange={(e) => setPcCount(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-xl md:text-2xl font-bold mt-2">
                  {pcCount.toLocaleString('fr-FR')} PC
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-[#FF8B8B] text-xl md:text-2xl font-bold">
                    {(pcCount * 58.95).toLocaleString()} €
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-[#7DDBB6] text-xl md:text-2xl font-bold">
                    {(pcCount * 0.023).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">t CO₂ Reduced</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-[#8B9EFF] text-xl md:text-2xl font-bold">2y</div>
                  <div className="text-sm text-gray-600">Lifespan extension</div>
                </div>
              </div>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-center block"
              >
                Get Detailed Report
              </a>
            </div>
          </div>
        </div>
      </Section>

{/* Pricing Section */}
<Section bg="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Tarification simple</h2>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Annual License */}
            <div className="bg-white rounded-3xl p-8 shadow-xl h-[500px] flex flex-col">
              <div className="text-center mb-6 h-[72px]">
                <h3 className="text-2xl font-bold mb-2">Licence Annuelle</h3>
                <p className="text-gray-600">Renouvellement annuel</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-black rounded-2xl">
                <div className="text-6xl font-bold">12€</div>
                <div className="text-xl text-gray-600 mt-3">par PC/an</div>
              </div>
            </div>

            {/* Perpetual License */}
            <div className="bg-white rounded-3xl p-8 shadow-xl h-[500px] flex flex-col">
              <div className="text-center mb-6 h-[72px]">
                <h3 className="text-2xl font-bold mb-2">Licence Perpétuelle</h3>
                <p className="text-gray-600">Paiement unique selon l'âge du PC</p>
              </div>
              <div className="flex-1 border-2 border-black rounded-2xl p-8 flex items-center">
                <div className="space-y-6 w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Moins d'1 an</span>
                    <span className="text-3xl font-bold">48€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">1-2 ans</span>
                    <span className="text-3xl font-bold">36€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">2-3 ans</span>
                    <span className="text-3xl font-bold">24€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">4+ ans</span>
                    <span className="text-3xl font-bold">12€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12">
            Tous les prix sont hors TVA. Remises sur volume disponibles.
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {[
            {
              name: "Karim Manar",
              role: "CEO",
              image: "src/images/team/karim.jpeg",
            },
            {
              name: "William Bories",
              role: "CTO",
              image: "src/images/team/william.jpeg",
            },
            {
              name: "Arthur Teboul",
              role: "CPO",
              image: "src/images/team/arthur.jpeg"
            },
            {
              name: "Mitsuru Furuta",
              role: "Lead Developer",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
            },
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-square w-32 md:w-48 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
              <p className="text-sm md:text-base text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Clients Section */}
      <Section bg="bg-gray-50">
        <TrustSection />
      </Section>

      {/* FAQ Section */}
      <Section bg="bg-gray-50">
  <div className="max-w-3xl mx-auto w-full px-4 md:px-0">
    <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center">
      FAQ
    </h2>
    <div className="space-y-4">
      {[
        {
          q: "Comment fonctionne Sobrii ?",
          a: "Sobrii analyse les habitudes d’utilisation des PC et ajuste automatiquement leurs paramètres énergétiques pour maximiser l’efficacité et réduire les coûts.",
        },
        {
          q: "Quel est le processus d'installation ?",
          a: "L'installation est simple et rapide. Notre équipe gère tout à distance sans perturber vos opérations.",
        },
        {
          q: "Quels types de machines sont compatibles ?",
          a: "Sobrii est compatible avec les systèmes Windows. Une compatibilité avec Mac, Linux et Chromebook est en cours de développement.",
        },
        {
          q: "Est-ce que c'est sécurisé ?",
          a: "Absolument. Sobrii respecte les normes de sécurité de niveau entreprise et garantit la confidentialité de vos données.",
        },
        {
          q: "Quand puis-je voir des résultats concrets ?",
          a: "Vous pouvez observer une réduction des coûts énergétiques et de l’empreinte carbone dès les premiers mois d’utilisation.",
        },
        {
          q: "Sobrii est-il adaptable à mon entreprise ?",
          a: "Oui, Sobrii est conçu pour répondre aux besoins spécifiques de votre organisation, peu importe sa taille ou son secteur d’activité.",
        },
        {
          q: "Quel support est proposé ?",
          a: "Nous offrons un support technique 24/7 et des mises à jour régulières pour garantir des performances optimales.",
        },
      ].map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          onClick={() => setOpenFaq(openFaq === i ? null : i)}
        >
          <div className="p-4 md:p-6 flex justify-between items-center">
            <h3 className="text-lg md:text-xl font-bold pr-4">{faq.q}</h3>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
                openFaq === i ? "rotate-180" : ""
              }`}
            />
          </div>
          {openFaq === i && (
            <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-600">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  </div>
</Section>

      {/* Contact Section */}
      <Section bg="bg-black text-white">
        <div className="max-w-xl mx-auto w-full px-4 md:px-0">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 text-center">
            Get In Touch
          </h2>
          <form className="space-y-4 md:space-y-6">
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

      {/* Move newsletter modal here, before closing div */}
      {showNewsletter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Restez informé !</h2>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres.
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              />
              <button 
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
              >
                S'inscrire
              </button>
            </form>
            <button
              onClick={() => setShowNewsletter(false)}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Non merci
            </button>
          </div>
        </div>
      )}
    </div>
  );
}