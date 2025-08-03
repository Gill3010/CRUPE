import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Papa from "papaparse";
import AOS from "aos";
import "aos/dist/aos.css";

const BASE_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7l-YW6UPNLNR-CPDUud2okXKJJ93iJ6_ZwjqJlhAWYvLC6dAydAZMmuQkCjojONxkT7v3kX_LF5X7/pub?gid=2070773446&single=true&output=csv";

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
      className="min-h-[70vh] bg-[#0f172a] p-8 rounded-xl border border-white/10"
      data-aos="fade-in"
    >
      <div className="relative z-10">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-[#00BCD4] mb-4">
            Cronograma del Congreso
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Consulta las actividades del III Congreso de Investigaciones Cualitativas
          </p>
        </div>

        <div
          className="bg-[#0c3a5c] rounded-xl border border-white/10 p-6 transition-all duration-300"
          data-aos="zoom-in"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <h3 className="text-2xl font-semibold text-white">
              Actividades académicas
            </h3>
            <button
              onClick={fetchCSV}
              className="bg-[#00BCD4] text-[#0a2d4d] px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
            >
              {loading ? "Actualizando..." : "Actualizar cronograma"}
            </button>
          </div>

          {/* Calendario adaptable */}
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

      {/* Ocultar scrollbar en WebKit */}
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