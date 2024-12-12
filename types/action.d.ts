interface SignInWithOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    image: string;
    username: string;
  };
}
interface AuthCredentials {
  name: string;
  username: string;
  email: string;
  password: string;
}
interface CreateQuestionParams {
  title: string;
  content: string;
  tags: string[];
}
interface RouteParams {
  params: Promise<Record<string, string>>;
  search: Promise<Record<string, string>>;
}
interface EditQuestionParams extends CreateQuestionParams {
  questionId: string;
}

interface GetQuestionParams {
  questionId: string;
}