import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, AlertCircle, Bookmark } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { subscribeToCalendar, CalendarEvent } from "../lib/firebase";

export const AcademicCalendar = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToCalendar((data) => {
      setEvents(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const getTypeStyle = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'holiday': return 'text-accent border-accent/20 bg-accent/5';
      case 'exam': return 'text-secondary border-secondary/20 bg-secondary/5';
      case 'deadline': return 'text-[#FF4D4D] border-[#FF4D4D]/20 bg-[#FF4D4D]/5';
      default: return 'text-muted border-border bg-border/5';
    }
  };

  const getTypeLabel = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'holiday': return 'Holidays';
      case 'exam': return 'Examination';
      case 'deadline': return 'Deadlines';
      default: return 'General Event';
    }
  };

  return (
    <section id="calendar" className="py-24 bg-bg overflow-hidden border-b border-editorial">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeader
          tag="Temporal Logic"
          title="تعلیمی تقویم"
          subtitle="Systematic schedule of school operations"
        />

        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          {/* Calendar List */}
          <div className="space-y-4">
            {loading ? (
              <div className="h-40 flex items-center justify-center border border-border bg-brand-pale/20">
                <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            ) : events.length > 0 ? (
              <div className="grid gap-4">
                {events.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group border border-border hover:border-accent/30 transition-all p-5 sm:p-6 bg-brand-pale/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 border border-border flex flex-col items-center justify-center bg-bg group-hover:bg-accent group-hover:text-bg transition-colors">
                        <span className="urdu text-[9px] sm:text-[10px] font-black uppercase tracking-tighter">
                          {new Date(event.date).toLocaleString('ur-PK', { month: 'short' })}
                        </span>
                        <span className="urdu text-xl sm:text-2xl font-black leading-none">
                          {new Date(event.date).toLocaleString('ur-PK', { day: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className={`inline-flex px-2 py-0.5 border text-[8px] font-black uppercase tracking-widest mb-2 sm:mb-3 ${getTypeStyle(event.type)}`}>
                          {getTypeLabel(event.type)}
                        </div>
                        <h4 className="urdu text-lg sm:text-xl text-ink font-bold group-hover:text-accent transition-colors truncate sm:whitespace-normal">
                          {event.title}
                        </h4>
                        {event.description && (
                          <p className="urdu text-muted text-[10px] sm:text-xs mt-1.5 font-medium max-w-sm">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-2 text-right border-t sm:border-t-0 border-border pt-4 sm:pt-0">
                       <div className="flex items-center gap-2 text-muted urdu text-[9px] sm:text-[10px] font-bold tracking-widest bg-brand-pale sm:bg-transparent px-2 py-1 sm:p-0">
                          <Calendar size={12} className="text-accent" />
                          <span>آغاز: {new Date(event.date).toLocaleDateString('ur-PK', { day: 'numeric', month: 'short' })}</span>
                       </div>
                       {event.endDate && (
                         <div className="flex items-center gap-2 text-muted urdu text-[9px] sm:text-[10px] font-bold tracking-widest bg-brand-pale sm:bg-transparent px-2 py-1 sm:p-0">
                            <Clock size={12} className="text-accent" />
                            <span>اختتام: {new Date(event.endDate).toLocaleDateString('ur-PK', { day: 'numeric', month: 'short' })}</span>
                         </div>
                       )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-12 border border-dashed border-border flex flex-col items-center justify-center text-center">
                 <AlertCircle size={40} className="text-muted opacity-20 mb-4" />
                 <p className="text-muted text-sm font-bold uppercase tracking-widest">No scheduled events found</p>
              </div>
            )}
          </div>

          {/* Legend / Sidebar */}
          <aside className="border border-border p-8 bg-brand-pale/5 h-fit">
            <h5 className="text-accent font-black text-[10px] tracking-[0.4em] uppercase mb-8">Calendar Legend</h5>
            <div className="space-y-6">
               {[
                 { type: 'holiday', label: 'Holidays', desc: 'Summer, Winter, and Public holidays.' },
                 { type: 'exam', label: 'Examinations', desc: 'Midterms, Quarterly, and Final tests.' },
                 { type: 'deadline', label: 'Deadlines', desc: 'Fees, Admissions, and Registration.' },
                 { type: 'event', label: 'General', desc: 'Sports, Parent meetings, and Trips.' }
               ].map((item) => (
                 <div key={item.type} className="group">
                    <div className="flex items-center gap-3 mb-2">
                       <div className={`w-3 h-3 border ${getTypeStyle(item.type as any)}`} />
                       <span className="text-ink font-black text-[10px] uppercase tracking-widest">{item.label}</span>
                    </div>
                    <p className="text-muted text-[10px] leading-relaxed group-hover:text-ink transition-colors">
                       {item.desc}
                    </p>
                 </div>
               ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border flex flex-col gap-8">
               <div className="flex gap-4 items-start">
                  <Bookmark className="text-accent flex-shrink-0" size={16} />
                  <p className="urdu text-sm text-muted leading-relaxed">
                    اگر آپ کسی خاص تقریب کے بارے میں معلومات حاصل کرنا چاہتے ہیں، تو براہ کرم ہمارے واٹس ایپ نمبر پر رابطہ کریں۔
                  </p>
               </div>
               
               <a 
                 href="#admissions" 
                 className="group relative inline-flex items-center justify-center py-6 px-4 border border-accent overflow-hidden transition-all hover:bg-accent"
               >
                 <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <AlertCircle size={16} className="text-accent group-hover:text-bg" />
                 </div>
                 <span className="text-accent group-hover:text-bg font-black uppercase text-[11px] tracking-[0.4em] transition-colors">
                   Plan Your Visit
                 </span>
               </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
