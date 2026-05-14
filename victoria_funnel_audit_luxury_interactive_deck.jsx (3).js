import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function VictoriaAuditDeck() {
  const sections = [
    {
      title: "Hey Victoria — I didn’t skim this.",
      subtitle: "I went through your ecosystem properly.",
      content:
        "I looked at your content, your positioning, your lead magnet, and how people currently move from your videos into your offer system.\n\nI’m going to be direct, but in a good way.\n\nYou’ve already done the hard part — you’ve built attention, trust, and emotional resonance in a very competitive niche (hormones, skin, inflammation, fatigue, thyroid confusion).\n\nMost creators never even get that far. You have."
    },
    {
      title: "What’s actually happening in her audience",
      subtitle: "This is the psychology you’re working with",
      content:
        "Your audience is not ‘learning wellness’.\n\nThey are trying to solve a looping internal question:\n\n‘Why does my body feel broken when I’m doing everything right?’\n\nThat one sentence is the entire funnel.\n\nEverything else (skin, hormones, digestion, energy, weight) are just symptoms they use to describe that confusion.\n\nWhen you understand that, everything in your funnel changes."
    },
    {
      title: "The real breakdown I noticed",
      subtitle: "Where attention is being lost",
      content:
        "Your content creates a strong emotional spike. People feel seen immediately.\n\nBut the moment they hit your next step (lead magnet), that emotional intensity drops slightly.\n\nAnd in your niche, that drop is expensive.\n\nBecause these users don’t make rational decisions — they make emotional continuation decisions.\n\nIf the next step doesn’t feel like ‘this explains everything’, they leave — even if they liked you."
    },
    {
      title: "Let me simplify this brutally",
      subtitle: "What the user journey looks like right now",
      content:
        "1. They see your video → ‘this is me’\n2. Emotional recognition spikes\n3. They click your link\n4. Expectation is high\n5. The guide feels slightly too broad\n6. Emotional momentum breaks\n\nNot because your offer is bad.\nBecause the emotional bridge didn’t carry them across the gap."
    },
    {
      title: "Here’s the core issue",
      subtitle: "Your lead magnet is not ‘wrong’ — it’s not sharp enough",
      content:
        "Right now it sits in the category of ‘general wellness guide’.\n\nBut your audience does NOT convert on general. They convert on SPECIFICITY.\n\nThey want:\n- hidden cause explanations\n- root system breakdowns\n- ‘why everything you tried failed’ clarity\n- a framework that connects their symptoms together\n\nSpecificity creates perceived value.\nPerceived value creates action."
    },
    {
      title: "What your lead magnet SHOULD feel like",
      subtitle: "This is the shift that changes everything",
      content:
        "Instead of feeling like a guide…\n\nIt should feel like a REVEAL.\n\nSomething like:\n\n‘The hidden root-cause system behind hormonal imbalance, skin issues, fatigue, and inflammation — and why most advice misses the real driver.’\n\nThat is not information.\nThat is closure."
    },
    {
      title: "Visual funnel (what’s missing)",
      subtitle: "This is how your system should flow",
      content:
        "CONTENT → EMOTIONAL RELIEF\n↓\nLEAD MAGNET → ‘OH THIS EXPLAINS IT’ MOMENT\n↓\nEMAIL → TRUST + BELIEF DEEPENING\n↓\nOFFER → NATURAL NEXT STEP\n\nRight now, the missing piece is the ‘OH moment’ in the middle.\n\nWithout that, everything after underperforms."
    },
    {
      title: "What I would fix first (very specific)",
      subtitle: "No theory — actual execution",
      content:
        "If I touched your system, I would start here:\n\n1. Rename the lead magnet into a ‘root cause system’\n2. Make the promise more emotionally precise\n3. Add a narrative: ‘you are not broken, your body is responding to X pattern’\n4. Make content → lead magnet feel like continuation, not switch\n5. Add one strong ‘missing explanation’ mechanism inside the guide\n\nThis alone would lift conversion without more traffic."
    },
    {
      title: "Lead magnet concept mock (how it should feel)",
      subtitle: "Visually and emotionally",
      content:
        "Imagine the guide feels like this:\n\n━━━━━━━━━━━━━━━\nTHE ROOT SYSTEM MAP\n━━━━━━━━━━━━━━━\n\n‘Why your hormones, skin, energy, and digestion are all connected — and the one underlying system driving it’\n\nSection 1: Why symptoms appear together\nSection 2: The hidden trigger most people miss\nSection 3: Why diet/lifestyle alone doesn’t fix it\nSection 4: The real reset sequence\n\nThis feels like understanding, not content."
    },
    {
      title: "What’s happening financially",
      subtitle: "This is not a traffic issue",
      content:
        "You already have attention.\n\nThe leak is capture efficiency.\n\nEven a small improvement in opt-in conversion (2–5%) compounds heavily in your niche because trust is already established at the content stage.\n\nMore captured leads = more warmed buyers = more predictable revenue without increasing output."
    },
    {
      title: "What I would do if this was mine",
      subtitle: "Simple, clean system upgrade",
      content:
        "1. Rebuild lead magnet positioning around ‘root cause revelation’\n2. Tighten headline specificity (symptoms → system)\n3. Add emotional continuity from content → opt-in\n4. Strengthen ‘this explains ME’ feeling\n5. Make guide feel like missing truth, not education\n\nThis is refinement, not rebuilding."
    },
    {
      title: "Final summary (tangible actions she can do today)",
      subtitle: "No fluff — just execution",
      content:
        "Here’s what you can do immediately:\n\n1. Rename your lead magnet into a ‘system’ (not a guide)\n2. Make the promise more specific (symptoms → root cause)\n3. Add a clear emotional hook: ‘this explains why nothing worked before’\n4. Tighten your bio/link so there is ONLY one clear next step\n5. Align your content hooks directly with the lead magnet promise\n\nThese alone can lift conversions without more traffic."
    },
    {
      title: "Where I come in",
      subtitle: "Why I’m reaching out",
      content:
        "I can help you rebuild this entire conversion path so your content, lead magnet, and offer actually move people in a clean psychological sequence.\n\nNot by adding more — but by making what you already have work harder.\n\nIf you want, just reply to my Instagram DM and we can go through it properly together."
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0b0b0f] via-[#111] to-[#0b0b0f] text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">

        {/* Progress */}
        <div className="mb-6 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-500"
            style={{ width: `${((active + 1) / sections.length) * 100}%` }}
          />
        </div>

        {/* Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black rounded-[30px] p-10 md:p-14 shadow-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              {sections[active].title}
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
              {sections[active].subtitle}
            </p>

            <p className="whitespace-pre-line text-lg leading-8 text-gray-800">
              {sections[active].content}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setActive((p) => Math.max(0, p - 1))}
            className="px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
          >
            Back
          </button>

          <button
            onClick={() => setActive((p) => Math.min(sections.length - 1, p + 1))}
            className="px-5 py-2 rounded-xl bg-white text-black hover:opacity-80 transition"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}
