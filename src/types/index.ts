export type ToneMode = "mild" | "medium" | "extra" | "absurd";

export interface TranslateRequest {
  text: string;
  tone: ToneMode;
}

export interface TranslateResponse {
  translation: string;
  buzzwords: string[];
}

export interface Example {
  raw: string;
  pro: string;
}
