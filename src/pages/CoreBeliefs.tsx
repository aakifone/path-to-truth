import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";

const beliefs = [
  {
    number: 1,
    title: "Belief in One God (Allah)",
    arabic: "الإيمان بالله",
    description:
      "The foundation of Islam is the belief in One God—Allah—the Creator, Sustainer, and Sovereign of the universe. He is unique, without partners, and nothing is comparable to Him. This belief, known as Tawhid, shapes every aspect of a Muslim's life.",
    verse: {
      translation:
        "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.",
      reference: "Qur'an 59:22",
    },
    practical:
      "In daily life, this belief means turning to God alone in prayer, trusting His wisdom in all circumstances, and worshipping Him sincerely without associating partners with Him.",
  },
  {
    number: 2,
    title: "Belief in the Angels",
    arabic: "الإيمان بالملائكة",
    description:
      "Angels are created beings made of light, completely obedient to God. They have no free will in matters of obedience and carry out various tasks assigned by God, including delivering revelation, recording deeds, and managing aspects of creation.",
    verse: {
      translation:
        "Praise be to Allah, Creator of the heavens and the earth, who made the angels messengers having wings, two or three or four.",
      reference: "Qur'an 35:1",
    },
    practical:
      "Belief in angels reminds us that our deeds are being recorded and that we are never truly alone. It encourages mindfulness and accountability in all our actions.",
  },
  {
    number: 3,
    title: "Belief in the Revealed Books",
    arabic: "الإيمان بالكتب",
    description:
      "Muslims believe God sent divine scriptures to guide humanity. These include the Scrolls of Abraham, the Torah given to Moses, the Psalms given to David, the Gospel given to Jesus, and finally the Qur'an given to Muhammad. The Qur'an is preserved unchanged as the final revelation.",
    verse: {
      translation:
        "Indeed, We have sent you with the truth as a bringer of good tidings and a warner. And there was no nation but that there had passed within it a warner.",
      reference: "Qur'an 35:24",
    },
    practical:
      "This belief teaches respect for previous scriptures and prophets while recognizing the Qur'an as the preserved, final guidance for humanity.",
  },
  {
    number: 4,
    title: "Belief in the Prophets",
    arabic: "الإيمان بالرسل",
    description:
      "Muslims believe in all the prophets sent by God, from Adam to Muhammad. Each prophet called their people to worship God alone. Major prophets include Noah, Abraham, Moses, Jesus, and Muhammad (peace be upon them all).",
    verse: {
      translation:
        "Say: We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord.",
      reference: "Qur'an 2:136",
    },
    practical:
      "Muslims honor all prophets and learn from their examples of patience, faith, and steadfastness in delivering God's message.",
  },
  {
    number: 5,
    title: "Belief in the Day of Judgment",
    arabic: "الإيمان باليوم الآخر",
    description:
      "There will come a Day when all of creation will be resurrected and held accountable for their deeds. The righteous will be rewarded with Paradise, while those who rejected God and committed evil will face punishment. Every soul will receive perfect justice.",
    verse: {
      translation:
        "So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.",
      reference: "Qur'an 99:7-8",
    },
    practical:
      "This belief motivates ethical behavior, encourages good deeds, and provides comfort that ultimate justice will prevail—even for wrongs that go unpunished in this world.",
  },
  {
    number: 6,
    title: "Belief in Divine Decree (Qadr)",
    arabic: "الإيمان بالقدر",
    description:
      "Muslims believe that God has knowledge of all things and has decreed all that will happen. However, this does not negate human free will—we make real choices and are responsible for them. God's decree encompasses His infinite wisdom and mercy.",
    verse: {
      translation:
        "No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being. Indeed that, for Allah, is easy.",
      reference: "Qur'an 57:22",
    },
    practical:
      "This belief brings peace during hardships, knowing everything is part of God's wise plan. It encourages effort while trusting the outcome to God, reducing anxiety and despair.",
  },
];

const CoreBeliefs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Foundation
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            The Six Articles of Faith
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            The foundational beliefs that form the core of Islamic faith
          </p>
        </div>
      </section>

      {/* Introduction */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Islamic belief is built upon six fundamental articles of faith known as{" "}
            <strong className="text-foreground">Iman</strong>. These beliefs form the 
            spiritual foundation upon which a Muslim's relationship with God and 
            understanding of existence is built.
          </p>
        </div>
      </ContentSection>

      {/* Beliefs */}
      {beliefs.map((belief, index) => (
        <ContentSection
          key={belief.number}
          background={index % 2 === 0 ? "default" : "muted"}
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {belief.number}
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {belief.title}
                </h2>
                <p className="text-lg text-secondary">{belief.arabic}</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {belief.description}
            </p>

            <div className="mt-8">
              <QuranVerse
                translation={belief.verse.translation}
                reference={belief.verse.reference}
              />
            </div>

            <div className="mt-8 rounded-lg border-l-4 border-secondary bg-gold-light/30 p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Practical Significance
              </h4>
              <p className="mt-2 text-muted-foreground">{belief.practical}</p>
            </div>
          </div>
        </ContentSection>
      ))}

      {/* Closing */}
      <ContentSection background="primary" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            A Complete Worldview
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Together, these six beliefs provide a comprehensive understanding of 
            existence, purpose, and destiny. They answer life's fundamental questions 
            and provide a framework for living with meaning, hope, and accountability.
          </p>
        </div>
      </ContentSection>
    </Layout>
  );
};

export default CoreBeliefs;
