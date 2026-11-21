import {
  Answers,
  Lang,
  QuestionDef,
  getAcuteFollowUpQuestion,
  getBurdenQuestion,
  getChallengeQuestion,
  getOngoingFollowUpQuestion,
  getSituationQuestion,
} from "./content";

export const TOTAL_STEPS = 4;

export function getQuestionForStep(
  step: number,
  lang: Lang,
  answers: Answers
): QuestionDef<string> {
  switch (step) {
    case 0:
      return getSituationQuestion(lang);
    case 1:
      return getChallengeQuestion(lang);
    case 2:
      return answers.situation === "acute"
        ? getAcuteFollowUpQuestion(lang)
        : getOngoingFollowUpQuestion(lang);
    case 3:
    default:
      return getBurdenQuestion(lang);
  }
}

export function applyAnswer(step: number, answers: Answers, optionId: string): Answers {
  switch (step) {
    case 0:
      return { ...answers, situation: optionId as Answers["situation"] };
    case 1:
      return { ...answers, challenge: optionId as Answers["challenge"] };
    case 2:
      return answers.situation === "acute"
        ? { ...answers, acuteFollowUp: optionId as Answers["acuteFollowUp"] }
        : { ...answers, ongoingFollowUp: optionId as Answers["ongoingFollowUp"] };
    case 3:
      return { ...answers, burden: optionId as Answers["burden"] };
    default:
      return answers;
  }
}

export function getSelectedId(step: number, answers: Answers): string | undefined {
  switch (step) {
    case 0:
      return answers.situation;
    case 1:
      return answers.challenge;
    case 2:
      return answers.situation === "acute" ? answers.acuteFollowUp : answers.ongoingFollowUp;
    case 3:
      return answers.burden;
    default:
      return undefined;
  }
}
