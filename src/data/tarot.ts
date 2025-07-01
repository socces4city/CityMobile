export interface TarotCard {
  id: number
  name: string
  suit?: string
  arcana: 'major' | 'minor'
  keywords: string[]
  upright: string
  reversed: string
  description: string
  element?: string
}

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    arcana: "major",
    keywords: ["New beginnings", "Innocence", "Adventure", "Faith"],
    upright: "New journey, taking a leap of faith, being spontaneous, innocence, freedom",
    reversed: "Recklessness, risk-taking, carelessness, naivety",
    description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "major",
    keywords: ["Manifestation", "Power", "Skill", "Concentration"],
    upright: "Manifestation, resourcefulness, power, inspired action, creativity",
    reversed: "Manipulation, poor planning, untapped talents, illusion",
    description: "The Magician is about making higher and better use of one's spiritual and material resources. The Magician is the conduit that converts energy into matter, and ideas into reality."
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "major",
    keywords: ["Intuition", "Sacred knowledge", "Mystery", "Subconscious"],
    upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
    reversed: "Secrets, disconnected from intuition, withdrawal and silence",
    description: "The High Priestess signifies spiritual enlightenment, inner illumination, divine knowledge and wisdom. She shows the path to her inner self."
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "major",
    keywords: ["Femininity", "Beauty", "Nature", "Abundance"],
    upright: "Femininity, beauty, nature, nurturing, abundance, creativity",
    reversed: "Creative block, dependence on others, smothering, lack of growth",
    description: "The Empress is a creation card. She is the Venus of the tarot, representing love, beauty, sex, and desire. She indicates a strong, nurturing presence in your life."
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "major",
    keywords: ["Authority", "Father-figure", "Structure", "Control"],
    upright: "Authority, establishment, structure, a father figure, control",
    reversed: "Tyranny, rigidity, coldness, lack of discipline",
    description: "The Emperor tarot card represents the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge."
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "major",
    keywords: ["Spiritual wisdom", "Religious beliefs", "Tradition", "Institution"],
    upright: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
    reversed: "Personal beliefs, freedom, challenging the status quo",
    description: "The Hierophant is a religious figure sitting between two pillars of a sacred temple. This card represents seeking counsel or advice from a mentor or spiritual guide."
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "major",
    keywords: ["Love", "Harmony", "Relationships", "Values alignment"],
    upright: "Love, harmony, relationships, values alignment, choices",
    reversed: "Self-love, disharmony, imbalance, misalignment of values",
    description: "The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners."
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "major",
    keywords: ["Control", "Will power", "Success", "Action"],
    upright: "Control, will power, success, action, determination",
    reversed: "Self-discipline, hard work, perseverance, control",
    description: "The Chariot tarot card represents a struggle between the spiritual and material worlds. The Chariot is about overcoming conflicts and moving forward in a positive direction."
  },
  {
    id: 8,
    name: "Strength",
    arcana: "major",
    keywords: ["Strength", "Courage", "Patience", "Control"],
    upright: "Strength, courage, patience, control, compassion",
    reversed: "Self-doubt, lack of confidence, lack of self-discipline",
    description: "The Strength card represents strength, determination, and power – like The Chariot. However, while The Chariot signifies outer strength and will, the Strength card speaks to the inner strength and the human spirit's ability to overcome any obstacle."
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "major",
    keywords: ["Soul searching", "Seeking inner guidance", "Looking inward"],
    upright: "Soul searching, seeking inner guidance, looking inward",
    reversed: "Isolation, loneliness, withdrawal",
    description: "The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "major",
    keywords: ["Good luck", "Karma", "Life cycles", "Destiny"],
    upright: "Good luck, karma, life cycles, destiny, a turning point",
    reversed: "Bad luck, lack of control, clinging to control, unwelcome changes",
    description: "The Wheel of Fortune reminds you that the wheel is always turning and life is in a constant state of change. If you're going through a difficult time, the wheel will turn and life will improve."
  },
  {
    id: 11,
    name: "Justice",
    arcana: "major",
    keywords: ["Justice", "Fairness", "Truth", "Cause and effect"],
    upright: "Justice, fairness, truth, cause and effect, law",
    reversed: "Unfairness, lack of accountability, dishonesty",
    description: "The Justice card represents justice, fairness, truth and the law. You are being called to account for your actions and will be judged accordingly."
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "major",
    keywords: ["Suspension", "Restriction", "Letting go", "Sacrifice"],
    upright: "Suspension, restriction, letting go, sacrifice",
    reversed: "Martyrdom, indecision, delay",
    description: "The Hanged Man reflects a need to suspend action, and as a result, a period of indecision may be indicated. Decisions or actions that need to be implemented will be postponed, even if, at the time, there is a sense of urgency to act."
  },
  {
    id: 13,
    name: "Death",
    arcana: "major",
    keywords: ["Endings", "Beginnings", "Change", "Transformation"],
    upright: "Endings, beginnings, change, transformation, transition",
    reversed: "Resistance to change, personal transformation, inner purging",
    description: "The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open."
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "major",
    keywords: ["Balance", "Moderation", "Patience", "Purpose"],
    upright: "Balance, moderation, patience, purpose, meaning",
    reversed: "Imbalance, excess, lack of long-term vision",
    description: "The Temperance card suggests moderation, balance, and frugality, reminding us that nothing is permanent and that we should live accordingly."
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "major",
    keywords: ["Shadow self", "Attachment", "Addiction", "Restriction"],
    upright: "Shadow self, attachment, addiction, restriction, sexuality",
    reversed: "Releasing limiting beliefs, exploring dark thoughts, detachment",
    description: "The Devil represents your shadow (or darker) side and the negative forces that constrain you and hold you back from being the best version of yourself."
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "major",
    keywords: ["Sudden change", "Upheaval", "Chaos", "Revelation"],
    upright: "Sudden change, upheaval, chaos, revelation, awakening",
    reversed: "Personal transformation, fear of change, averting disaster",
    description: "The Tower represents change in the most radical and momentous sense. It is for this reason that the card itself visually looks so unnerving."
  },
  {
    id: 17,
    name: "The Star",
    arcana: "major",
    keywords: ["Hope", "Faith", "Purpose", "Renewal"],
    upright: "Hope, faith, purpose, renewal, spirituality",
    reversed: "Lack of faith, despair, self-trust, disconnection",
    description: "When the Star card appears, you are likely to find yourself feeling inspired. It brings renewed hope and faith and a sense that you are truly blessed by the universe at this time."
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "major",
    keywords: ["Illusion", "Fear", "Anxiety", "Subconscious"],
    upright: "Illusion, fear, anxiety, subconscious, intuition",
    reversed: "Release of fear, repressed emotion, inner confusion",
    description: "The Moon is a card of illusion and deception, and therefore often suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself."
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "major",
    keywords: ["Positivity", "Fun", "Warmth", "Success"],
    upright: "Positivity, fun, warmth, success, vitality",
    reversed: "Inner child, feeling down, overly optimistic",
    description: "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy."
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "major",
    keywords: ["Judgement", "Rebirth", "Inner calling", "Absolution"],
    upright: "Judgement, rebirth, inner calling, absolution",
    reversed: "Self-doubt, inner critic, ignoring the call",
    description: "The Judgement card suggests that you are reaching an important stage in your journey, where you must make a vital decision or undergo a major life transition."
  },
  {
    id: 21,
    name: "The World",
    arcana: "major",
    keywords: ["Completion", "Integration", "Accomplishment", "Travel"],
    upright: "Completion, integration, accomplishment, travel",
    reversed: "Seeking personal closure, short-cut to success, lack of achievement",
    description: "The World represents an ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth."
  }
]

export const minorArcana: TarotCard[] = [
  // Cups (Water element - emotions, relationships, spirituality)
  {
    id: 22,
    name: "Ace of Cups",
    suit: "Cups",
    arcana: "minor",
    element: "Water",
    keywords: ["New relationships", "Compassion", "Creativity"],
    upright: "Love, new relationships, compassion, creativity",
    reversed: "Self-love, intuition, repressed emotions",
    description: "The Ace of Cups represents new beginnings in the realm of emotions, relationships, and spiritual connections."
  },
  // Add more minor arcana cards...
  {
    id: 23,
    name: "Two of Cups",
    suit: "Cups",
    arcana: "minor",
    element: "Water",
    keywords: ["Unified love", "Partnership", "Mutual attraction"],
    upright: "Unified love, partnership, mutual attraction, relationships",
    reversed: "Self-love, break-ups, disharmony, distrust",
    description: "The Two of Cups shows power that is created when two come together. This is the card that lovers want to see, and, in fact, the Two of Cups is the minor arcana equivalent of the Lovers card."
  }
  // Note: In a real implementation, you'd want all 78 cards
]

export const allTarotCards = [...majorArcana, ...minorArcana]

export function getRandomCard(): TarotCard {
  const randomIndex = Math.floor(Math.random() * allTarotCards.length)
  return allTarotCards[randomIndex]
}

export function getRandomCards(count: number): TarotCard[] {
  const shuffled = [...allTarotCards].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}