export const FOOD_CATEGORIES = [
  { key: "한식", label: "한식 🍚" },
  { key: "일식", label: "일식 🍣" },
  { key: "중식", label: "중식 🥟" },
  { key: "양식", label: "양식 🍽" },
  { key: "분식", label: "분식 🍜" },
  { key: "채식", label: "채식 🌱" },
  { key: "샐러드", label: "샐러드 🥗" },
  { key: "집밥", label: "집밥 🥘" },
] as const;

export const DAY_OF_THE_WEEKS = [
  { key: "평일", label: "평일 📅" },
  { key: "주말", label: "주말 🌞" },
] as const;

export const TIME_ZONES = [
  { key: "아침", label: "아침 🌅" },
  { key: "점심", label: "점심 🏞" },
  { key: "저녁", label: "저녁 🌇" },
  { key: "심야", label: "심야 🌃" },
  { key: "새벽", label: "새벽 🌄" },
] as const;

export const WHO_WITHS = [
  { key: "혼자", label: "혼자 👤" },
  { key: "가족", label: "가족 👨‍👩‍👧‍👦" },
  { key: "연인", label: "연인 👫" },
  { key: "친구들(남자)", label: "친구들(남자) 👬" },
  { key: "친구들(여자)", label: "친구들(여자) 👭" },
  { key: "직장 동료", label: "직장 동료 🧑‍💻" },
];

export const EMOTIONS = [
  { key: "기쁨", label: "기쁨 😊" },
  { key: "즐거움", label: "즐거움 🤗" },
  { key: "우울함", label: "우울함 😢" },
  { key: "화남", label: "화남 😡" },
  { key: "스트레스", label: "스트레스 😫" },
];

export const WEATHERS = [
  { key: "맑음", label: "맑음 ☀️" },
  { key: "흐림", label: "흐림 ⛅️" },
  { key: "비", label: "비 🌧" },
  { key: "눈", label: "눈 🌨" },
  { key: "바람", label: "바람 💨" },
];

export const SEASONS = [
  { key: "봄", label: "봄 🌸" },
  { key: "여름", label: "여름 🍉" },
  { key: "가을", label: "가을 🍁" },
  { key: "겨울", label: "겨울 ☃️" },
];

export const MOODS = [
  { key: "로맨틱", label: "로맨틱 💕" },
  { key: "감성적", label: "감성적 🌹" },
  { key: "활기찬", label: "활기찬 🤗" },
  { key: "고급스러운", label: "고급스러운 💎" },
  { key: "빈티지", label: "빈티지 📻" },
  { key: "전통적", label: "전통적 🇰🇷🇰" },
  { key: "시끌벅적한", label: "시끌벅적한 📣" },
];

export const EMOJI: { [key: string]: string } = {
  한식: "🥘",
  일식: "🍣",
  중식: "🍛",
  양식: "🥩",
  분식: "🍢",
  채식: "🥦",
  샐러드: "🥗",
  집밥: "🍚",
  아침: "🌤",
  점심: "🔥",
  저녁: "🌙",
  심야: "🌟",
  새벽: "🌕",
  혼자: "😀",
  가족: "👨‍👩‍👧‍👦",
  연인: "❤️",
  친구: "👥",
  "직장 동료": "💼",
  기쁨: "😊",
  즐거움: "🤗",
  우울함: "😢",
  화남: "😡",
  스트레스: "😰",
  맑음: "☀️",
  흐림: "⛅️",
  비: "🌧",
  눈: "🌨",
  바람: "💨",
  봄: "🌼",
  여름: "🍉",
  가을: "🍂",
  겨울: "☃️",
  로맨틱: "💕",
  감성적: "🌹",
  활기찬: "😆",
  고급스러운: "💎",
  모던한: "❓",
  빈티지: "📻",
  전통적: "🇰🇷🇰",
  시끌벅적한: "📣",
} as const;
