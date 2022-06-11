interface TriageQuest {
  id: string;
  question: string;
  answers: TriageAnswer[];
  sort: number;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

interface TriageAnswer {
  id: string;
  answer: string;
  sort: number;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

interface Triage {
  id: string;
  name: string;
  questions: TriageQuest[];

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export default Triage;
