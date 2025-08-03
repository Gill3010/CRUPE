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

  const methods = [
    {
      name: 'Banco General',
      info: [
        { label: 'Cuenta Corriente', value: '03-78-01-089981-8' },
        { label: 'Nombre', value: 'Multi Servicios TK' },
      ],
      image: 'https://www.bgeneral.com/wp-content/uploads/2025/01/bglogo70-400x72-2-300x54.png',
      link: 'https://www.bgeneral.com/',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Yappy',
      info: [
        { label: 'Directorio', value: '@multiserviciostk' },
        { label: 'Nombre', value: 'Multiservicios TK' },
      ],
      image: 'https://www.yappy.com.pa/wp-content/uploads/2021/06/yappy-landscape-200x50.png',
      link: 'https://www.yappy.com.pa/',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'PayPal',
      info: [
        { label: 'Usuario', value: '@multiserviciostk' },
        { label: 'Ubicación', value: 'Panamá, Panamá' },
      ],
      image: 'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg',
      link: 'https://www.paypal.me/multiserviciostk',
      gradient: 'from-gray-600 to-gray-900',
    },
  ];

  const interbankMethod = {
    name: 'Interbank',
    info: [
      { label: 'Cuenta de Ahorros', value: '898-346625274-5' },
      { label: 'CCI', value: '003-898-013466252745-43' },
      { label: 'Titular', value: 'Poma Gonzáles Sósimo Misael' },
    ],
    image:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYxIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjYxIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iMCIgeT0iMTQiIHdpZHRoPSI3NiIgaGVpZ2h0PSIzNiIgcng9IjMiIGZpbGw9IiMyNDU2QTQiLz4NCjxwYXRoIGQ9Ik05IDE5SDI2VjI3SDlWMTlaTTkgMzFIMjZWMzlIOVYzMVoiIGZpbGw9IndoaXRlIi8+DQo8dGV4dCB4PSI4OCIgeT0iMzMiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMwMEJGNjMiPkludGVyYmFuazwvdGV4dD4NCjwvc3ZnPg==',
    link: 'https://interbank.pe',
    gradient: 'from-green-500 to-emerald-600',
  };

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 aos-animate">
         <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
  Métodos de Pago Disponibles
</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecciona el método que prefieras para realizar tu pago de forma segura.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className={`aos-animate rounded-3xl backdrop-blur-lg border border-white/40 shadow-xl p-6 text-white bg-gradient-to-br ${method.gradient} flex flex-col justify-between min-h-[320px]`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  src={method.image}
                  alt={method.name}
                  className="h-12 object-contain drop-shadow-md bg-white rounded-md p-1"
                />
                <h2 className="text-2xl font-semibold">{method.name}</h2>
                <ul className="text-sm space-y-1 text-white/90 w-full">
                  {method.info.map((line, i) => (
                    <CopyableLine key={i} label={line.label} value={line.value} />
                  ))}
                </ul>
              </div>

              {method.link && (
                <div className="mt-6 flex justify-center">
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20 text-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Ir al Pago</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interbank section */}
<div className="text-center mt-12 mb-6 aos-animate">
  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#0f172a]">
  Método de pago en Perú (Soles – S/)
</h2>
</div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <div
              className={`aos-animate rounded-3xl backdrop-blur-lg border border-white/40 shadow-xl p-6 text-white bg-gradient-to-br ${interbankMethod.gradient} flex flex-col justify-between min-h-[320px]`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  src={interbankMethod.image}
                  alt={interbankMethod.name}
                  className="h-12 object-contain drop-shadow-md bg-white rounded-md p-1"
                />
                <h2 className="text-2xl font-semibold">{interbankMethod.name}</h2>
                <ul className="text-sm space-y-1 text-white/90 w-full">
                  {interbankMethod.info.map((line, i) => (
                    <CopyableLine key={i} label={line.label} value={line.value} />
                  ))}
                </ul>
              </div>

              {interbankMethod.link && (
                <div className="mt-6 flex justify-center">
                  <a
                    href={interbankMethod.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20 text-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Ir al Pago</span>
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
            Si tienes dudas sobre los métodos de pago, contáctanos directamente por{" "}
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