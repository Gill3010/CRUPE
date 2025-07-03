import { useEffect, useState } from 'react';

const CongressForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fotoPreview, setFotoPreview] = useState(null);

  useEffect(() => {
    // Simulamos AOS init sin la librería real
    console.log('AOS initialized');
  }, []);

  // Muestra preview al seleccionar foto carnet
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPreview(URL.createObjectURL(file));
    } else {
      setFotoPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí iría la lógica real de envío (fetch, axios, etc)
    setTimeout(() => {
      alert('Formulario enviado con éxito');
      setIsSubmitting(false);
      setFotoPreview(null);
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 min-h-screen relative">
      {/* Fondo degradado solicitado */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800" />
      
      {/* Overlay sutil para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Contenido del formulario */}
      <div className="relative z-10">
        {/* Header del formulario */}
        <div className="bg-white/95 backdrop-blur-md shadow-2xl shadow-black/30 rounded-2xl overflow-visible border border-white/30 mb-6">
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white p-6 md:p-8 relative hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 rounded-t-2xl">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-slate-900 border-b-[30px] border-b-transparent opacity-80"></div>
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-wide text-white">
                FORMULARIO DE INSCRIPCIÓN
              </h2>
              <h3 className="text-lg md:text-xl font-light mb-4 tracking-wider text-gray-200">
                III ENCUENTRO INVESTIGACIONES CUALITATIVAS
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 rounded-full shadow-lg"></div>
              <p className="backdrop-blur-sm bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-xl p-4 border border-emerald-300/30 text-sm md:text-base text-gray-100">
                <span className="font-black text-emerald-300">
                  ✨ Complete sus datos
                </span>{' '}
                para participar en nuestro encuentro académico
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-md shadow-2xl shadow-black/30 rounded-2xl p-6 md:p-10 space-y-8 border border-white/30 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            noValidate
            className="space-y-8"
          >
          {/* Sección de Contacto */}
          <section className="border-l-4 border-emerald-500 pl-6 bg-gradient-to-r from-emerald-50/90 to-teal-50/90 rounded-r-xl p-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3">📧</span> Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-black text-emerald-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Ingrese su email"
                  aria-describedby="emailHelp"
                  className="px-4 py-3 rounded-xl border-2 border-emerald-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
                <small id="emailHelp" className="text-xs text-emerald-700 mt-1">
                  Ejemplo: usuario@correo.com
                </small>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="pais"
                  className="font-black text-emerald-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>País*
                </label>
                <select
                  id="pais"
                  name="pais"
                  required
                  aria-describedby="paisHelp"
                  className="px-4 py-3 rounded-xl border-2 border-emerald-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md text-gray-800"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">
                    Seleccione su país
                  </option>
                  <option>Panamá</option>
                  <option>Perú</option>
                  <option>Colombia</option>
                  <option>Argentina</option>
                  <option>Chile</option>
                  <option>España</option>
                  <option>Estados Unidos</option>
                </select>
                <small id="paisHelp" className="text-xs text-emerald-700 mt-1">
                  Seleccione el país donde reside
                </small>
              </div>
            </div>
          </section>

          {/* Sección de Identificación */}
          <section className="border-l-4 border-teal-500 pl-6 bg-gradient-to-r from-teal-50/90 to-cyan-50/90 rounded-r-xl p-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3">🆔</span> Identificación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              <div className="flex flex-col">
                <label
                  htmlFor="cedula"
                  className="font-black text-teal-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Cédula*
                </label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  required
                  placeholder="Ej: 8-999-999 (formato Panamá)"
                  className="px-4 py-3 rounded-xl border-2 border-teal-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="pasaporte"
                  className="font-black text-teal-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Pasaporte
                </label>
                <input
                  type="text"
                  id="pasaporte"
                  name="pasaporte"
                  placeholder="Ej: A12345678 (número internacional)"
                  className="px-4 py-3 rounded-xl border-2 border-teal-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>
            </div>
          </section>

          {/* Sección de Información Personal */}
          <section className="border-l-4 border-cyan-500 pl-6 bg-gradient-to-r from-cyan-50/90 to-slate-50/90 rounded-r-xl p-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-700 to-slate-700 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3">👤</span> Información Personal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
              {/* Primer nombre */}
              <div className="flex flex-col">
                <label
                  htmlFor="primerNombre"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Primer nombre*
                </label>
                <input
                  type="text"
                  id="primerNombre"
                  name="primerNombre"
                  required
                  placeholder="Ingrese su primer nombre"
                  className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              {/* Segundo nombre */}
              <div className="flex flex-col">
                <label
                  htmlFor="segundoNombre"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Segundo nombre
                </label>
                <input
                  type="text"
                  id="segundoNombre"
                  name="segundoNombre"
                  placeholder="Ingrese su segundo nombre"
                  className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              {/* Primer apellido */}
              <div className="flex flex-col">
                <label
                  htmlFor="primerApellido"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Primer apellido*
                </label>
                <input
                  type="text"
                  id="primerApellido"
                  name="primerApellido"
                  required
                  placeholder="Ingrese su primer apellido"
                  className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              {/* Segundo apellido */}
              <div className="flex flex-col">
                <label
                  htmlFor="segundoApellido"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Segundo apellido
                </label>
                <input
                  type="text"
                  id="segundoApellido"
                  name="segundoApellido"
                  placeholder="Ingrese su segundo apellido"
                  className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              {/* Edad */}
              <div className="flex flex-col">
                <label
                  htmlFor="edad"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Edad*
                </label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  min={0}
                  max={120}
                  required
                  placeholder="Ingrese su edad"
                  className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              
{/* Género */}
<div className="flex flex-col">
  <label
    htmlFor="genero"
    className="font-black text-cyan-800 mb-2 flex items-center"
  >
    <span className="mr-2">•</span>Género*
  </label>
  <select
    id="genero"
    name="genero"
    required
    className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md text-gray-800"
    defaultValue=""
  >
    <option value="" disabled className="text-gray-500">
      Seleccione su género
    </option>
    <option>Masculino</option>
    <option>Femenino</option>
  </select>
</div>

{/* Grado académico */}
<div className="flex flex-col">
  <label
    htmlFor="gradoAcademico"
    className="font-black text-cyan-800 mb-2 flex items-center"
  >
    <span className="mr-2">•</span>Grado académico*
  </label>
  <input
    type="text"
    id="gradoAcademico"
    name="gradoAcademico"
    required
    placeholder="Ej: Licenciatura, Maestría, Doctorado"
    className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
  />
</div>

              {/* Actividad actual */}
              <div className="flex flex-col">
                <label
                  htmlFor="actividadActual"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Actividad actual*
                </label>
                <input
                  type="text"
                  id="actividadActual"
                  name="actividadActual"
                  required
                  placeholder="Ej: Docente, Investigador, Estudiante"
                  className="px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

              {/* Área de conocimiento o trabajo (span dos columnas) */}
              <div className="md:col-span-2 flex flex-col">
                <label
                  htmlFor="areaConocimiento"
                  className="font-black text-cyan-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Área de conocimiento o trabajo*
                </label>
                <input
                  type="text"
                  id="areaConocimiento"
                  name="areaConocimiento"
                  required
                  placeholder="Ej: Tecnología, Educación, Salud"
                  className="w-full px-4 py-3 rounded-xl border-2 border-cyan-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>

             
            </div>
          </section>

          {/* Sección de Afiliación */}
          <section className="border-l-4 border-emerald-400 pl-6 bg-gradient-to-r from-emerald-50/90 to-teal-50/90 rounded-r-xl p-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3">🏫</span> Afiliación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm md:text-base">
              <div className="flex flex-col">
                <label
                  htmlFor="afiliacion"
                  className="font-black text-emerald-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Afiliación* (Ej: Universidad de Panamá)
                </label>
                <input
                  type="text"
                  id="afiliacion"
                  name="afiliacion"
                  required
                  placeholder="Ej: Universidad de Panamá"
                  className="px-4 py-3 rounded-xl border-2 border-emerald-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md placeholder-gray-500 text-gray-800"
                />
              </div>
            </div>
          </section>

          {/* Sección Archivos */}
          <section className="border-l-4 border-slate-500 pl-6 bg-gradient-to-r from-slate-50/90 to-gray-50/90 rounded-r-xl p-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent mb-6 flex items-center">
              <span className="mr-3">📂</span> Archivos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-sm md:text-base">
              <div className="flex flex-col">
                <label
                  htmlFor="fotoCarnet"
                  className="font-black text-slate-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Foto tamaño carnet*
                </label>
                <input
                  type="file"
                  id="fotoCarnet"
                  name="fotoCarnet"
                  accept="image/*"
                  required
                  onChange={handleFotoChange}
                  className="px-2 py-1 rounded-xl border-2 border-slate-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100"
                />
                {fotoPreview && (
                  <img
                    src={fotoPreview}
                    alt="Preview foto carnet"
                    className="mt-3 w-24 h-24 object-cover rounded-xl border-2 border-slate-300 shadow-md"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="comprobantePago"
                  className="font-black text-slate-800 mb-2 flex items-center"
                >
                  <span className="mr-2">•</span>Comprobante de pago (Opcional)
                </label>
                <input
                  type="file"
                  id="comprobantePago"
                  name="comprobantePago"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="px-2 py-1 rounded-xl border-2 border-slate-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-500/50 focus:border-slate-600 transition-all duration-300 hover:shadow-lg hover:bg-white shadow-md text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100"
                />
              </div>
            </div>
          </section>

          {/* Botón de envío */}
          <div className="text-center pt-4">
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 mb-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-900 font-black py-4 px-8 rounded-xl cursor-pointer transition-all duration-300 shadow-2xl hover:shadow-emerald-400/50 hover:scale-105 text-base md:text-lg ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed hover:shadow-none hover:scale-100' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : '🚀 Enviar inscripción'}
              </button>
              <p className="text-white text-sm mt-3 opacity-90 font-light">
                Participa desde cualquier lugar del mundo
              </p>
            </div>
          </div>
          </form>
        </div>

        {/* Información adicional */}
        <div className="text-center mt-6 md:mt-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl border border-white/30">
            <p className="text-gray-700 text-sm md:text-base font-light leading-relaxed">
              🌟{' '}
              <span className="font-black bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">
                Únete a nuestro encuentro académico
              </span>{' '}
              •{' '}
              <span className="font-bold text-slate-700">
                25, 26 y 27 de septiembre de 2025
              </span>{' '}
              •{' '}
              <span className="font-medium text-gray-600">
                Universidad Enrique Guzmán y Valle, Perú
              </span>{' '}
              🇵🇪
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressForm;