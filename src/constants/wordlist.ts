import { CONFIG } from './config'

export const WORDS = [
  'tos8n',
  'wdopi',
  'mziwi',
  '8lawi',
  'aples',
  'pakwa',
  '8gwni',
  'kw8zo',
  'megos',
  'mnoda',
  'awaas',
  'wisn8',
  'wz8mi',
  'kaodi',
  'mawia',
  'pmowa',
  'akwan',
  'pigua',
  'whaga',
  'wskan',
  'ab8na',
  'kz8bo',
  'pziko',
  'minot',
  'pag8n',
  'tabna',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
