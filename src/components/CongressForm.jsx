import { useState, useEffect } from 'react';
import { FileText, Upload, User, Mail, MapPin, Camera, CreditCard } from 'lucide-react';

const CongressForm = () => {
  const [formData, setFormData] = useState({
    // Contacto
    email: '',
    pais: '',
    // Identificación
    cedula: '',
    pasaporte: '',
    // Información Personal
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    edad: '',
    genero: '',
    gradoAcademico: '',
    actividadActual: '',
    areaConocimiento: '',
    // Afiliación
    afiliacion: '',
    // Archivos
    fotoCarnet: null,
    comprobantePago: null
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Inicializar AOS
    const initAOS = () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
        script.onload = () => {
          window.AOS.init({ 
            duration: 1000, 
            once: true,
            offset: 100
          });
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
    
    // Limpiar error si existe
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
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Campos requeridos
    const requiredFields = [
      'email', 'pais', 'cedula', 'primerNombre', 'primerApellido', 
      'edad', 'genero', 'gradoAcademico', 'actividadActual', 
      'areaConocimiento', 'afiliacion'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Este campo es requerido';
      }
    });

    // Validar email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar foto carnet
    if (!formData.fotoCarnet) {
      newErrors.fotoCarnet = 'La foto tamaño carnet es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Formulario enviado:', formData);
      alert('¡Inscripción enviada exitosamente!');
    }
  };

  const InputField = ({ name, label, type = 'text', required = false, placeholder, icon: Icon, children }) => (
    <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
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

  // Validación de props para InputField
  InputField.propTypes = {
    name: String,
    label: String,
    type: String,
    required: Boolean,
    placeholder: String,
    icon: Function,
    children: Object
  };

  const SelectField = ({ name, label, options, required = false, icon: Icon }) => (
    <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
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

  // Validación de props para SelectField
  SelectField.propTypes = {
    name: String,
    label: String,
    options: Array,
    required: Boolean,
    icon: Function
  };

  const FileField = ({ name, label, required = false, accept, icon: Icon }) => (
    <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
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

  // Validación de props para FileField
  FileField.propTypes = {
    name: String,
    label: String,
    required: Boolean,
    accept: String,
    icon: Function
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Capas decorativas */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-conic from-purple-400/5 via-blue-400/5 to-purple-400/5"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Encabezado */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            III Encuentro de Investigaciones Cualitativas
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Completa tu inscripción para participar en este evento académico de alto nivel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Sección Contacto */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" data-aos="zoom-in">
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
              />
              <SelectField
                name="pais"
                label="País"
                required
                options={['Panamá', 'Perú', 'Colombia', 'Argentina', 'Chile', 'España', 'Estados Unidos']}
                icon={MapPin}
              />
            </div>
          </div>

          {/* Sección Identificación */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>Identificación</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                name="cedula"
                label="Cédula"
                required
                placeholder="8-123-456"
                icon={FileText}
              />
              <InputField
                name="pasaporte"
                label="Pasaporte"
                placeholder="A1234567"
                icon={FileText}
              />
            </div>
          </div>

          {/* Sección Información Personal */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
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
              />
              <InputField
                name="segundoNombre"
                label="Segundo Nombre"
                placeholder="Carlos"
                icon={User}
              />
              <InputField
                name="primerApellido"
                label="Primer Apellido"
                required
                placeholder="Pérez"
                icon={User}
              />
              <InputField
                name="segundoApellido"
                label="Segundo Apellido"
                placeholder="González"
                icon={User}
              />
              <InputField
                name="edad"
                label="Edad"
                type="number"
                required
                placeholder="30"
                icon={User}
              />
              <SelectField
                name="genero"
                label="Género"
                required
                options={['Masculino', 'Femenino']}
                icon={User}
              />
              <InputField
                name="gradoAcademico"
                label="Grado Académico"
                required
                placeholder="Licenciatura, Maestría, Doctorado"
                icon={User}
              />
              <InputField
                name="actividadActual"
                label="Actividad Actual"
                required
                placeholder="Docente, Investigador, Estudiante"
                icon={User}
              />
            </div>
            <div className="mt-6">
              <InputField
                name="areaConocimiento"
                label="Área de Conocimiento o Trabajo"
                required
                placeholder="Educación, Psicología, Sociología, etc."
                icon={User}
              />
            </div>
          </div>

          {/* Sección Afiliación */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Afiliación</span>
            </h2>
            <InputField
              name="afiliacion"
              label="Afiliación"
              required
              placeholder="Universidad de Panamá"
              icon={MapPin}
            />
          </div>

          {/* Sección Archivos */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Upload className="w-5 h-5 text-cyan-400" />
              <span>Documentos</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileField
                name="fotoCarnet"
                label="Foto Tamaño Carnet"
                required
                accept="image/*"
                icon={Camera}
              />
              <FileField
                name="comprobantePago"
                label="Comprobante de Pago"
                accept="image/*,.pdf"
                icon={CreditCard}
              />
            </div>
          </div>

          {/* Botón de envío */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="500">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              🚀 Enviar Inscripción
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressForm;