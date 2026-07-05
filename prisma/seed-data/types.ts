export interface QuestionData {
  text: string;
  options: string; // JSON.stringify([...])
  answer: string;  // index 0-based dạng string: "0", "1", "2", "3"
}

export interface QuizData {
  title: string;
  questions: QuestionData[];
}

export interface LessonData {
  title: string;
  order: number;
  content: string;
}

export interface ModuleData {
  title: string;
  order: number;
  volume?: number;
  lessons: LessonData[];
  quiz: QuizData;
}

export interface CourseData {
  title: string;
  slug: string;
  subject: "english" | "math" | "physics" | "chemistry" | "history" | "exam-prep" | "nckh";
  grade: "9" | "10" | "11" | "12" | "university";
  description: string;
  thumbnail?: string;
  published: boolean;
  modules: ModuleData[];
}
