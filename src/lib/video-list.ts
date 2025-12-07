// src/lib/video-list.ts

export interface VideoItem {
  title: string;
  videoId: string;
  channel: string;
}

export const VIDEOS: VideoItem[] = [
  {
    title: "7 Señales de que Sientes una Profunda Soledad",
    videoId: "FxYvGQP2wqE",
    channel: "Psych2Go"
  },
  {
    title: "La soledad",
    videoId: "yT01CAWDtGM",
    channel: "En Pocas Palabras – Kurzgesagt"
  },
  {
    title: "No eres tus pensamientos",
    videoId: "80Hdye6fPa4",
    channel: "Mind Jorge"
  },
  // ¡Aquí agregas los nuevos sin miedo a romper el diseño!
  // {
  //   title: "Nuevo Video",
  //   videoId: "...",
  //   channel: "..."
  // },
]