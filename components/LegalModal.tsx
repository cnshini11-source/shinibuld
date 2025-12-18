
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const content = {
    privacy: {
      title: "מדיניות פרטיות",
      icon: Shield,
      text: (
        <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed text-right dir-rtl">
          <section>
            <h4 className="text-white font-bold mb-2">כללי</h4>
            <p>אנו ב-<strong>LEVI</strong> (להלן: "העסק" או "מפעיל האתר") מכבדים את פרטיותך ורואים חשיבות עליונה בשמירה על המידע האישי שלך. מסמך זה מפרט את האופן שבו אנו אוספים, משתמשים ושומרים מידע המתקבל דרך האתר.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">המידע הנאסף</h4>
            <ul className="list-disc pr-5 space-y-2">
              <li><strong>מידע שנמסר מרצון:</strong> בעת מילוי טפסי יצירת קשר או פנייה דרך כפתור הווצאפ, אתה עשוי להזין פרטים כגון שם מלא, מספר טלפון, כתובת אימייל ושם העסק.</li>
              <li><strong>מידע טכני (אוטומטי):</strong> בעת הגלישה, האתר עושה שימוש בכלי ניתוח כגון Google Analytics ו-Google Tag Manager האוספים מידע על הרגלי הגלישה, כתובת IP, סוג דפדפן, זמני שהייה ודפים שנצפו. מידע זה אינו מזהה אותך אישית ומשמש לצרכים סטטיסטיים בלבד.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">מטרות השימוש במידע</h4>
            <p>המידע משמש למטרות הבאות: מתן מענה לפנייתך ואספקת שירותי בניית אתרים, שיווק ואוטומציה; שיפור חווית המשתמש באתר וניתוח אפקטיביות דפי הנחיתה; דיוור ישיר ועדכונים (במידה ונתת הסכמתך לכך), כאשר בכל עת תוכל להסיר את עצמך מרשימת התפוצה.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">העברת מידע לצדדים שלישיים</h4>
            <p>אנו לא מוכרים או משכירים את המידע שלך לצדדים שלישיים. מידע עשוי להיות מועבר רק בנסיבות הבאות: לצורך תפעול האתר (כגון שירותי אחסון או כלי ניתוח נתונים של Google); במקרה של דרישה משפטית או צו שיפוטי; לצורך הגנה על זכויותיו המשפטיות של העסק במקרה של מחלוקת.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">עוגיות (Cookies)</h4>
            <p>האתר משתמש בעוגיות לצורך תפעולו השוטף. באפשרותך לשנות את הגדרות הדפדפן שלך כך שיחסום עוגיות, אולם הדבר עשוי לפגוע בחווית הגלישה באתר.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">זכויות המשתמש</h4>
            <p>על פי חוק הגנת הפרטיות, התשמ"א-1981, הינך זכאי לעיין במידע עליך המוחזר במאגרי המידע שלנו, ואף לבקש את תיקונו או מחיקתו אם נמצא שאינו נכון או מעודכן.</p>
          </section>

          <p className="pt-4 border-t border-white/5 text-slate-500 italic">עודכן לאחרונה: [ ]</p>
        </div>
      )
    },
    terms: {
      title: "תקנון אתר / תנאי שימוש",
      icon: FileText,
      text: (
        <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed text-right dir-rtl">
          <section>
            <h4 className="text-white font-bold mb-2">הקדמה</h4>
            <p>ברוך הבא לאתר <strong>LEVI</strong> (להלן: "האתר"). השימוש באתר ובשירותים המוצעים בו כפוף להסכמתך לתנאים המפורטים להלן. הגלישה באתר מהווה הסכמה לתנאים אלו.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">מהות השירות</h4>
            <p>האתר מציע שירותי ייעוץ, אפיון, עיצוב ובנייה של אתרים ודפי נחיתה, שירותי אוטומציה ושיווק דיגיטלי. המידע באתר מוצג כמידע כללי בלבד ואינו מהווה התחייבות לחוזה עבודה, אלא בכפוף לחתימה על הסכם התקשרות נפרד מול הלקוח.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">קניין רוחני</h4>
            <p>כל התכנים באתר, לרבות עיצובים, קוד מקור, טקסטים, סימני מסחר, לוגואים, אנימציות וסרטונים, הינם רכושו הבלעדי של <strong>LEVI</strong>. אין להעתיק, לשכפל, להפיץ או לעשות כל שימוש מסחרי בתוכן האתר ללא אישור מפורש בכתב מבעל העסק.</p>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">הגבלת אחריות והצהרת אי-אחריות (Disclaimer)</h4>
            <ul className="list-decimal pr-5 space-y-3">
              <li><strong>תוצאות עסקיות:</strong> בניית אתר, דף נחיתה או מערכת אוטומציה הינם כלים שיווקיים. מפעיל האתר אינו מתחייב לתוצאות עסקיות ספציפיות, כמות לידים מסוימת, אחוזי המרה קבועים או רווחים כספיים. הצלחת הפעילות השיווקית תלויה בגורמים רבים שאינם בשליטת העסק (כגון שוק, תחרות, מוצר הלקוח ותקציבי פרסום).</li>
              <li><strong>תקינות טכנית:</strong> מפעיל האתר עושה מאמץ להבטיח זמינות ורציפות, אך אינו מתחייב שהאתר יהיה חסין מפני תקלות טכניות, הפסקות בשירות או פריצות סייבר.</li>
              <li><strong>נזקים:</strong> בשום מקרה לא יהיה העסק אחראי לכל נזק ישיר, עקיף, תוצאתי או מיוחד הנובע מהשימוש באתר או מהסתמכות על המידע המופיע בו.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-white font-bold mb-2">סמכות שיפוט</h4>
            <p>על תנאים אלו יחולו חוקי מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל עניין הנובע מהשימוש באתר תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.</p>
          </section>

          <p className="pt-4 border-t border-white/5 text-slate-500 italic">עודכן לאחרונה: [ ]</p>
        </div>
      )
    }
  };

  const currentContent = content[type];
  const Icon = currentContent.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-white/10 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex flex-row-reverse justify-between items-center bg-slate-900">
            <div className="flex flex-row-reverse items-center gap-3">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                 <Icon className="text-cyan-400 w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{currentContent.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
              aria-label="סגור"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
            {currentContent.text}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/5 bg-slate-950 flex justify-start">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded-lg text-sm font-bold transition-all hover:scale-[1.02]"
            >
              הבנתי, תודה
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
