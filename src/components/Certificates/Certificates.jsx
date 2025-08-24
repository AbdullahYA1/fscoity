import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import './Certificates.css';

const Certificates = ({ certificates }) => {
  const handleCertificateClick = (credentialUrl) => {
    if (credentialUrl) {
      window.open(credentialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="certificates"
      className="py-0 pt-48 mt-0 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-right mb-6 mt-4 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
          &gt; Certifications
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 to-green-400/10 blur-xl animate-pulse" />
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm p-6 animate-fade-up certificate-card ${
                cert.credentialUrl ? 'cursor-pointer' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleCertificateClick(cert.credentialUrl)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <Award
                    className="text-cyan-400 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors duration-500 flex items-center">
                        {cert.title}
                        {cert.credentialUrl && (
                          <ExternalLink 
                            className="ml-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                            size={16} 
                          />
                        )}
                      </h3>
                      {cert.code && (
                        <span className="ml-3 text-xs px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded border border-cyan-400/30 font-mono certificate-code">
                          {cert.code}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg text-green-300 font-semibold mb-2">
                      {cert.issuer}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-cyan-400/70">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {cert.date}
                      </span>
                      <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded text-xs border border-cyan-400/30 certificate-type-badge">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital effect */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(90deg, transparent 95%, #00bcd4 100%),
                    linear-gradient(180deg, transparent 95%, #00bcd4 100%)
                  `,
                    backgroundSize: "12px 12px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
