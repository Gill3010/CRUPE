import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InvestmentTable = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative z-10 p-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-8">
  Inversión para el evento
</h2>

      {/* Tabla de Inversión */}
      <div className="overflow-auto">
        <table className="w-full text-sm md:text-base border-collapse text-white/90">
          <thead>
            <tr className="bg-white/10">
              <th className="p-2 border border-white/20" colSpan="3">Comunidad PERÚ</th>
              <th className="p-2 border border-white/20" colSpan="3">Comunidad Internacional</th>
            </tr>
            <tr className="bg-white/5 text-white/70">
              <th className="p-2 border border-white/20">Conceptos</th>
              <th className="p-2 border border-white/20">Hasta el 01 de agosto</th>
              <th className="p-2 border border-white/20">Después del 01 de agosto</th>
              <th className="p-2 border border-white/20">Conceptos</th>
              <th className="p-2 border border-white/20">Hasta el 01 de agosto</th>
              <th className="p-2 border border-white/20">Después del 01 de agosto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-white/20">Expositores UNE</td>
              <td className="p-2 border border-white/20">150 soles</td>
              <td className="p-2 border border-white/20">170 soles</td>
              <td className="p-2 border border-white/20">Expositores Miembros RELATIC</td>
              <td className="p-2 border border-white/20">35.00 USD</td>
              <td className="p-2 border border-white/20">50.00 USD</td>
            </tr>
            <tr>
              <td className="p-2 border border-white/20">Expositores OTROS</td>
              <td className="p-2 border border-white/20">180 soles</td>
              <td className="p-2 border border-white/20">200 soles</td>
              <td className="p-2 border border-white/20">Expositores OTROS</td>
              <td className="p-2 border border-white/20">70.00 USD</td>
              <td className="p-2 border border-white/20">100.00 USD</td>
            </tr>
            <tr>
              <td className="p-2 border border-white/20">Asistentes estudiantes UNE</td>
              <td className="p-2 border border-white/20">Ingreso Libre</td>
              <td className="p-2 border border-white/20">Ingreso Libre</td>
              <td className="p-2 border border-white/20">Asistentes Estudiantes Miembros RELATIC</td>
              <td className="p-2 border border-white/20">5.00 USD</td>
              <td className="p-2 border border-white/20">10.00 USD</td>
            </tr>
            <tr>
              <td className="p-2 border border-white/20">Asistentes OTROS</td>
              <td className="p-2 border border-white/20">100 soles</td>
              <td className="p-2 border border-white/20">120 soles</td>
              <td className="p-2 border border-white/20">Asistentes OTROS</td>
              <td className="p-2 border border-white/20">20.00 USD</td>
              <td className="p-2 border border-white/20">40.00 USD</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Beneficios */}
      <div className="mt-12" data-aos="fade-up">
        <h3 className="text-2xl font-bold mb-4 text-center text-white/90">🎁 Beneficios</h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Certificación como ponente o asistente</li>
          <li>Acceso a un taller del evento</li>
          <li>Acceso a presentar un capítulo de libro para publicación (el costo editorial lo financian los autores)</li>
          <li>Libro de Memorias del III Congreso de Investigaciones Cualitativas</li>
        </ul>
      </div>
    </div>
  );
};

export default InvestmentTable;
