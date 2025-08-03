import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InvestmentTable = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative z-10 p-8 bg-[#0f172a] rounded-xl border border-white/10 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00BCD4] mb-8">
        Inversión para el evento
      </h2>

      {/* Tabla de Inversión */}
      <div className="overflow-auto">
        <table className="w-full text-sm md:text-base border-collapse text-white">
          <thead>
            <tr className="bg-[#0c3a5c]">
              <th className="p-2 border border-white/10" colSpan="3">Comunidad PERÚ</th>
              <th className="p-2 border border-white/10" colSpan="3">Comunidad Internacional</th>
            </tr>
            <tr className="bg-[#0e456c] text-white/80">
              <th className="p-2 border border-white/10">Conceptos</th>
              <th className="p-2 border border-white/10">Hasta el 01 de agosto</th>
              <th className="p-2 border border-white/10">Después del 01 de agosto</th>
              <th className="p-2 border border-white/10">Conceptos</th>
              <th className="p-2 border border-white/10">Hasta el 01 de agosto</th>
              <th className="p-2 border border-white/10">Después del 01 de agosto</th>
            </tr>
          </thead>
          <tbody className="text-white/90">
            <tr>
              <td className="p-2 border border-white/10">Expositores UNE</td>
              <td className="p-2 border border-white/10">150 soles</td>
              <td className="p-2 border border-white/10">170 soles</td>
              <td className="p-2 border border-white/10">Expositores Miembros RELATIC</td>
              <td className="p-2 border border-white/10">35.00 USD</td>
              <td className="p-2 border border-white/10">50.00 USD</td>
            </tr>
            <tr>
              <td className="p-2 border border-white/10">Expositores OTROS</td>
              <td className="p-2 border border-white/10">180 soles</td>
              <td className="p-2 border border-white/10">200 soles</td>
              <td className="p-2 border border-white/10">Expositores OTROS</td>
              <td className="p-2 border border-white/10">70.00 USD</td>
              <td className="p-2 border border-white/10">100.00 USD</td>
            </tr>
            <tr>
              <td className="p-2 border border-white/10">Asistentes estudiantes UNE</td>
              <td className="p-2 border border-white/10">Ingreso Libre</td>
              <td className="p-2 border border-white/10">Ingreso Libre</td>
              <td className="p-2 border border-white/10">Asistentes Estudiantes Miembros RELATIC</td>
              <td className="p-2 border border-white/10">5.00 USD</td>
              <td className="p-2 border border-white/10">10.00 USD</td>
            </tr>
            <tr>
              <td className="p-2 border border-white/10">Asistentes OTROS</td>
              <td className="p-2 border border-white/10">100 soles</td>
              <td className="p-2 border border-white/10">120 soles</td>
              <td className="p-2 border border-white/10">Asistentes OTROS</td>
              <td className="p-2 border border-white/10">20.00 USD</td>
              <td className="p-2 border border-white/10">40.00 USD</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Beneficios */}
      <div className="mt-12" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4 text-center text-[#00BCD4]">
          🎁 Beneficios
        </h3>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Certificación como ponente o asistente</li>
          <li>Acceso a un taller del evento</li>
          <li>
            Acceso a presentar un capítulo de libro para publicación (el costo editorial lo financian los autores)
          </li>
          <li>Libro de Memorias del III Congreso de Investigaciones Cualitativas</li>
        </ul>
      </div>
    </div>
  );
};

export default InvestmentTable;