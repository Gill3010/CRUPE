import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileText, Upload, User, Mail, MapPin, CreditCard } from 'lucide-react';

// Componentes movidos fuera del render principal para evitar redefinición
const InputField = ({ name, label, type = 'text', required = false, placeholder, icon: Icon, children, formData, handleInputChange, errors, showAnimations }) => (
  <div className="space-y-2" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '100' })}>
    <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
      {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
      <span>{label}</span>
      {required && <span className="text-pink-400">*</span>}
    </label>
    {children || (
      <input
        type={type}
        name={name}
        value={formData[name] || ''}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full bg-white/5 text-white placeholder-white/50 rounded-xl p-3 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 ${
          errors[name] ? 'border-red-400' : 'border-white/20 hover:border-white/40'
        }`}
      />
    )}
    {errors[name] && (
      <p className="text-red-400 text-xs">{errors[name]}</p>
    )}
  </div>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.elementType,
  children: PropTypes.node,
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  showAnimations: PropTypes.bool.isRequired,
};

const SelectField = ({ name, label, options, required = false, icon: Icon, formData, handleInputChange, errors, showAnimations }) => (
  <div className="space-y-2" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '200' })}>
    <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
      {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
      <span>{label}</span>
      {required && <span className="text-pink-400">*</span>}
    </label>
    <select
      name={name}
      value={formData[name] || ''}
      onChange={handleInputChange}
      className={`w-full bg-white/5 text-white rounded-xl p-3 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 ${
        errors[name] ? 'border-red-400' : 'border-white/20 hover:border-white/40'
      }`}
    >
      <option value="" className="bg-slate-800">Seleccionar...</option>
      {options.map(option => (
        <option key={option} value={option} className="bg-slate-800">{option}</option>
      ))}
    </select>
    {errors[name] && (
      <p className="text-red-400 text-xs">{errors[name]}</p>
    )}
  </div>
);

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  required: PropTypes.bool,
  icon: PropTypes.elementType,
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  showAnimations: PropTypes.bool.isRequired,
};

const FileField = ({ name, label, required = false, accept, icon: Icon, formData, handleFileChange, errors, showAnimations }) => (
  <div className="space-y-2" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '300' })}>
    <label className="flex items-center space-x-2 text-sm font-medium text-white/90">
      {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
      <span>{label}</span>
      {required && <span className="text-pink-400">*</span>}
    </label>
    <div className="relative">
      <input
        type="file"
        name={name}
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
        id={name}
      />
      <label
        htmlFor={name}
        className={`w-full bg-white/5 text-white rounded-xl p-3 border transition-all duration-300 hover:bg-white/10 cursor-pointer flex items-center justify-center space-x-2 ${
          errors[name] ? 'border-red-400' : 'border-white/20 hover:border-white/40'
        }`}
      >
        <Upload className="w-4 h-4" />
        <span>{formData[name] ? formData[name].name : 'Seleccionar archivo'}</span>
      </label>
    </div>
    {errors[name] && (
      <p className="text-red-400 text-xs">{errors[name]}</p>
    )}
  </div>
);

FileField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  accept: PropTypes.string,
  icon: PropTypes.elementType,
  formData: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  showAnimations: PropTypes.bool.isRequired,
};

const CongressForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    pais: '',
    cedula: '',
    pasaporte: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    celular : '',
    areaConocimiento: '',
    tipoParticipacion: '',
    tema: '',
    resumenCientifico: null,
    comprobantePago: null
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAnimations, setShowAnimations] = useState(true);
  const aosInitialized = useRef(false);

  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== 'undefined' && !aosInitialized.current) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
        script.onload = () => {
          setTimeout(() => {
            window.AOS.init({ 
              duration: 1000, 
              once: true,
              offset: 100
            });
            
            // Después de las animaciones, desactivar el estado de animaciones
            setTimeout(() => {
              setShowAnimations(false);
              
              // Desactivar completamente AOS
              window.removeEventListener('scroll', window.AOS.refresh);
              window.removeEventListener('resize', window.AOS.refresh);
              window.AOS.refresh = () => {};
              window.AOS.refreshHard = () => {};
              window.AOS.init = () => {};
              
              if (window.AOS.observer) {
                window.AOS.observer.disconnect();
              }
            }, 1500);
            
            aosInitialized.current = true;
          }, 100);
        };
        document.head.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
        document.head.appendChild(link);
      }
    };

    initAOS();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0] || null
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'email', 'pais', 'cedula', 'primerNombre', 'primerApellido', 'celular',
      'areaConocimiento', 'tipoParticipacion', 'tema'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es requerido';
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.resumenCientifico) {
      newErrors.resumenCientifico = 'El resumen científico es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if(value !== null) {
          data.append(key, value);
        }
      });

      const response = await fetch('https://relaticpanama.org/_events/api/submit_inscriptions.php', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (result.success) {
        alert('¡Inscripción enviada exitosamente!');
        setFormData({
          email: '',
          pais: '',
          cedula: '',
          pasaporte: '',
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',
          celular : '',
          areaConocimiento: '',
          tipoParticipacion: '',
          tema: '',
          resumenCientifico: null,
          comprobantePago: null
        });
        setErrors({});
      } else {
        alert('❌ Error: ' + result.message);
      }
    } catch (error) {
      alert('❌ Ocurrió un error al enviar la inscripción.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-conic from-purple-400/5 via-blue-400/5 to-purple-400/5"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-16" {...(showAnimations && { 'data-aos': 'fade-down' })}>
          <h1 className="text-5xl font-bold text-white mb-4">
  III Congreso de Investigaciones Cualitativas
</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Completa tu inscripción para participar en este evento académico de alto nivel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contacto */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" {...(showAnimations && { 'data-aos': 'zoom-in' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>Información de Contacto</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="email"
                label="Email"
                type="email"
                required
                placeholder="tu@email.com"
                icon={Mail}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <SelectField
                name="pais"
                label="País"
                required
                options={['Panamá', 'Perú', 'Colombia', 'Argentina', 'Chile', 'España', 'Estados Unidos', 'Cuba', 'Brasil']}
                icon={MapPin}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
            </div>
          </div>

          {/* Identificación */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '100' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>Identificación</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="cedula"
                label="Cédula / DNI"
                required
                placeholder="8-123-456"
                icon={FileText}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <InputField
                name="pasaporte"
                label="Pasaporte / DNI"
                placeholder="A1234567"
                icon={FileText}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
            </div>
          </div>

          {/* Información Personal */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '200' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <User className="w-5 h-5 text-cyan-400" />
              <span>Información Personal</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="primerNombre"
                label="Primer Nombre"
                required
                placeholder="Juan"
                icon={User}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <InputField
                name="segundoNombre"
                label="Segundo Nombre"
                placeholder="Carlos"
                icon={User}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <InputField
                name="primerApellido"
                label="Primer Apellido"
                required
                placeholder="Pérez"
                icon={User}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <InputField
                name="segundoApellido"
                label="Segundo Apellido"
                placeholder="González"
                icon={User}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <InputField
                name="celular"
                label="Celular"
                type="tel"
                required
                placeholder="(+507) 6000-0000"
                icon={User}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
            </div>
            <div className="mt-6">
              <InputField
                name="areaConocimiento"
                label="Área de Conocimiento o Trabajo"
                required
                placeholder="Educación, Psicología, Sociología, etc."
                icon={User}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
            </div>
          </div>

          {/* Tipo de participación */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '300' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>Participación</span>
            </h2>
            <div className="space-y-6">
              <SelectField
                name="tipoParticipacion"
                label="Tipo de Participación"
                required
                options={['Ponencia', 'Conferencia', 'Taller', 'Panelista', 'Facilitador de Taller', 'Libros']}
                icon={FileText}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <InputField
                name="tema"
                label="Tema"
                required
                placeholder="Ingresa el tema de tu participación"
                icon={FileText}
                formData={formData}
                handleInputChange={handleInputChange}
                errors={errors}
                showAnimations={showAnimations}
              />
            </div>
          </div>

          {/* Archivos */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '400' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Upload className="w-5 h-5 text-cyan-400" />
              <span>Documentos</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileField
                name="resumenCientifico"
                label="Resumen Científico (Formato Word o PDF)"
                required
                accept=".doc,.docx,.pdf"
                icon={FileText}
                formData={formData}
                handleFileChange={handleFileChange}
                errors={errors}
                showAnimations={showAnimations}
              />
              <FileField
                name="comprobantePago"
                label="Comprobante de Pago"
                accept="image/*,.pdf"
                icon={CreditCard}
                formData={formData}
                handleFileChange={handleFileChange}
                errors={errors}
                showAnimations={showAnimations}
              />
            </div>
          </div>

          {/* Enviar */}
          <div className="text-center" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '500' })}>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                loading ? 'cursor-not-allowed opacity-50' : 'hover:scale-110 active:scale-95'
              }`}
            >
              {loading ? 'Enviando...' : '🚀 Enviar Inscripción'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressForm;