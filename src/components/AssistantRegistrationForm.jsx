import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileText, Upload, User, Mail, MapPin, CreditCard } from 'lucide-react';

const InputField = ({ name, label, type = 'text', required = false, placeholder, icon: Icon, children, formData, handleInputChange, errors, showAnimations }) => (
  <div className="space-y-2" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '100' })}>
    <label className="flex items-center space-x-2 text-sm font-medium text-white">
      {Icon && <Icon className="w-4 h-4 text-[#00BCD4]" />}
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
        className={`w-full bg-[#0a2d4d] text-white placeholder-white rounded-xl p-3 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-[#00BCD4] ${
          errors[name] ? 'border-red-400' : 'border-[#00BCD4] hover:border-white'
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
    <label className="flex items-center space-x-2 text-sm font-medium text-white">
      {Icon && <Icon className="w-4 h-4 text-[#00BCD4]" />}
      <span>{label}</span>
      {required && <span className="text-pink-400">*</span>}
    </label>
    <select
      name={name}
      value={formData[name] || ''}
      onChange={handleInputChange}
      className={`w-full bg-[#0a2d4d] text-white rounded-xl p-3 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-[#00BCD4] ${
        errors[name] ? 'border-red-400' : 'border-[#00BCD4] hover:border-white'
      }`}
    >
      <option value="" className="bg-[#0a2d4d]">Seleccionar...</option>
      {options.map(option => (
        <option key={option} value={option} className="bg-[#0a2d4d]">{option}</option>
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
    <label className="flex items-center space-x-2 text-sm font-medium text-white">
      {Icon && <Icon className="w-4 h-4 text-[#00BCD4]" />}
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
        className={`w-full bg-[#0a2d4d] text-white rounded-xl p-3 border transition-all duration-300 hover:bg-[#0a2d4d]/90 cursor-pointer flex items-center justify-center space-x-2 ${
          errors[name] ? 'border-red-400' : 'border-[#00BCD4] hover:border-white'
        }`}
      >
        <Upload className="w-4 h-4 text-[#00BCD4]" />
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

const AssistantRegistrationForm = () => {
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
    tipoParticipacion: 'Asistente',
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
            
            setTimeout(() => {
              setShowAnimations(false);
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
      'areaConocimiento', 'tipoParticipacion'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es requerido';
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
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

      const response = await fetch('https://relaticpanama.org/_events/api/submit_assistance.php', {
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
          tipoParticipacion: 'Asistente',
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
    <div className="min-h-screen bg-[#0a2d4d] relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-16" {...(showAnimations && { 'data-aos': 'fade-down' })}>
          <h1 className="text-5xl font-bold text-white mb-4">
            III Congreso de Investigaciones Cualitativas
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Formulario de inscripción exclusivo para asistentes
          </p>
        </div>

        <div className="space-y-8">
          {/* Contacto */}
          <section className="bg-[#0a2d4d] rounded-2xl p-6 border border-[#00BCD4] hover:border-white transition-colors duration-300" {...(showAnimations && { 'data-aos': 'zoom-in' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-[#00BCD4]" />
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
          </section>

          {/* Identificación */}
          <section className="bg-[#0a2d4d] rounded-2xl p-6 border border-[#00BCD4] hover:border-white transition-colors duration-300" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '100' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#00BCD4]" />
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
          </section>

          {/* Información Personal */}
          <section className="bg-[#0a2d4d] rounded-2xl p-6 border border-[#00BCD4] hover:border-white transition-colors duration-300" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '200' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <User className="w-5 h-5 text-[#00BCD4]" />
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
          </section>

          {/* Tipo de participación */}
          <section className="bg-[#0a2d4d] rounded-2xl p-6 border border-[#00BCD4] hover:border-white transition-colors duration-300" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '300' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#00BCD4]" />
              <span>Participación</span>
            </h2>
            <div className="space-y-6">
              <div className="space-y-2" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '200' })}>
                <label className="flex items-center space-x-2 text-sm font-medium text-white">
                  <FileText className="w-4 h-4 text-[#00BCD4]" />
                  <span>Tipo de Participación</span>
                  <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  name="tipoParticipacion"
                  value="Asistente"
                  readOnly
                  className="w-full bg-[#0a2d4d] text-white rounded-xl p-3 border border-[#00BCD4] cursor-not-allowed opacity-70"
                />
              </div>
            </div>
          </section>

          {/* Archivos */}
          <section className="bg-[#0a2d4d] rounded-2xl p-6 border border-[#00BCD4] hover:border-white transition-colors duration-300" {...(showAnimations && { 'data-aos': 'zoom-in', 'data-aos-delay': '400' })}>
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Upload className="w-5 h-5 text-[#00BCD4]" />
              <span>Documentos</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
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
          </section>

          {/* Enviar */}
          <div className="text-center" {...(showAnimations && { 'data-aos': 'fade-up', 'data-aos-delay': '500' })}>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`bg-[#00BCD4] rounded-full px-8 py-4 text-[#0a2d4d] text-lg font-semibold transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] ${
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

export default AssistantRegistrationForm;
