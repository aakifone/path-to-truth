import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import { Scale, Heart, Users, HandHeart, Home, Moon } from "lucide-react";

const beauties = [
  {
    icon: Scale,
    title: "Justice",
    description:
      "Islam commands absolute justice—even against oneself or loved ones. The Prophet said: 'If my daughter Fatimah stole, I would cut off her hand.' Justice in Islam is not swayed by wealth, status, or relationship. Every person stands equal before the law, and oppression is one of the gravest sins.",
    verse: {
      translation:
        "O you who believe, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives.",
      reference: "Qur'an 4:135",
    },
  },
  {
    icon: Heart,
    title: "Mercy",
    description:
      "God describes Himself as 'the Most Merciful, the Especially Merciful.' This mercy extends to all creation. The Prophet said: 'The merciful are shown mercy by the All-Merciful. Show mercy to those on earth, and the One above the heavens will show mercy to you.' Islam encourages mercy in judgment, in dealings, and in everyday interactions.",
    verse: {
      translation:
        "My Mercy encompasses all things.",
      reference: "Qur'an 7:156",
    },
  },
  {
    icon: HandHeart,
    title: "Charity",
    description:
      "Giving is not optional in Islam—it's a pillar of faith. Zakat (obligatory charity) purifies wealth and souls. Beyond zakat, voluntary charity (sadaqah) is continuously encouraged. Even a smile is considered charity. The wealthy are trustees, not owners, of their wealth, responsible for sharing with those in need.",
    verse: {
      translation:
        "Those who spend their wealth in the way of Allah and then do not follow up what they have spent with reminders or injury, they will have their reward with their Lord.",
      reference: "Qur'an 2:262",
    },
  },
  {
    icon: Home,
    title: "Family Values",
    description:
      "The family is the foundation of society in Islam. Marriage is a sacred bond described as a source of 'tranquility, love, and mercy.' Parents are honored tremendously—serving them is one of the greatest acts of worship. Children's rights are protected, and extended family ties are maintained. A strong family creates a strong society.",
    verse: {
      translation:
        "And among His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy.",
      reference: "Qur'an 30:21",
    },
  },
  {
    icon: Users,
    title: "Brotherhood and Equality",
    description:
      "Islam abolished the distinctions of race, class, and nationality. In his farewell sermon, the Prophet declared: 'No Arab has superiority over a non-Arab, and no white has superiority over black—except by piety.' In the mosque, the king and the peasant stand side by side in prayer, all equal before God.",
    verse: {
      translation:
        "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous.",
      reference: "Qur'an 49:13",
    },
  },
  {
    icon: Moon,
    title: "Inner Peace",
    description:
      "True peace comes from connection with the Divine. Through prayer, remembrance, and submission to God's will, the heart finds tranquility. Islam provides a framework for dealing with life's challenges—patience in hardship, gratitude in ease, and trust in God's wisdom. This produces a deep, lasting inner peace that external circumstances cannot disturb.",
    verse: {
      translation:
        "Verily, in the remembrance of Allah do hearts find rest.",
      reference: "Qur'an 13:28",
    },
  },
];

const BeautyOfIslam = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Inspiration
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            The Beauty of Islam
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Discovering the spiritual and moral treasures of the Islamic tradition
          </p>
        </div>
      </section>

      {/* Introduction */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond rules and rituals, Islam offers a vision of human flourishing—
            a path that nurtures the soul, elevates character, and builds just 
            societies. Here we explore some of the beautiful principles that 
            define Islamic spirituality and ethics.
          </p>
        </div>
      </ContentSection>

      {/* Beauties */}
      {beauties.map((beauty, index) => (
        <ContentSection
          key={beauty.title}
          background={index % 2 === 0 ? "muted" : "default"}
        >
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <beauty.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {beauty.title}
                </h2>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {beauty.description}
            </p>
            <QuranVerse
              className="mt-8"
              variant="simple"
              translation={beauty.verse.translation}
              reference={beauty.verse.reference}
            />
          </div>
        </ContentSection>
      ))}

      {/* Personal Discipline */}
      <ContentSection background="pattern">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Character"
            title="Personal Discipline"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Islam shapes character through daily practices. The five prayers create 
              rhythm and mindfulness. Fasting develops self-control. Dietary laws teach 
              moderation. Truthfulness is obligatory, gossip is forbidden, and controlling 
              anger is a mark of strength.
            </p>
            <p>
              The Prophet Muhammad (peace be upon him) said: <strong className="text-foreground">
              "The strong person is not the one who can wrestle someone else down. The strong 
              person is the one who can control himself when he is angry."</strong>
            </p>
            <p>
              This disciplined approach to life produces individuals who are reliable, 
              principled, and beneficial to those around them.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Closing */}
      <ContentSection>
        <QuranVerse
          variant="featured"
          arabic="قَدْ أَفْلَحَ الْمُؤْمِنُونَ ۝ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ"
          translation="Certainly will the believers have succeeded: Those who are during their prayer humbly submissive."
          reference="Qur'an 23:1-2"
        />
      </ContentSection>
    </Layout>
  );
};

export default BeautyOfIslam;
