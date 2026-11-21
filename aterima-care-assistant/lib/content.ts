export type Lang = "de" | "en" | "pl";

export type Situation = "acute" | "gradual" | "proactive";
export type Challenge = "household" | "mobility" | "medical" | "social";
export type AcuteFollowUp = "has_grade" | "no_grade" | "unsure";
export type OngoingFollowUp = "daily" | "weekly" | "rare";
export type Burden = "low" | "medium" | "high";

export interface Answers {
  situation?: Situation;
  challenge?: Challenge;
  acuteFollowUp?: AcuteFollowUp;
  ongoingFollowUp?: OngoingFollowUp;
  burden?: Burden;
}

export interface Option<T extends string> {
  id: T;
  label: string;
  sublabel?: string;
}

export interface QuestionDef<T extends string> {
  id: string;
  title: string;
  helper?: string;
  options: Option<T>[];
}

export const STRINGS: Record<Lang, Record<string, string>> = {
  de: {
    brand: "ATERIMA CARE",
    kicker: "Erste Einschätzung für Ihre Familie",
    introTitle: "Wie können wir die Situation Ihrer Familie besser verstehen?",
    introBody:
      "Beantworten Sie 4 kurze Fragen. Sie erhalten sofort praktische Hinweise für den Alltag, ganz ohne Angabe Ihrer Kontaktdaten.",
    introStart: "Einschätzung starten",
    introPrivacy: "Anonym · Keine Diagnose · Keine Datenangabe nötig",
    stepLabel: "Schritt {current} von {total}",
    back: "Zurück",
    restart: "Antworten neu eingeben",
    resultKicker: "Ihre Einschätzung",
    resultTitle: "Das könnte Ihrer Familie jetzt helfen",
    aiBadge: "KI-gestützte Einschätzung",
    aiInfoToggleOpen: "Wie entsteht diese Einschätzung?",
    aiInfoToggleClose: "Hinweis ausblenden",
    aiInfoBody:
      "Dieser Text wird aus Ihren Antworten zusammengesetzt und fasst die Situation in eigenen Worten zusammen. In einer produktiven Version würde hier ein Sprachmodell (z. B. Claude) die Formulierung und Priorisierung individuell vornehmen. Im Prototyp simulieren wir dieses Ergebnis ohne kostenpflichtige API-Anbindung. Die darauffolgenden Hinweise stammen aus einer festen Fachlogik, nicht aus KI-Freitext.",
    tipsLabel: "Praktische Hinweise für den Alltag",
    ctaKicker: "Der nächste Schritt",
    ctaTitle: "Was ein Hausbesuch zusätzlich zeigt",
    ctaBody:
      "Diese Einschätzung basiert allein auf Ihren Angaben. Ein regionaler ATERIMA CARE Partner lernt Ihre Familie bei einem kostenlosen Hausbesuch persönlich kennen und sieht vor Ort, was online nicht sichtbar ist: die Wohnsituation, kleine Stolperfallen, die Tagesstruktur und was Ihrem Elternteil wirklich wichtig ist.",
    ctaBullet1: "Persönliches, unverbindliches Gespräch ohne Verpflichtung",
    ctaBullet2: "Einschätzung der Wohn- und Alltagssituation vor Ort",
    ctaBullet3: "Gemeinsam passende nächste Schritte besprechen",
    ctaButton: "Kostenloses Gespräch anfragen",
    ctaConfirmTitle: "Danke für Ihr Interesse",
    ctaConfirmBody:
      "In der Live-Version würde hier die unverbindliche Terminvereinbarung mit einem regionalen Partner starten. Dieser Prototyp sammelt keine echten Kontaktdaten.",
    disclaimer:
      "Diese Einschätzung ersetzt keine medizinische oder pflegerische Beratung und stellt keine Diagnose dar.",
    langDe: "DE",
    langEn: "EN",
    langPl: "PL",
  },
  en: {
    brand: "ATERIMA CARE",
    kicker: "A first read on your family's situation",
    introTitle: "Help us understand your family's situation",
    introBody:
      "Answer 4 short questions. You'll get practical, everyday guidance right away, with no contact details required.",
    introStart: "Start the assessment",
    introPrivacy: "Anonymous · No diagnosis · No data required",
    stepLabel: "Step {current} of {total}",
    back: "Back",
    restart: "Start over",
    resultKicker: "Your assessment",
    resultTitle: "What could help your family right now",
    aiBadge: "AI-assisted assessment",
    aiInfoToggleOpen: "How is this put together?",
    aiInfoToggleClose: "Hide note",
    aiInfoBody:
      "This text is assembled from your answers and summarises the situation in plain language. In a production version, a language model (e.g. Claude) would phrase and prioritise this individually. In this prototype, we simulate that output without connecting a paid API. The tips below come from a fixed set of professional guidance, not free-form AI text.",
    tipsLabel: "Practical, everyday guidance",
    ctaKicker: "The next step",
    ctaTitle: "What a home visit adds",
    ctaBody:
      "This assessment is based only on what you've told us. A regional ATERIMA CARE partner gets to know your family in person during a free home visit and sees what can't be assessed online: the living situation, small safety risks, daily routines, and what truly matters to your parent.",
    ctaBullet1: "A personal, no-obligation conversation",
    ctaBullet2: "An on-site read of the home and daily situation",
    ctaBullet3: "Working out fitting next steps together",
    ctaButton: "Request a free conversation",
    ctaConfirmTitle: "Thank you for your interest",
    ctaConfirmBody:
      "In the live version, this would start a no-obligation scheduling flow with a regional partner. This prototype does not collect any real contact details.",
    disclaimer:
      "This assessment does not replace medical or professional care advice and is not a diagnosis.",
    langDe: "DE",
    langEn: "EN",
    langPl: "PL",
  },
  pl: {
    brand: "ATERIMA CARE",
    kicker: "Pierwsza ocena sytuacji Twojej rodziny",
    introTitle: "Pomóżmy lepiej zrozumieć sytuację Twojej rodziny",
    introBody:
      "Odpowiedz na 4 krótkie pytania. Od razu otrzymasz praktyczne wskazówki na co dzień, bez podawania danych kontaktowych.",
    introStart: "Rozpocznij ocenę",
    introPrivacy: "Anonimowo · Bez diagnozy · Bez podawania danych",
    stepLabel: "Krok {current} z {total}",
    back: "Wstecz",
    restart: "Zacznij od nowa",
    resultKicker: "Twoja ocena",
    resultTitle: "Co może teraz pomóc Twojej rodzinie",
    aiBadge: "Ocena wspierana przez AI",
    aiInfoToggleOpen: "Jak powstaje ta ocena?",
    aiInfoToggleClose: "Ukryj informację",
    aiInfoBody:
      "Ten tekst powstaje na podstawie Twoich odpowiedzi i podsumowuje sytuację prostym językiem. W wersji produkcyjnej treść i priorytety formułowałby model językowy (np. Claude) indywidualnie dla każdej rodziny. W tym prototypie symulujemy ten efekt bez podłączania płatnego API. Wskazówki poniżej pochodzą ze stałej logiki eksperckiej, a nie z dowolnego tekstu generowanego przez AI.",
    tipsLabel: "Praktyczne wskazówki na co dzień",
    ctaKicker: "Kolejny krok",
    ctaTitle: "Co dodatkowo pokazuje wizyta domowa",
    ctaBody:
      "Ta ocena opiera się wyłącznie na podanych przez Ciebie informacjach. Regionalny partner ATERIMA CARE pozna Twoją rodzinę osobiście podczas bezpłatnej wizyty domowej i zobaczy to, czego nie widać online: warunki mieszkaniowe, drobne zagrożenia, rytm dnia oraz to, co naprawdę liczy się dla Twojego rodzica.",
    ctaBullet1: "Osobista, niezobowiązująca rozmowa",
    ctaBullet2:
      "Ocena warunków mieszkaniowych i codziennego funkcjonowania na miejscu",
    ctaBullet3: "Wspólne ustalenie odpowiednich kolejnych kroków",
    ctaButton: "Poproś o bezpłatną rozmowę",
    ctaConfirmTitle: "Dziękujemy za zainteresowanie",
    ctaConfirmBody:
      "W wersji produkcyjnej w tym miejscu rozpoczynałoby się niezobowiązujące umawianie terminu z regionalnym partnerem. Ten prototyp nie zbiera żadnych prawdziwych danych kontaktowych.",
    disclaimer:
      "Ta ocena nie zastępuje porady medycznej ani opiekuńczej i nie stanowi diagnozy.",
    langDe: "DE",
    langEn: "EN",
    langPl: "PL",
  },
};

export function t(
  lang: Lang,
  key: string,
  vars?: Record<string, string | number>,
): string {
  let str = STRINGS[lang][key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(`{${k}}`, String(v));
    }
  }
  return str;
}

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

const SITUATION_QUESTIONS: Record<Lang, QuestionDef<Situation>> = {
  de: {
    id: "situation",
    title: "Was beschreibt die aktuelle Situation am besten?",
    options: [
      {
        id: "acute",
        label:
          "Kürzlicher Krankenhausaufenthalt oder plötzliche Verschlechterung",
        sublabel: "Die Situation hat sich in letzter Zeit sprunghaft verändert",
      },
      {
        id: "gradual",
        label: "Schleichende Veränderung über die letzte Zeit",
        sublabel: "Alltag und Fähigkeiten verändern sich langsam, aber spürbar",
      },
      {
        id: "proactive",
        label: "Vorausschauende Planung",
        sublabel: "Noch keine akute Veränderung, aber Vorsorge ist das Ziel",
      },
    ],
  },
  en: {
    id: "situation",
    title: "What best describes the current situation?",
    options: [
      {
        id: "acute",
        label: "A recent hospital stay or sudden decline",
        sublabel: "Things have changed abruptly in the last while",
      },
      {
        id: "gradual",
        label: "A gradual change over recent months",
        sublabel: "Daily life and abilities are shifting slowly but noticeably",
      },
      {
        id: "proactive",
        label: "Planning ahead",
        sublabel: "No acute change yet, but preparing early matters",
      },
    ],
  },
  pl: {
    id: "situation",
    title: "Co najlepiej opisuje obecną sytuację?",
    options: [
      {
        id: "acute",
        label: "Niedawny pobyt w szpitalu lub nagłe pogorszenie",
        sublabel: "Sytuacja zmieniła się ostatnio gwałtownie",
      },
      {
        id: "gradual",
        label: "Stopniowa zmiana w ostatnim czasie",
        sublabel:
          "Codzienne funkcjonowanie i możliwości zmieniają się powoli, ale wyraźnie",
      },
      {
        id: "proactive",
        label: "Planowanie z wyprzedzeniem",
        sublabel:
          "Nie ma jeszcze nagłej zmiany, ale celem jest wcześniejsze przygotowanie",
      },
    ],
  },
};

const CHALLENGE_QUESTIONS: Record<Lang, QuestionDef<Challenge>> = {
  de: {
    id: "challenge",
    title: "Wo zeigt sich die größte Herausforderung im Alltag?",
    options: [
      { id: "household", label: "Haushalt & alltägliche Aufgaben" },
      { id: "mobility", label: "Mobilität & Sicherheit zuhause" },
      { id: "medical", label: "Medikamente & Arzttermine organisieren" },
      { id: "social", label: "Einsamkeit & emotionale Verfassung" },
    ],
  },
  en: {
    id: "challenge",
    title: "Where does the biggest everyday challenge show up?",
    options: [
      { id: "household", label: "Household & daily tasks" },
      { id: "mobility", label: "Mobility & safety at home" },
      { id: "medical", label: "Organising medication & appointments" },
      { id: "social", label: "Loneliness & emotional wellbeing" },
    ],
  },
  pl: {
    id: "challenge",
    title: "Gdzie pojawia się największe wyzwanie w codziennym życiu?",
    options: [
      { id: "household", label: "Dom i codzienne obowiązki" },
      { id: "mobility", label: "Mobilność i bezpieczeństwo w domu" },
      { id: "medical", label: "Organizacja leków i wizyt lekarskich" },
      { id: "social", label: "Samotność i kondycja emocjonalna" },
    ],
  },
};

const ACUTE_FOLLOWUP_QUESTIONS: Record<Lang, QuestionDef<AcuteFollowUp>> = {
  de: {
    id: "acuteFollowUp",
    title: "Liegt bereits ein anerkannter Pflegegrad vor?",
    helper:
      "Das hilft uns einzuschätzen, welche Unterstützung bereits zugänglich ist.",
    options: [
      { id: "has_grade", label: "Ja, ein Pflegegrad ist bereits anerkannt" },
      { id: "no_grade", label: "Nein, bisher wurde kein Antrag gestellt" },
      { id: "unsure", label: "Das ist mir aktuell nicht klar" },
    ],
  },
  en: {
    id: "acuteFollowUp",
    title: "Has a care level (Pflegegrad) already been approved?",
    helper: "This helps us see what support may already be accessible.",
    options: [
      { id: "has_grade", label: "Yes, a care level is already approved" },
      { id: "no_grade", label: "No, nothing has been applied for yet" },
      { id: "unsure", label: "I'm not sure right now" },
    ],
  },
  pl: {
    id: "acuteFollowUp",
    title: "Czy przyznano już niemiecki stopień opieki (Pflegegrad)?",
    helper: "To pomaga ocenić, jakie wsparcie jest już dostępne.",
    options: [
      { id: "has_grade", label: "Tak, Pflegegrad został już przyznany" },
      { id: "no_grade", label: "Nie, nie złożono jeszcze wniosku" },
      { id: "unsure", label: "Nie jestem tego pewna/pewien" },
    ],
  },
};

const ONGOING_FOLLOWUP_QUESTIONS: Record<Lang, QuestionDef<OngoingFollowUp>> = {
  de: {
    id: "ongoingFollowUp",
    title: "Wie oft sind Sie aktuell selbst vor Ort, um zu unterstützen?",
    options: [
      { id: "daily", label: "Fast täglich" },
      { id: "weekly", label: "Mehrmals pro Woche" },
      { id: "rare", label: "Selten, da ich weiter entfernt wohne" },
    ],
  },
  en: {
    id: "ongoingFollowUp",
    title: "How often are you currently there in person to help?",
    options: [
      { id: "daily", label: "Almost daily" },
      { id: "weekly", label: "Several times a week" },
      { id: "rare", label: "Rarely, since I live further away" },
    ],
  },
  pl: {
    id: "ongoingFollowUp",
    title: "Jak często bywasz osobiście na miejscu, aby pomagać?",
    options: [
      { id: "daily", label: "Niemal codziennie" },
      { id: "weekly", label: "Kilka razy w tygodniu" },
      { id: "rare", label: "Rzadko, ponieważ mieszkam dalej" },
    ],
  },
};

const BURDEN_QUESTIONS: Record<Lang, QuestionDef<Burden>> = {
  de: {
    id: "burden",
    title: "Wie würden Sie die aktuelle Belastung der Familie einschätzen?",
    options: [
      { id: "low", label: "Gut zu bewältigen" },
      { id: "medium", label: "Spürbar, aber im Griff" },
      { id: "high", label: "Hoch, wir sind an unserer Grenze" },
    ],
  },
  en: {
    id: "burden",
    title: "How would you rate the family's current strain?",
    options: [
      { id: "low", label: "Manageable" },
      { id: "medium", label: "Noticeable, but under control" },
      { id: "high", label: "High, we're close to our limit" },
    ],
  },
  pl: {
    id: "burden",
    title: "Jak oceniasz obecne obciążenie rodziny?",
    options: [
      { id: "low", label: "Da się to ogarnąć" },
      { id: "medium", label: "Odczuwalne, ale pod kontrolą" },
      { id: "high", label: "Wysokie, jesteśmy na granicy wytrzymałości" },
    ],
  },
};

export function getSituationQuestion(lang: Lang): QuestionDef<Situation> {
  return SITUATION_QUESTIONS[lang];
}

export function getChallengeQuestion(lang: Lang): QuestionDef<Challenge> {
  return CHALLENGE_QUESTIONS[lang];
}

export function getAcuteFollowUpQuestion(
  lang: Lang,
): QuestionDef<AcuteFollowUp> {
  return ACUTE_FOLLOWUP_QUESTIONS[lang];
}

export function getOngoingFollowUpQuestion(
  lang: Lang,
): QuestionDef<OngoingFollowUp> {
  return ONGOING_FOLLOWUP_QUESTIONS[lang];
}

export function getBurdenQuestion(lang: Lang): QuestionDef<Burden> {
  return BURDEN_QUESTIONS[lang];
}

// ---------------------------------------------------------------------------
// Advice engine (rule-based "logic" layer)
// ---------------------------------------------------------------------------

const TIPS_BY_CHALLENGE: Record<Lang, Record<Challenge, string[]>> = {
  de: {
    household: [
      "Feste Tageszeiten für Mahlzeiten, Medikamente und Ruhephasen geben Orientierung im Alltag.",
      "Prüfen Sie einen Einkaufs- oder Haushaltsservice, um die körperliche Belastung zu senken.",
      "Eine einfache Alltagscheckliste (Essen, Hygiene, kleine Besorgungen) erleichtert die Übergabe zwischen Helfenden.",
      "Binden Sie Nachbarschaft oder Freundeskreis bewusst in kleine, wiederkehrende Aufgaben ein.",
    ],
    mobility: [
      "Gehen Sie die Wohnung auf Stolperfallen durch: lose Teppiche, Kabel, schlechte Beleuchtung.",
      "Haltegriffe im Bad und rutschfeste Matten reduzieren das Sturzrisiko spürbar.",
      "Ein Hausnotrufsystem schafft zusätzliche Sicherheit, auch wenn niemand vor Ort ist.",
      "Lassen Sie Gehhilfen regelmäßig auf Zustand und richtige Einstellung prüfen.",
    ],
    medical: [
      "Ein gut sichtbarer Medikamentenplan oder Wochendosierer beugt Verwechslungen vor.",
      "Benennen Sie eine Person als zentrale Ansprechperson für alle Ärzte und Apotheken.",
      "Ein gemeinsamer Kalender für Termine und Rezepte verhindert doppelte oder vergessene Wege.",
      "Notieren Sie Fragen vor Arztbesuchen schriftlich. Das spart Zeit und Nerven.",
    ],
    social: [
      "Feste, wiederkehrende Kontaktzeiten, auch kurze Anrufe, geben Halt.",
      "Prüfen Sie lokale Angebote wie Seniorentreffs oder Tagespflege in der Nähe.",
      "Achten Sie auf Veränderungen der Stimmung und sprechen Sie diese behutsam an.",
      "Kleine gemeinsame Rituale, etwa ein fester Anruftermin, erhalten Nähe über Distanz.",
    ],
  },
  en: {
    household: [
      "Fixed times for meals, medication, and rest create structure in daily life.",
      "Look into a grocery or household help service to ease the physical load.",
      "A simple daily checklist (meals, hygiene, small errands) makes handovers between helpers easier.",
      "Involve neighbours or friends deliberately in small, recurring tasks.",
    ],
    mobility: [
      "Walk through the home for trip hazards: loose rugs, cables, poor lighting.",
      "Grab bars in the bathroom and non-slip mats noticeably reduce fall risk.",
      "A home emergency call system adds a layer of safety even when no one's there.",
      "Have mobility aids checked regularly for condition and correct fit.",
    ],
    medical: [
      "A clearly visible medication plan or weekly pill organiser prevents mix-ups.",
      "Name one person as the main point of contact for doctors and pharmacies.",
      "A shared calendar for appointments and prescriptions avoids duplicated or missed trips.",
      "Write down questions before doctor visits to save time and stress.",
    ],
    social: [
      "Fixed, recurring contact times, even short calls, provide stability.",
      "Check local options such as seniors' meetups or day care centres nearby.",
      "Watch for changes in mood and raise them gently, without pressure.",
      "Small shared rituals, like a set weekly call, keep closeness across distance.",
    ],
  },
  pl: {
    household: [
      "Stałe pory posiłków, leków i odpoczynku dają poczucie porządku w codzienności.",
      "Rozważ pomoc w zakupach lub w prowadzeniu domu, aby zmniejszyć obciążenie fizyczne.",
      "Prosta checklista codziennych spraw (posiłki, higiena, drobne sprawunki) ułatwia przekazywanie obowiązków między osobami pomagającymi.",
      "Świadomie włączaj sąsiadów lub znajomych w drobne, powtarzalne zadania.",
    ],
    mobility: [
      "Sprawdź mieszkanie pod kątem zagrożeń: luźne dywany, kable, słabe oświetlenie.",
      "Uchwyty w łazience i antypoślizgowe maty wyraźnie zmniejszają ryzyko upadku.",
      "System przywoławczy (teleopieka) daje dodatkowe poczucie bezpieczeństwa, nawet gdy nikogo nie ma w pobliżu.",
      "Regularnie sprawdzaj stan i prawidłowe dopasowanie sprzętu wspomagającego chodzenie.",
    ],
    medical: [
      "Dobrze widoczny plan leków lub organizer tygodniowy zapobiega pomyłkom.",
      "Wyznacz jedną osobę jako główny punkt kontaktu dla lekarzy i aptek.",
      "Wspólny kalendarz wizyt i recept zapobiega podwójnym lub zapomnianym terminom.",
      "Zapisuj pytania przed wizytą u lekarza. To oszczędza czas i nerwy.",
    ],
    social: [
      "Stałe, powtarzalne momenty kontaktu, nawet krótkie telefony, dają poczucie stabilności.",
      "Sprawdź lokalne oferty, np. kluby seniora lub dzienne domy opieki w okolicy.",
      "Zwracaj uwagę na zmiany nastroju i delikatnie o nie pytaj.",
      "Małe wspólne rytuały, np. stała pora na telefon, utrzymują bliskość mimo odległości.",
    ],
  },
};

const SITUATION_NOTE: Record<Lang, Record<Situation, string>> = {
  de: {
    acute:
      "Gerade in den ersten Wochen nach einem Klinikaufenthalt verändert sich der Alltag oft grundlegend. Unterstützung ist in dieser Phase besonders wirksam.",
    gradual:
      "Da sich die Situation schrittweise verändert, hilft es, Beobachtungen schriftlich festzuhalten. Das erleichtert spätere Gespräche mit Fachstellen.",
    proactive:
      "Vorausschauend zu planen ist ein echter Vorteil: Entscheidungen lassen sich in Ruhe treffen statt unter Zeitdruck im Akutfall.",
  },
  en: {
    acute:
      "In the first weeks after a hospital stay, daily life often changes fundamentally. Support tends to matter most in this phase.",
    gradual:
      "Since the situation is shifting gradually, it helps to write down observations over time. This makes later conversations with professionals easier.",
    proactive:
      "Planning ahead is a real advantage: decisions can be made calmly instead of under pressure during an acute moment.",
  },
  pl: {
    acute:
      "Zwłaszcza w pierwszych tygodniach po pobycie w szpitalu codzienność często zmienia się bardzo mocno. W tej fazie wsparcie ma największe znaczenie.",
    gradual:
      "Skoro sytuacja zmienia się stopniowo, warto zapisywać obserwacje. Ułatwi to późniejsze rozmowy ze specjalistami.",
    proactive:
      "Planowanie z wyprzedzeniem to realna przewaga: decyzje można podejmować spokojnie, a nie pod presją w nagłej sytuacji.",
  },
};

const ACUTE_FOLLOWUP_NOTE: Record<Lang, Record<AcuteFollowUp, string>> = {
  de: {
    has_grade:
      "Mit einem anerkannten Pflegegrad stehen bereits Unterstützungsleistungen zur Verfügung, die sich gut mit häuslicher Betreuung kombinieren lassen.",
    no_grade:
      "Ohne bisherige Einstufung lohnt sich ein erster Antrag bei der Pflegekasse. Das eröffnet Zugang zu weiteren Unterstützungsmöglichkeiten.",
    unsure:
      "Falls unklar ist, ob ein Pflegegrad vorliegt, lohnt sich als erster Schritt ein Blick in die Unterlagen oder ein kurzer Anruf bei der Krankenkasse.",
  },
  en: {
    has_grade:
      "With an approved care level, support benefits are already available that combine well with home care.",
    no_grade:
      "Without an existing assessment, it's worth submitting a first application to the care insurance fund. This opens access to further support.",
    unsure:
      "If it's unclear whether a care level exists, a good first step is checking your documents or making a short call to the health insurer.",
  },
  pl: {
    has_grade:
      "Mając przyznany Pflegegrad, rodzina ma już dostęp do świadczeń wsparcia, które dobrze łączą się z opieką domową.",
    no_grade:
      "Bez dotychczasowej oceny warto złożyć pierwszy wniosek do kasy opiekuńczej (Pflegekasse). To otwiera dostęp do dalszego wsparcia.",
    unsure:
      "Jeśli nie jest jasne, czy Pflegegrad został przyznany, dobrym pierwszym krokiem jest sprawdzenie dokumentów lub krótki telefon do kasy chorych.",
  },
};

const ONGOING_FOLLOWUP_NOTE: Record<Lang, Record<OngoingFollowUp, string>> = {
  de: {
    daily:
      "Da Sie selbst fast täglich unterstützen, lohnt es sich, bewusst eigene Entlastungsmomente einzuplanen, um langfristig stabil zu bleiben.",
    weekly:
      "Bei regelmäßigen, aber nicht täglichen Besuchen hilft eine klare Absprache, wer welche Aufgabe übernimmt.",
    rare: "Bei größerer Entfernung helfen feste digitale Routinen sowie eine vertraute Person vor Ort, die kurzfristig nach dem Rechten sehen kann.",
  },
  en: {
    daily:
      "Since you're supporting almost daily yourself, it's worth deliberately planning moments of relief to stay stable in the long run.",
    weekly:
      "With regular but not daily visits, a clear agreement on who handles what makes a real difference.",
    rare: "With more distance involved, set digital routines and a trusted local contact who can check in on short notice both help.",
  },
  pl: {
    daily:
      "Skoro niemal codziennie pomagasz osobiście, warto świadomie zaplanować chwile odciążenia, aby wytrzymać na dłuższą metę.",
    weekly:
      "Przy regularnych, ale nie codziennych wizytach pomaga jasny podział, kto za co odpowiada.",
    rare: "Przy większej odległości pomagają stałe cyfrowe rutyny oraz zaufana osoba na miejscu, która może szybko sprawdzić sytuację.",
  },
};

const BURDEN_OPENER: Record<Lang, Record<Burden, string>> = {
  de: {
    low: "Die Lage klingt aktuell gut zu bewältigen",
    medium: "Die Belastung ist spürbar, aber noch im Griff",
    high: "Die Belastung klingt aktuell hoch",
  },
  en: {
    low: "Things currently sound manageable",
    medium: "The strain is noticeable but still under control",
    high: "The current strain sounds high",
  },
  pl: {
    low: "Sytuacja brzmi obecnie na możliwą do ogarnięcia",
    medium: "Obciążenie jest odczuwalne, ale wciąż pod kontrolą",
    high: "Obecne obciążenie brzmi na wysokie",
  },
};

const CHALLENGE_LABEL: Record<Lang, Record<Challenge, string>> = {
  de: {
    household: "im Haushalt und bei alltäglichen Aufgaben",
    mobility: "bei Mobilität und Sicherheit zuhause",
    medical: "bei Medikamenten und Arztterminen",
    social: "bei Einsamkeit und emotionaler Verfassung",
  },
  en: {
    household: "around the household and daily tasks",
    mobility: "around mobility and safety at home",
    medical: "around medication and appointments",
    social: "around loneliness and emotional wellbeing",
  },
  pl: {
    household: "w zakresie domu i codziennych obowiązków",
    mobility: "w zakresie mobilności i bezpieczeństwa w domu",
    medical: "w zakresie leków i wizyt lekarskich",
    social: "w zakresie samotności i kondycji emocjonalnej",
  },
};

const SITUATION_LABEL: Record<Lang, Record<Situation, string>> = {
  de: {
    acute:
      "nach einem Krankenhausaufenthalt bzw. einer plötzlichen Veränderung",
    gradual: "nach einer schleichenden Veränderung der letzten Zeit",
    proactive: "im Rahmen vorausschauender Planung",
  },
  en: {
    acute: "following a hospital stay or sudden change",
    gradual: "following a gradual change over recent months",
    proactive: "as part of planning ahead",
  },
  pl: {
    acute: "po pobycie w szpitalu lub nagłej zmianie",
    gradual: "po stopniowej zmianie w ostatnim czasie",
    proactive: "w ramach planowania z wyprzedzeniem",
  },
};

/**
 * Simulated AI touchpoint: in production this paragraph would come from an
 * LLM call that reads the structured answers and writes a short, empathetic
 * synthesis. Here it is assembled from templates so the prototype needs no
 * paid API or backend — see the "aiInfoBody" copy shown to the user.
 */
export function buildAiSummary(lang: Lang, answers: Answers): string {
  const { situation, challenge, burden } = answers;
  if (!situation || !challenge || !burden) return "";

  const opener = BURDEN_OPENER[lang][burden];
  const situationLabel = SITUATION_LABEL[lang][situation];
  const challengeLabel = CHALLENGE_LABEL[lang][challenge];

  if (lang === "de") {
    return `${opener}, ${situationLabel}, mit dem größten Druckpunkt ${challengeLabel}. Das ist eine sehr häufige Ausgangslage für Familien in dieser Phase. Die folgenden Hinweise setzen genau dort an, bevor es um weitere Unterstützung geht.`;
  }
  if (lang === "pl") {
    return `${opener}, ${situationLabel}, z największym punktem napięcia ${challengeLabel}. To bardzo częsty punkt wyjścia dla rodzin na tym etapie. Poniższe wskazówki odnoszą się właśnie do tego, zanim pojawi się temat dalszego wsparcia.`;
  }
  return `${opener}, ${situationLabel}, with the biggest pressure point ${challengeLabel}. This is a very common starting point for families in this phase. The guidance below starts exactly there, before any further support comes into play.`;
}

export function buildTips(lang: Lang, answers: Answers): string[] {
  const { situation, challenge, acuteFollowUp, ongoingFollowUp } = answers;
  if (!situation || !challenge) return [];

  const tips: string[] = [...TIPS_BY_CHALLENGE[lang][challenge]];

  tips.push(SITUATION_NOTE[lang][situation]);

  if (situation === "acute" && acuteFollowUp) {
    tips.push(ACUTE_FOLLOWUP_NOTE[lang][acuteFollowUp]);
  } else if (situation !== "acute" && ongoingFollowUp) {
    tips.push(ONGOING_FOLLOWUP_NOTE[lang][ongoingFollowUp]);
  }

  return tips;
}
