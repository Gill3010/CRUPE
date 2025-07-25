import { useEffect, useState } from 'react';
import { Users, CheckCircle, PieChart, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MetricsDashboard = () => {
  const [suscriptions, setSuscriptions] = useState(null);
  const [assistants, setAssistants] = useState(null);
  const [distribution, setDistribution] = useState([]);

  useEffect(() => {
    // Inicializar AOS con la misma configuración del CongressTriptych
    AOS.init({
      once: false,
      duration: 1000,
      offset: 50,
      disable: false,
    });

    fetch('https://relaticpanama.org/api/get_total_suscriptions.php')
      .then(res => res.json())
      .then(data => setSuscriptions(data.total));

    fetch('https://relaticpanama.org/_events/api/get_total_assistants.php')
      .then(res => res.json())
      .then(data => setAssistants(data.total));

    fetch('https://relaticpanama.org/_events/api/get_participation_distribution.php')
      .then(res => res.json())
      .then(data => setDistribution(data));
  }, []);

  return (
    <div
      className="relative w-full bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#312e81] text-white py-6 shadow-2xl border-b border-blue-700/30"
      style={{
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título centrado con ícono */}
        <div
          className="flex flex-col items-center justify-center text-center mb-6"
          data-aos="fade-up"
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 drop-shadow-md">
              Métricas del Congreso RELATIC
            </h2>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Métricas principales */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
            {/* Inscritos */}
            <div className="bg-white/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-3 shadow-md hover:scale-[1.02] transition">
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Inscritos</span>
              </div>
              <div className="text-2xl font-extrabold text-white">
                {suscriptions ?? '...'}
              </div>
            </div>

            {/* Asistentes */}
            <div className="bg-white/10 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-3 shadow-md hover:scale-[1.02] transition">
              <div className="flex items-center space-x-2 mb-1">
                <CheckCircle className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Asistentes</span>
              </div>
              <div className="text-2xl font-extrabold text-white">
                {assistants ?? '...'}
              </div>
            </div>
          </div>

          {/* Distribución */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white/10 backdrop-blur-lg border border-slate-500/20 rounded-2xl p-3 shadow-md">
              <div className="flex items-center space-x-2 mb-4">
                <PieChart className="w-5 h-5 text-emerald-400" />
                <span className="text-base font-semibold text-emerald-300">
                  Distribución por Tipo de Participación
                </span>
              </div>

              {distribution.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                  {distribution.map((item, index) => {
                    const colors = [
                      'from-cyan-500 to-blue-500',
                      'from-emerald-500 to-teal-500',
                      'from-violet-500 to-purple-500',
                      'from-orange-500 to-red-500',
                      'from-pink-500 to-rose-500',
                      'from-yellow-500 to-amber-500'
                    ];
                    const colorClass = colors[index % colors.length];

                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-slate-800/50 rounded-xl p-3 shadow-sm hover:bg-slate-700/40 transition"
                      >
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colorClass} flex-shrink-0`} />
                        <div className="min-w-0 flex-1">
                          <div className="text-xs text-slate-300 truncate">
                            {item.tipoParticipacion}
                          </div>
                          <div className="text-sm font-semibold text-white">
                            {item.total}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-slate-300">Cargando distribución...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;