import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Papa from "papaparse";
import AOS from "aos";
import "aos/dist/aos.css";

const BASE_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7l-YW6UPNLNR-CPDUud2okXKJJ93iJ6_ZwjqJlhAWYvLC6dAydAZMmuQkCjojONxkT7v3kX_LF5X7/pub?gid=2070773446&single=true&output=csv";

const normalizeTime = (timeStr) => {
  if (!timeStr) return null;
  const parts = timeStr.trim().split(":");
  if (parts.length < 2) return null;
  let [h, m] = parts;
  if (h.length === 1) h = "0" + h;
  if (m.length === 1) m = "0" + m;
  return `${h}:${m}`;
};

export default function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCSV = async () => {
    setLoading(true);
    const cacheBuster = Date.now();
    const csvUrl = `${BASE_CSV_URL}&cb=${cacheBuster}`;

    try {
      const response = await fetch(csvUrl);
      const csvText = await response.text();
      const parsed = Papa.parse(csvText, { header: true });

      const eventosFormateados = [];

      const validRows = parsed.data.filter(
        (row) => row.HORA?.trim() && row.DÍA?.trim()
      );

      validRows.forEach((fila) => {
        const hora = normalizeTime(fila.HORA);
        const dia = fila.DÍA.trim();
        if (!hora || !dia) return;

        const salas = ["AUDITORIO", "SALA ALTERNA"];

        salas.forEach((sala) => {
          const titulo = fila[sala]?.trim();
          if (titulo) {
            const start = new Date(`${dia}T${hora}:00`);
            const end = new Date(start.getTime() + 60 * 60 * 1000);

            eventosFormateados.push({
              title: `${titulo} (${sala})`,
              start,
              end,
              extendedProps: { sala },
            });
          }
        });
      });

      setEvents(eventosFormateados);
    } catch (error) {
      console.error("Error al cargar el cronograma:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCSV();
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden p-8 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl"
      data-aos="fade-in"
    >
      {/* Fondos dinámicos */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.1),transparent_30%,rgba(147,51,234,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Cronograma del Congreso
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Consulta las actividades del III Encuentro de Investigaciones Cualitativas
          </p>
        </div>

        <div
          className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 p-6 shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out"
          data-aos="zoom-in"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <h3 className="text-2xl font-semibold text-white">
              Actividades académicas
            </h3>
            <button
              onClick={fetchCSV}
              className="bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-white text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              {loading ? "Actualizando..." : "Actualizar cronograma"}
            </button>
          </div>

          {/* 🌐 Adaptable a pantallas pequeñas */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[360px]">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "timeGridDay,timeGridWeek,dayGridMonth",
                }}
                events={events}
                eventClick={(info) => {
                  alert(
                    `Actividad: ${info.event.title}\n` +
                    `Sala: ${info.event.extendedProps.sala}\n` +
                    `Inicio: ${info.event.start.toLocaleString()}`
                  );
                }}
                height="auto"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar on WebKit */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}