"use client";

import { useMemo, useState } from "react";
import styles from "./CareAssistant.module.css";
import {
  Answers,
  Lang,
  buildAiSummary,
  buildTips,
  t,
} from "@/lib/content";
import { TOTAL_STEPS, applyAnswer, getQuestionForStep, getSelectedId } from "@/lib/wizard";

type Screen = "intro" | "question" | "result";

const LANGUAGES: { code: Lang; labelKey: string }[] = [
  { code: "de", labelKey: "langDe" },
  { code: "en", labelKey: "langEn" },
  { code: "pl", labelKey: "langPl" },
];

export default function CareAssistant() {
  const [lang, setLang] = useState<Lang>("de");
  const [screen, setScreen] = useState<Screen>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [aiInfoOpen, setAiInfoOpen] = useState(false);
  const [ctaRequested, setCtaRequested] = useState(false);

  const summary = useMemo(() => buildAiSummary(lang, answers), [lang, answers]);
  const tips = useMemo(() => buildTips(lang, answers), [lang, answers]);

  function handleSelect(optionId: string) {
    const next = applyAnswer(step, answers, optionId);
    setAnswers(next);
    window.setTimeout(() => {
      if (step + 1 >= TOTAL_STEPS) {
        setScreen("result");
      } else {
        setStep(step + 1);
      }
    }, 260);
  }

  function handleBack() {
    if (step === 0) {
      setScreen("intro");
    } else {
      setStep(step - 1);
    }
  }

  function handleRestart() {
    setAnswers({});
    setStep(0);
    setScreen("intro");
    setAiInfoOpen(false);
    setCtaRequested(false);
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <a href="https://aterima-care.pl/" target="_blank" rel="noopener noreferrer">
            <img src="/logo.svg" alt={t(lang, "brand")} className={styles.logo} />
          </a>
          <div className={styles.langToggle}>
            <div
              className={styles.langHighlight}
              style={{
                transform: `translateX(${LANGUAGES.findIndex((l) => l.code === lang) * 100}%)`,
              }}
            />
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                className={`${styles.langButton} ${lang === l.code ? styles.langButtonActive : ""}`}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
              >
                {t(lang, l.labelKey)}
              </button>
            ))}
          </div>
        </header>

        <main className={styles.main}>
          {screen === "intro" && (
            <div className={`${styles.content} ${styles.introReveal}`} key={`intro-${lang}`}>
              <span className={styles.kicker}>{t(lang, "kicker")}</span>
              <h1 className={styles.introTitle}>{t(lang, "introTitle")}</h1>
              <p className={styles.introBody}>{t(lang, "introBody")}</p>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={() => setScreen("question")}
              >
                {t(lang, "introStart")}
              </button>
              <p className={styles.privacyNote}>{t(lang, "introPrivacy")}</p>
            </div>
          )}

          {screen === "question" && (
            <QuestionScreen
              key={`q-${step}-${lang}`}
              lang={lang}
              step={step}
              answers={answers}
              onSelect={handleSelect}
              onBack={handleBack}
            />
          )}

          {screen === "result" && (
            <div className={styles.content} key={`result-${lang}`}>
              <span className={styles.kicker}>{t(lang, "resultKicker")}</span>
              <h2 className={styles.resultTitle}>{t(lang, "resultTitle")}</h2>

              <div className={styles.aiBadgeRow}>
                <span className={styles.aiBadge}>
                  <span className={styles.aiBadgeDot} />
                  {t(lang, "aiBadge")}
                </span>
                <button
                  type="button"
                  className={styles.aiInfoToggle}
                  onClick={() => setAiInfoOpen((v) => !v)}
                >
                  {aiInfoOpen ? t(lang, "aiInfoToggleClose") : t(lang, "aiInfoToggleOpen")}
                </button>
              </div>

              {aiInfoOpen && <p className={styles.aiInfoBox}>{t(lang, "aiInfoBody")}</p>}

              <div className={styles.summaryCard}>
                <p className={styles.summaryText}>{summary}</p>
              </div>

              <span className={styles.tipsLabel}>{t(lang, "tipsLabel")}</span>
              <ul className={styles.tipsList}>
                {tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>

              <div className={styles.ctaPanel}>
                <span className={styles.ctaKicker}>{t(lang, "ctaKicker")}</span>
                <h3 className={styles.ctaTitle}>{t(lang, "ctaTitle")}</h3>
                <p className={styles.ctaBody}>{t(lang, "ctaBody")}</p>
                <ul className={styles.ctaBullets}>
                  <li>{t(lang, "ctaBullet1")}</li>
                  <li>{t(lang, "ctaBullet2")}</li>
                  <li>{t(lang, "ctaBullet3")}</li>
                </ul>

                {!ctaRequested ? (
                  <button
                    type="button"
                    className={styles.ctaButton}
                    onClick={() => setCtaRequested(true)}
                  >
                    {t(lang, "ctaButton")}
                  </button>
                ) : (
                  <div className={styles.ctaConfirm}>
                    <span className={styles.ctaConfirmTitle}>{t(lang, "ctaConfirmTitle")}</span>
                    <p className={styles.ctaConfirmBody}>{t(lang, "ctaConfirmBody")}</p>
                  </div>
                )}
              </div>

              <div className={styles.restartRow}>
                <button type="button" className={styles.restartLink} onClick={handleRestart}>
                  {t(lang, "restart")}
                </button>
              </div>

              <p className={styles.disclaimer}>{t(lang, "disclaimer")}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function QuestionScreen({
  lang,
  step,
  answers,
  onSelect,
  onBack,
}: {
  lang: Lang;
  step: number;
  answers: Answers;
  onSelect: (optionId: string) => void;
  onBack: () => void;
}) {
  const question = getQuestionForStep(step, lang, answers);
  const selectedId = getSelectedId(step, answers);

  return (
    <div className={styles.content}>
      <div className={styles.progressTrack}>
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div className={styles.progressSegment} key={i}>
            {i <= step && <div className={styles.progressSegmentFill} />}
          </div>
        ))}
      </div>
      <span className={styles.progressLabel}>
        {t(lang, "stepLabel", { current: step + 1, total: TOTAL_STEPS })}
      </span>

      <h2 className={styles.questionTitle}>{question.title}</h2>
      {question.helper && <span className={styles.questionHelper}>{question.helper}</span>}

      <div className={styles.options} role="radiogroup" aria-label={question.title}>
        {question.options.map((option) => (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selectedId === option.id}
            className={`${styles.option} ${selectedId === option.id ? styles.optionSelected : ""}`}
            onClick={() => onSelect(option.id)}
          >
            <span className={styles.optionLabel}>{option.label}</span>
            {option.sublabel && <span className={styles.optionSublabel}>{option.sublabel}</span>}
          </button>
        ))}
      </div>

      <button type="button" className={styles.backLink} onClick={onBack}>
        {t(lang, "back")}
      </button>
    </div>
  );
}
