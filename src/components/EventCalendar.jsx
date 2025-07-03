import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Papa from "papaparse";

const BASE_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7l-YW6UPNLNR-CPDUud2okXKJJ93iJ6_ZwjqJlhAWYvLC6dAydAZMmuQkCjojONxkT7v3kX_LF5X7/pub?gid=2070773446&single=true&output=csv";

const normalizeTime = (timeStr) => {
  if (!timeStr) return null;
  const parts = timeStr.trim().split(':');
  if (parts.length < 2) return null;
  let [h, m] = parts;
  if (h.length === 1) h = '0' + h;
  if (m.length === 1) m = '0' + m;
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
        row => row.HORA?.trim() && row.DÍA?.trim()
      );

      validRows.forEach(fila => {
        const hora = normalizeTime(fila.HORA);
        const dia = fila.DÍA.trim(); // formato: YYYY-MM-DD
        if (!hora || !dia) return;

        const salas = ["AUDITORIO", "SALA ALTERNA"];

        salas.forEach(sala => {
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
  }, []);

  return (
    <div className="p-4 bg-white shadow-xl rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Cronograma del Congreso
        </h2>
        <button
          onClick={fetchCSV}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          {loading ? "Actualizando..." : "Actualizar cronograma"}
        </button>
      </div>

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
      />
    </div>
  );
}
