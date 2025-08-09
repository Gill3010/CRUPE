 import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ExternalLink, Copy, CheckCircle } from 'lucide-react';

const CopyableLine = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying:', err);
    }
  };

  return (
    <li className="flex items-center justify-between gap-2">
      <span className="text-left">{label}: <strong>{value}</strong></span>
      <button
        onClick={handleCopy}
        className="text-white/80 hover:text-white transition"
        aria-label="Copiar"
      >
        {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
      </button>
    </li>
  );
};

CopyableLine.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const PaymentMethods = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.aos-animate');
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const bancoNacionalMethod = {
    name: 'Banco Nacional de Panamá',
    info: [
      { label: 'Tipo de Cuenta', value: 'Cuenta Corriente' },
      { label: 'Nombre de Cuenta', value: 'UPMA POSTGRADO Y MAESTRÍA' },
      { label: 'Número de Cuenta', value: '10000019807' }
    ],
    image: 'https://www.banconal.com.pa/wp-content/uploads/2024/04/logo_logobnpblanco.webp',
    link: 'https://www.banconal.com.pa',
    gradient: 'from-blue-600 to-blue-800',
  };

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 aos-animate">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Método de Pago
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Información para realizar tu pago de forma segura.
          </p>
        </div>

        {/* Banco Nacional Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div
              className={`aos-animate rounded-3xl backdrop-blur-lg border border-white/40 shadow-xl p-6 text-white bg-gradient-to-br ${bancoNacionalMethod.gradient} flex flex-col justify-between min-h-[320px]`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  src={bancoNacionalMethod.image}
                  alt={bancoNacionalMethod.name}
                  className="h-12 object-contain"
                />
                <h2 className="text-2xl font-semibold">{bancoNacionalMethod.name}</h2>
                <ul className="text-sm space-y-1 text-white/90 w-full">
                  {bancoNacionalMethod.info.map((line, i) => (
                    <CopyableLine key={i} label={line.label} value={line.value} />
                  ))}
                </ul>
              </div>

              {bancoNacionalMethod.link && (
                <div className="mt-6 flex justify-center">
                  <a
                    href={bancoNacionalMethod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20 text-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Ir al pago</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 aos-animate">
          <p className="text-gray-500 text-sm">
            Si tienes dudas sobre el método de pago, contáctanos directamente por{" "}
            <a
              href="https://wa.me/50766751782"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              WhatsApp
            </a>{" "}
            o{" "}
            <a
              href="mailto:gerencia@relaticpanama.org"
              className="text-blue-500 hover:underline"
            >
              correo
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;