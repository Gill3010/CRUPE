import { useEffect, useState } from 'react';
import { Users, CheckCircle, PieChart, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Cell } from 'recharts';

const MetricsDashboard = () => {
  const [suscriptions, setSuscriptions] = useState(null);
  const [assistants, setAssistants] = useState(null);
  const [distribution, setDistribution] = useState([]);

  // Paleta de colores más suaves y claros
  const chartColors = [
    '#06b6d4', // cyan-500
    '#67e8f9', // cyan-300
    '#a5f3fc', // cyan-200
    '#cffafe', // cyan-100
    '#0891b2', // cyan-600
    '#155e75', // cyan-800
    '#164e63', // cyan-900
    '#0e7490'  // cyan-700
  ];

  useEffect(() => {
    // Implementación completa de AOS que no interfiere con otros componentes
    const initAOS = () => {
      // Solo procesar elementos dentro de este componente específico
      const thisComponent = document.querySelector('[data-metrics-dashboard]');
      if (!thisComponent) return null;
      
      const elements = thisComponent.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const element = entry.target;
          const delay = parseInt(element.getAttribute('data-aos-delay') || '0');
          
          if (entry.isIntersecting) {
            // Elemento entra al viewport - activar animación
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }, delay);
          } else {
            // Elemento sale del viewport - resetear para próxima entrada
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      });

      // Observar solo elementos de este componente
      elements.forEach(element => {
        observer.observe(element);
      });

      return observer;
    };

    const observer = initAOS();

    // Usar las APIs reales
    fetch('https://relaticpanama.org/api/get_total_suscriptions.php')
      .then(res => res.json())
      .then(data => setSuscriptions(data.total))
      .catch(err => console.error('Error fetching subscriptions:', err));

    fetch('https://relaticpanama.org/_events/api/get_total_assistants.php')
      .then(res => res.json())
      .then(data => setAssistants(data.total))
      .catch(err => console.error('Error fetching assistants:', err));

    fetch('https://relaticpanama.org/_events/api/get_participation_distribution.php')
      .then(res => res.json())
      .then(data => setDistribution(data))
      .catch(err => console.error('Error fetching distribution:', err));

    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Preparar datos para el gráfico
  const chartData = distribution.map((item, index) => ({
    ...item,
    name: item.tipoParticipacion,
    value: item.total,
    color: chartColors[index % chartColors.length]
  }));

  const CustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex flex-wrap justify-center gap-3 mt-4 px-2">
        {payload?.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-cyan-200/30">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs font-medium text-slate-700 whitespace-nowrap">
              {entry.value}: {chartData.find(d => d.name === entry.value)?.total || 0}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative w-full bg-gradient-to-br from-cyan-50 via-white to-cyan-100 text-slate-800 py-4 border-b-4 border-cyan-400 shadow-lg"
      data-metrics-dashboard
      style={{
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título centrado con ícono */}
        <div
          className="flex flex-col items-center justify-center text-center mb-4 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out"
          data-aos="fade-up"
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-800 tracking-tight">
              Métricas del III Congreso
            </h2>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mt-2"></div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          {/* Métricas principales */}
          <div 
            className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {/* Inscritos */}
            <div className="bg-white/80 backdrop-blur-sm border-2 border-cyan-200 rounded-2xl p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-1.5 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Inscritos</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">
                {suscriptions ?? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-lg text-slate-500">...</span>
                  </div>
                )}
              </div>
              <div className="text-xs text-slate-500 font-medium">Participantes registrados</div>
            </div>

            {/* Asistentes */}
            <div className="bg-white/80 backdrop-blur-sm border-2 border-cyan-200 rounded-2xl p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-1.5 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Asistentes</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">
                {assistants ?? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-lg text-slate-500">...</span>
                  </div>
                )}
              </div>
              <div className="text-xs text-slate-500 font-medium">Confirmados presentes</div>
            </div>
          </div>

          {/* Distribución con gráfica */}
          <div 
            className="xl:col-span-3 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <div className="bg-white/80 backdrop-blur-sm border-2 border-cyan-200 rounded-2xl p-4 h-full">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-1.5 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg">
                  <PieChart className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-700 tracking-tight">
                  Distribución por Tipo de Participación
                </span>
              </div>

              {distribution.length > 0 ? (
                <div className="space-y-4">
                  {/* Gráfica minimalista */}
                  <div className="w-full h-24 sm:h-28">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 9, fill: '#475569' }}
                          interval={0}
                          angle={-45}
                          textAnchor="end"
                          height={40}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 9, fill: '#475569' }}
                          width={25}
                        />
                        <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                        <Legend content={<CustomLegend />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Grid de distribución */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
                    {distribution.map((item, index) => {
                      const color = chartColors[index % chartColors.length];
                      
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-cyan-200/50 rounded-lg p-2 hover:bg-white/80 hover:shadow-md transition-all duration-300 group"
                        >
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                            style={{ backgroundColor: color }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-medium text-slate-600 truncate">
                              {item.tipoParticipacion}
                            </div>
                            <div className="text-sm font-bold text-slate-800">
                              {item.total}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-8">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm font-medium text-slate-600">Cargando distribución...</span>
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