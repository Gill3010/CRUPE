import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Papa from "papaparse";
import { RefreshCw, Calendar as CalendarIcon, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

export default function AcademicCalendar() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      easing: 'ease-out-sine'
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchCSV = async () => {
    setLoading(true);
    const cacheBuster = Date.now();
    const csvUrl = `${BASE_CSV_URL}&cb=${cacheBuster}`;

    try {
      const response = await fetch(csvUrl);
      const csvText = await response.text();
      const parsed = Papa.parse(csvText, { header: true });

      const formattedEvents = [];

      const validRows = parsed.data.filter(
        (row) => row.HORA?.trim() && row.DÍA?.trim()
      );

      validRows.forEach((row) => {
        const time = normalizeTime(row.HORA);
        const day = row.DÍA.trim();
        if (!time || !day) return;

        const locations = ["AUDITORIO_PRINCIPAL", "SALA_CONFERENCIAS", "LABORATORIO"];

        locations.forEach((location) => {
          const title = row[location]?.trim();
          if (title) {
            const start = new Date(`${day}T${time}:00`);
            const end = new Date(start.getTime() + 60 * 60 * 1000);

            formattedEvents.push({
              title: `${windowWidth < 640 ? title.substring(0, 15) + (title.length > 15 ? '...' : '') : title}`,
              start,
              end,
              extendedProps: { 
                location,
                type: location === "AUDITORIO_PRINCIPAL" ? "conferencia" : "taller",
                fullTitle: title
              },
            });
          }
        });
      });

      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error loading schedule:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCSV();
  }, [windowWidth]);

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    
    const eventDetails = `
      <div class="p-4 bg-white rounded-lg border border-[#4BA146] shadow-lg">
        <h3 class="text-xl font-bold text-[#0077C8] mb-2">${info.event.extendedProps.fullTitle}</h3>
        <div class="space-y-2 text-sm text-gray-700">
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>${info.event.start.toLocaleString('es-PA', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</span>
          </p>
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>${info.event.extendedProps.location.replace(/_/g, ' ')}</span>
          </p>
          <p class="flex items-center gap-2">
            <svg class="w-4 h-4 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span>Tipo: ${info.event.extendedProps.type === "conferencia" ? "Conferencia magistral" : "Taller práctico"}</span>
          </p>
        </div>
      </div>
    `;

    const modal = document.createElement('div');
    modal.innerHTML = eventDetails;
    modal.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4 animate-fadeIn';
    modal.onclick = () => document.body.removeChild(modal);
    
    const content = modal.firstChild;
    content.onclick = (e) => e.stopPropagation();
    
    document.body.appendChild(modal);
  };

  const calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: windowWidth < 768 ? "timeGridDay" : "timeGridWeek",
    headerToolbar: {
      left: windowWidth < 640 ? "prev,next" : "prev,next today",
      center: "title",
      right: windowWidth < 640 ? "dayGridMonth,timeGridDay" : "timeGridDay,timeGridWeek,dayGridMonth"
    },
    events,
    eventClick: handleEventClick,
    height: "auto",
    eventClassNames: "cursor-pointer hover:shadow-md transition-shadow duration-200",
    nowIndicator: true,
    views: {
      timeGridDay: {
        titleFormat: windowWidth < 640 ? { day: 'numeric', month: 'short' } : { year: 'numeric', month: 'long', day: 'numeric' }
      },
      timeGridWeek: {
        titleFormat: windowWidth < 640 ? { month: 'short', day: 'numeric' } : { year: 'numeric', month: 'long', day: 'numeric' }
      },
      dayGridMonth: {
        titleFormat: { year: 'numeric', month: 'long' }
      }
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    },
    eventDisplay: "block",
    eventBackgroundColor: "rgba(75, 161, 70, 0.1)",
    eventBorderColor: "#4BA146",
    eventTextColor: "#1a1a1a",
    dayHeaderClassNames: "bg-[#0077C8] text-white",
    dayCellClassNames: "bg-white hover:bg-gray-50",
    buttonText: {
      today: windowWidth < 640 ? '' : 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día'
    },
    buttonIcons: {
      prev: 'chevron-left',
      next: 'chevron-right',
    },
    headerToolbarClassNames: "bg-white text-[#1a1a1a] border-b border-[#4BA146]",
    buttonClassNames: "bg-white hover:bg-[#4BA146] hover:text-white text-[#1a1a1a] border border-[#4BA146] rounded px-2 py-0.5 text-xs transition-colors duration-200",
    dayMaxEvents: windowWidth < 640 ? 1 : 2,
    slotMinTime: "08:00:00",
    slotMaxTime: "20:00:00",
    allDaySlot: false,
    locale: "es",
    firstDay: 1,
    weekends: true,
    handleWindowResize: true,
    windowResizeDelay: 100,
    aspectRatio: windowWidth < 640 ? 0.8 : windowWidth < 1024 ? 1.0 : 1.3,
    eventContent: (arg) => {
      return {
        html: `<div class="fc-event-title" title="${arg.event.extendedProps.fullTitle}">${arg.event.title}</div>`
      }
    }
  };

  return (
    <div className="min-h-[60vh] bg-white p-2 sm:p-4 rounded-xl border border-[#4BA146] shadow-md overflow-hidden transition-all duration-300">
      <div className="relative z-10">
        <div className="text-center mb-4 sm:mb-6 px-2" data-aos="fade-up">
          <div className="inline-flex items-center justify-center bg-[#0077C8] p-2 rounded-full mb-2 sm:mb-3 border border-white mx-auto animate-pulse">
            <CalendarIcon className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0077C8] mb-1 sm:mb-2 px-2">
            Calendario Académico
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto px-2">
            Consulta las actividades programadas del Congreso de Sostenibilidad
          </p>
        </div>

        <div className="bg-white rounded-xl border border-[#4BA146] p-2 sm:p-3 transition-all duration-300 mx-1 shadow-sm" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 sm:mb-4 gap-2 px-1">
            <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="150">
              <Users className="w-4 h-4 text-[#F7941D]" />
              <h3 className="text-base sm:text-lg font-semibold text-[#1a1a1a]">
                Agenda del Congreso
              </h3>
            </div>
            <button
              onClick={fetchCSV}
              disabled={loading}
              className={`flex items-center gap-1 bg-[#F7941D] text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-[#e07e0f] active:scale-95 transition-all ${
                loading ? 'opacity-80 cursor-not-allowed' : ''
              }`}
              data-aos="fade-left" 
              data-aos-delay="150"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Cargando...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-3 h-3" />
                  <span>Actualizar</span>
                </>
              )}
            </button>
          </div>

          <div className="overflow-x-hidden" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-full" style={{ minWidth: '280px' }}>
              <FullCalendar
                {...calendarOptions}
                className="text-[#1a1a1a] [&_.fc-col-header-cell-cushion]:text-white [&_.fc-daygrid-day-number]:text-[#1a1a1a] [&_.fc-timegrid-axis-cushion]:text-[#1a1a1a] [&_.fc-event-time]:text-[#0077C8]"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .fc .fc-toolbar {
          padding: 0.25rem;
        }
        .fc .fc-toolbar-title {
          color: #1a1a1a;
          font-size: ${windowWidth < 640 ? '0.9rem' : '1.1rem'};
          white-space: nowrap;
          line-height: 1.3;
          margin: 0 0.25rem;
        }
        .fc .fc-button {
          background-color: white;
          border: 1px solid #4BA146;
          color: #1a1a1a;
          transition: all 0.3s ease;
          font-size: ${windowWidth < 640 ? '0.7rem' : '0.8rem'};
          padding: 0.25rem 0.5rem;
          margin: 0 1px;
        }
        .fc .fc-button:hover {
          background-color: #4BA146;
          color: white;
        }
        .fc .fc-button-active {
          background-color: #4BA146;
          color: white;
        }
        .fc .fc-scrollgrid {
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }
        .fc .fc-daygrid-event {
          border-left: 3px solid #4BA146;
          margin: 1px 0;
          background-color: rgba(75, 161, 70, 0.05);
        }
        .fc .fc-event {
          border: none;
          padding: 1px 3px;
          font-size: ${windowWidth < 640 ? '0.7rem' : '0.8rem'};
        }
        .fc .fc-timegrid-slot {
          height: ${windowWidth < 640 ? '1.8em' : '2em'};
          border-color: #e5e7eb;
        }
        .fc-event-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .fc .fc-daygrid-day-frame {
          background-color: white;
        }
        .fc .fc-daygrid-day:hover {
          background-color: #f8f8f8;
        }
        @media (max-width: 640px) {
          .fc .fc-header-toolbar {
            flex-wrap: wrap;
            gap: 0.25rem;
          }
          .fc .fc-toolbar-chunk {
            display: flex;
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </div>
  );
}