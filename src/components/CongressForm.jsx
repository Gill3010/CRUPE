import { useEffect, useState, useRef } from 'react';
import { Mail, IdCard, User, ClipboardList, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CongressForm = () => {
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);
  const toastRef = useRef(null);
  
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-quad',
      once: false,
      offset: 120
    });
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    country: '',
    dni: '',
    passport: '',
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    phone: '',
    area: '',
    participationType: '',
    topic: '',
    abstractFile: null,
    paymentFile: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (submitStatus.message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);

      scrollToFeedback();

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const scrollToFeedback = () => {
    setTimeout(() => {
      if (Object.keys(errors).length > 0) {
        const firstErrorKey = Object.keys(errors)[0];
        const firstErrorElement = document.getElementById(firstErrorKey);
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
      
      if (submitButtonRef.current) {
        submitButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) newErrors.email = 'Este campo es requerido';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Email inválido';

    if (!formData.country) newErrors.country = 'Este campo es requerido';
    if (!formData.dni) newErrors.dni = 'Este campo es requerido';
    if (!formData.firstName) newErrors.firstName = 'Este campo es requerido';
    if (!formData.lastName) newErrors.lastName = 'Este campo es requerido';
    if (!formData.phone) newErrors.phone = 'Este campo es requerido';
    if (!formData.area) newErrors.area = 'Este campo es requerido';
    if (!formData.participationType) newErrors.participationType = 'Este campo es requerido';
    if (!formData.topic) newErrors.topic = 'Este campo es requerido';
    if (!formData.abstractFile) newErrors.abstractFile = 'El resumen científico es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({ 
        success: false, 
        message: 'Por favor completa todos los campos requeridos' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // 1. Subir archivos primero
      let abstractFileName = '';
      let paymentFileName = '';

      if (formData.abstractFile) {
        const formDataUpload = new FormData();
        formDataUpload.append('file', formData.abstractFile);
        
        const uploadResponse = await fetch('https://relaticpanama.org/_events/_crupe/api/upload.php', {
          method: 'POST',
          body: formDataUpload
        });
        
        const uploadData = await uploadResponse.json();
        if (!uploadResponse.ok) {
          throw new Error(uploadData.error || 'Error al subir el resumen científico');
        }
        abstractFileName = uploadData.file_name;
      }

      if (formData.paymentFile) {
        const formDataUpload = new FormData();
        formDataUpload.append('file', formData.paymentFile);
        
        const uploadResponse = await fetch('https://relaticpanama.org/_events/_crupe/api/upload.php', {
          method: 'POST',
          body: formDataUpload
        });
        
        const uploadData = await uploadResponse.json();
        if (!uploadResponse.ok) {
          throw new Error(uploadData.error || 'Error al subir el comprobante de pago');
        }
        paymentFileName = uploadData.file_name;
      }

      // 2. Preparar datos para el endpoint principal con nombres consistentes
      const submissionData = {
        university_id: 1,
        email: formData.email,
        country: formData.country,
        dni: formData.dni,
        passport: formData.passport || null,
        first_name: formData.firstName,
        middle_name: formData.middleName || null,
        last_name: formData.lastName,
        second_last_name: formData.secondLastName || null,
        phone: formData.phone,
        area: formData.area.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        participation_type: formData.participationType,
        topic: formData.topic,
        abstract_file: abstractFileName,
        payment_file: paymentFileName || null
      };

      // 3. Enviar datos al endpoint principal
      const response = await fetch('https://relaticpanama.org/_events/_crupe/api/submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error || 
                       (data.missing_fields ? `Faltan campos: ${data.missing_fields.join(', ')}` : 'Error al enviar el formulario');
        throw new Error(errorMsg);
      }

      // Éxito - resetear formulario
      setSubmitStatus({ 
        success: true, 
        message: data.message || 'Inscripción enviada con éxito' 
      });
      
      setFormData({
        email: '',
        country: '',
        dni: '',
        passport: '',
        firstName: '',
        middleName: '',
        lastName: '',
        secondLastName: '',
        phone: '',
        area: '',
        participationType: '',
        topic: '',
        abstractFile: null,
        paymentFile: null
      });

    } catch (error) {
      console.error('Error completo:', error);
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Ocurrió un error al enviar el formulario' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification */}
      {showToast && (
        <div 
          ref={toastRef}
          className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md transform transition-all duration-300 ${
            submitStatus.success 
              ? 'bg-green-100 text-green-800 border-l-4 border-green-500' 
              : 'bg-red-100 text-red-800 border-l-4 border-red-500'
          }`}
          data-aos="fade-left"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
            <div className="ml-auto pl-3">
              <button 
                onClick={() => setShowToast(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-44 h-44 mb-6 transform transition-all hover:scale-105 duration-300">
            <img 
              src="/_events/_crupe/assets/logocrupe.png" 
              alt="Logo Congreso" 
              className="w-full h-full object-contain"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0077C8] mb-3">
            I Congreso Científico Internacional CRUPE 2025
          </h1>
          <p className="text-xl text-gray-700 font-medium mb-6">
            Completa tu inscripción para participar en el congreso
          </p>
          <div className="w-20 h-1.5 bg-[#F7941D] mx-auto rounded-full mb-8"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
          {/* Sección 1: Información de Contacto */}
          <div 
            className="bg-white rounded-xl p-6 border border-[#4BA146]/30 hover:border-[#4BA146]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#4BA146]" />
              <span>Información de Contacto</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  País <span className="text-[#F7941D]">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                >
                  <option value="">Selecciona tu país</option>
                  <option value="Panamá">Panamá</option>
                  <option value="Perú">Perú</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Chile">Chile</option>
                  <option value="España">España</option>
                  <option value="Estados Unidos">Estados Unidos</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Brasil">Brasil</option>
                </select>
                {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
              </div>
            </div>
          </div>

          {/* Sección 2: Identificación */}
          <div 
            className="bg-white rounded-xl p-6 border border-[#0077C8]/30 hover:border-[#0077C8]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="150"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <IdCard className="w-5 h-5 text-[#4BA146]" />
              <span>Identificación</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                  Cédula / DNI <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.dni ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="8-123-456"
                />
                {errors.dni && <p className="text-sm text-red-500">{errors.dni}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="passport" className="block text-sm font-medium text-gray-700">
                  Pasaporte / DNI
                </label>
                <input
                  type="text"
                  id="passport"
                  name="passport"
                  value={formData.passport}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5"
                  placeholder="A1234567"
                />
              </div>
            </div>
          </div>

          {/* Sección 3: Información Personal */}
          <div 
            className="bg-white rounded-xl p-6 border border-[#F7941D]/30 hover:border-[#F7941D]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-[#4BA146]" />
              <span>Información Personal</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Primer Nombre <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="Juan"
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                  Segundo Nombre
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5"
                  placeholder="Carlos"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Primer Apellido <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="Pérez"
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="secondLastName" className="block text-sm font-medium text-gray-700">
                  Segundo Apellido
                </label>
                <input
                  type="text"
                  id="secondLastName"
                  name="secondLastName"
                  value={formData.secondLastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5"
                  placeholder="González"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Celular <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="(+507) 6000-0000"
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                  Área de Conocimiento o Trabajo <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.area ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="Educación, Psicología, Sociología, etc."
                />
                {errors.area && <p className="text-sm text-red-500">{errors.area}</p>}
              </div>
            </div>
          </div>

          {/* Sección 4: Participación */}
          <div 
            className="bg-white rounded-xl p-6 border border-[#0077C8]/30 hover:border-[#0077C8]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="250"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#4BA146]" />
              <span>Participación</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="participationType" className="block text-sm font-medium text-gray-700">
                  Tipo de Participación <span className="text-[#F7941D]">*</span>
                </label>
                <select
                  id="participationType"
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.participationType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Ponencia">Ponencia</option>
                  <option value="Carteles Digitales">Carteles Digitales</option>
                   <option value="Carteles Impresos">Carteles Impresos</option>
                  <option value="Asistente">Asistente</option>
                </select>
                {errors.participationType && <p className="text-sm text-red-500">{errors.participationType}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                  Tema <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.topic ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5`}
                  placeholder="Ingresa el tema de tu participación"
                />
                {errors.topic && <p className="text-sm text-red-500">{errors.topic}</p>}
              </div>
            </div>
          </div>

          {/* Sección 5: Documentos */}
          <div 
            className="bg-white rounded-xl p-6 border border-[#4BA146]/30 hover:border-[#4BA146]/50 shadow-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <h2 className="text-xl font-bold text-[#0077C8] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#4BA146]" />
              <span>Documentos</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="abstractFile" className="block text-sm font-medium text-gray-700">
                  Resumen Científico <span className="text-[#F7941D]">*</span>
                </label>
                <input
                  type="file"
                  id="abstractFile"
                  name="abstractFile"
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.abstractFile ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4BA146]/20 file:text-[#4BA146] hover:file:bg-[#4BA146]/30`}
                  accept=".doc,.docx,.pdf"
                />
                <p className="text-xs text-gray-500 mt-1">Formatos aceptados: .doc, .docx, .pdf</p>
                {errors.abstractFile && <p className="text-sm text-red-500">{errors.abstractFile}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="paymentFile" className="block text-sm font-medium text-gray-700">
                  Comprobante de Pago
                </label>
                <input
                  type="file"
                  id="paymentFile"
                  name="paymentFile"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4BA146] focus:border-[#4BA146] bg-[#4BA146]/5 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4BA146]/20 file:text-[#4BA146] hover:file:bg-[#4BA146]/30"
                  accept="image/*,.pdf"
                />
                <p className="text-xs text-gray-500 mt-1">Formatos aceptados: imágenes o PDF</p>
              </div>
            </div>
          </div>

          {/* Botón de envío */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="350" ref={submitButtonRef}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#4BA146] hover:bg-[#3d8a39] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4BA146] transition-all duration-300"
            >
              {isSubmitting ? 'Enviando...' : '🚀 Enviar Inscripción'}
            </button>
            
            {/* Mensaje de estado debajo del botón */}
            {submitStatus.message && (
              <div 
                className={`mt-4 p-3 rounded-lg ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CongressForm;