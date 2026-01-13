import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const misconceptions = [
  {
    id: "violence",
    misconception: "Islam promotes violence and terrorism",
    clarification: `This is perhaps the most damaging misconception about Islam. The very word "Islam" comes from the root meaning "peace" and "submission to God." The Qur'an clearly states: "Whoever kills a soul unless for a soul or for corruption [done] in the land – it is as if he had slain mankind entirely. And whoever saves one – it is as if he had saved mankind entirely" (5:32).

Terrorism and the killing of innocent people are explicitly forbidden in Islam. The Prophet Muhammad (peace be upon him) strictly prohibited the killing of civilians, women, children, the elderly, and even the destruction of trees during warfare. Islam has a 1,400-year tradition of jurisprudence that sets clear rules for warfare, emphasizing protection of non-combatants.

When extremists commit violence, they violate Islamic principles. Mainstream Muslim scholars worldwide have consistently condemned terrorism. Holding 1.8 billion Muslims responsible for the actions of a tiny fraction is neither fair nor accurate.`,
    verse: {
      translation: "And do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.",
      reference: "Qur'an 5:8",
    },
  },
  {
    id: "women",
    misconception: "Islam oppresses women",
    clarification: `This misconception often confuses cultural practices with Islamic teachings. Islam actually revolutionized women's rights in 7th century Arabia—a society where women had few rights and female infanticide was common.

Islam granted women the right to own property, inherit wealth, seek education, choose their spouse, work, and participate in public life—1,400 years before many Western countries granted such rights. The Prophet Muhammad (peace be upon him) said: "The best of you are those who are best to their wives."

The Qur'an addresses men and women equally in matters of faith and moral accountability. In Paradise, men and women receive equal rewards for their deeds. The concept of modesty applies to both genders, not just women.

While some Muslim-majority societies have cultural practices that restrict women, these often contradict Islamic principles. Islam should be judged by its authentic teachings, not by the failures of its followers to implement them.`,
    verse: {
      translation: "Whoever does righteousness, whether male or female, while being a believer – those will enter Paradise and will not be wronged, even as much as the speck on a date seed.",
      reference: "Qur'an 4:124",
    },
  },
  {
    id: "forced-conversion",
    misconception: "Islam was spread by the sword",
    clarification: `The Qur'an explicitly states: "There is no compulsion in religion" (2:256). Forced conversion contradicts this fundamental principle.

Historically, Islam spread primarily through trade, scholarship, and the character of Muslim merchants and travelers. Indonesia, the world's largest Muslim country, was never conquered by a Muslim army—Islam spread there through peaceful trade. The same is true for much of Southeast Asia, Sub-Saharan Africa, and other regions.

When Muslims did engage in conquest, the historical record shows that non-Muslim populations were generally allowed to keep their faith. Christian, Jewish, and other communities continued to exist and often flourished under Muslim rule. The continued presence of ancient Christian communities in the Middle East and Jews who sought refuge in Muslim lands from European persecution testifies to this reality.

Islam's rapid spread is better explained by its compelling message of monotheism, equality, and justice than by military force.`,
    verse: {
      translation: "There shall be no compulsion in religion. The right course has become clear from the wrong.",
      reference: "Qur'an 2:256",
    },
  },
  {
    id: "sharia",
    misconception: "Sharia is barbaric and incompatible with modern society",
    clarification: `The word "Sharia" literally means "the path to water" and refers to Islamic law and ethical guidance. Most of Sharia deals with personal worship, family law, dietary requirements, and ethical conduct—not harsh punishments.

The sensationalized punishments often associated with Sharia (like cutting off hands) have strict conditions that make them rarely applicable. For example, the punishment for theft requires: the stolen item to be of significant value, not taken out of necessity, from a secure location, by a sane adult. If a person steals food because they are hungry, there is no punishment.

Historical Islamic societies were often more tolerant and progressive than their contemporary counterparts. The Islamic Golden Age saw remarkable advances in science, medicine, mathematics, and philosophy. Baghdad's House of Wisdom preserved and advanced Greek, Persian, and Indian knowledge.

Sharia emphasizes justice, mercy, and the protection of life, intellect, family, wealth, and faith. Its ultimate goal is human welfare and the prevention of harm.`,
    verse: {
      translation: "Allah intends for you ease and does not intend for you hardship.",
      reference: "Qur'an 2:185",
    },
  },
  {
    id: "science",
    misconception: "Islam is anti-science",
    clarification: `The first word of the Qur'an revealed to Prophet Muhammad was "Iqra"—Read. Islam places immense emphasis on knowledge, learning, and understanding the natural world.

During the Islamic Golden Age (8th-14th centuries), Muslim scholars made groundbreaking contributions to mathematics (algebra, algorithms), astronomy, medicine, chemistry, optics, and many other fields. Their work preserved classical knowledge and laid foundations for the European Renaissance.

The Qur'an encourages reflection on natural phenomena as signs of God: "Do they not look at the camels, how they are created? And at the sky, how it is raised? And at the mountains, how they are erected? And at the earth, how it is spread out?" (88:17-20).

Islam sees no conflict between faith and science. The natural world is seen as a manifestation of God's wisdom, and studying it is a form of worship. Many Muslim scientists throughout history saw their work as understanding God's creation.`,
    verse: {
      translation: "Are those who know equal to those who do not know? Only people of understanding take heed.",
      reference: "Qur'an 39:9",
    },
  },
  {
    id: "allah",
    misconception: "Muslims worship a different God",
    clarification: `"Allah" is simply the Arabic word for "God." It is the same word used by Arabic-speaking Christians and Jews. The Qur'an explicitly states that Muslims worship the same God as the People of the Book (Jews and Christians):

"Say: We believe in Allah and what has been revealed to us and what has been revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [submitting] to Him." (2:136)

Islam affirms the prophetic traditions of Abraham, Moses, and Jesus. Muslims believe in the Torah given to Moses and the Gospel given to Jesus, though they believe these scriptures were altered over time. The Qur'an came as a final, preserved confirmation of the eternal message of monotheism.`,
    verse: {
      translation: "Say, O People of the Scripture, come to a word that is equitable between us and you – that we will not worship except Allah and not associate anything with Him.",
      reference: "Qur'an 3:64",
    },
  },
];

const Misconceptions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Clarification
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Common Misconceptions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Addressing misunderstandings about Islam with clarity and compassion
          </p>
        </div>
      </section>

      {/* Introduction */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            In an age of information overload, misconceptions about Islam are unfortunately 
            common. We address these not to argue, but to clarify with honesty and respect. 
            Our goal is mutual understanding and the removal of barriers to genuine dialogue.
          </p>
        </div>
      </ContentSection>

      {/* Misconceptions Accordion */}
      <ContentSection background="muted">
        <SectionHeader
          eyebrow="Clarifications"
          title="Understanding the Truth"
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {misconceptions.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="card-glow rounded-xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg font-semibold hover:no-underline md:text-xl">
                  {item.misconception}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4 text-muted-foreground">
                    {item.clarification.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-6">
                    <QuranVerse
                      variant="simple"
                      translation={item.verse.translation}
                      reference={item.verse.reference}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentSection>

      {/* Closing */}
      <ContentSection>
        <QuranVerse
          variant="featured"
          arabic="وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ۚ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ"
          translation="Good and evil are not equal. Repel evil with what is better; then the one who was hostile to you will become as a devoted friend."
          reference="Qur'an 41:34"
        />
      </ContentSection>
    </Layout>
  );
};

export default Misconceptions;
