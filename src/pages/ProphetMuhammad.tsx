import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import { Heart, Shield, Users, BookOpen } from "lucide-react";

const ProphetMuhammad = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            The Final Messenger
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Prophet Muhammad ﷺ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Peace and blessings be upon him — The Messenger of Mercy
          </p>
        </div>
      </section>

      {/* Introduction */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Prophet Muhammad (peace be upon him) is the final messenger sent by God to 
            humanity. His life is a model of virtue, his teachings a source of guidance, 
            and his character an embodiment of the Qur'an itself. Understanding his life 
            is essential to understanding Islam.
          </p>
        </div>
      </ContentSection>

      {/* Key Verse */}
      <ContentSection background="muted">
        <QuranVerse
          variant="featured"
          arabic="وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ"
          translation="We have not sent you, [O Muhammad], except as a mercy to the worlds."
          reference="Qur'an 21:107"
        />
      </ContentSection>

      {/* Early Life */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Biography"
            title="Early Life"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Muhammad was born in Mecca around 570 CE into the noble tribe of Quraysh. 
              His father Abdullah died before his birth, and his mother Aminah passed 
              away when he was six. He was raised first by his grandfather Abdul-Muttalib, 
              then by his uncle Abu Talib.
            </p>
            <p>
              From a young age, he was known for his exceptional character. The Meccans 
              called him <strong className="text-foreground">"Al-Amin"</strong> (The 
              Trustworthy) and <strong className="text-foreground">"Al-Sadiq"</strong> 
              (The Truthful). He never worshipped idols, never drank alcohol, and was 
              known for his honesty in business dealings.
            </p>
            <p>
              At the age of 25, he married Khadijah, a noble businesswoman 15 years 
              his senior. Their marriage was one of deep love, mutual respect, and 
              spiritual partnership. She would become his greatest supporter.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Character Traits */}
      <ContentSection background="pattern">
        <SectionHeader
          eyebrow="Noble Character"
          title="His Exemplary Qualities"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Mercy and Compassion
            </h3>
            <p className="mt-3 text-muted-foreground">
              His mercy extended to all—children, the elderly, animals, and even enemies. 
              When the city of Taif stoned him until he bled, he prayed for their guidance 
              rather than their destruction.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Honesty and Integrity
            </h3>
            <p className="mt-3 text-muted-foreground">
              Even before prophethood, he was known as the most trustworthy man in Mecca. 
              His enemies entrusted him with their valuables. He never broke a promise 
              or violated a trust.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Humility and Service
            </h3>
            <p className="mt-3 text-muted-foreground">
              Despite being the leader of a growing community, he lived simply. He mended 
              his own clothes, helped with household chores, and sat with the poor. He 
              said, "The leader of a people is their servant."
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Wisdom and Justice
            </h3>
            <p className="mt-3 text-muted-foreground">
              He was just in all dealings, even with adversaries. He established the 
              Constitution of Medina, guaranteeing rights for all inhabitants. He taught 
              that justice must be applied even against oneself.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* His Mission */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Prophethood"
            title="His Mission"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              At the age of 40, while meditating in the Cave of Hira, Muhammad received 
              the first revelation from God through the Angel Gabriel. The first word 
              revealed was <strong className="text-foreground">"Iqra"</strong>—Read.
            </p>
            <p>
              His mission was simple yet revolutionary: to call people to worship the 
              One True God alone, to establish justice, to uplift the oppressed, and 
              to perfect moral character. He came not to create a new religion, but 
              to restore the original message of all prophets.
            </p>
            <p>
              For 23 years, he received revelation, built a community of believers, 
              and transformed Arabia from a land of tribal warfare and idol worship 
              into a society based on monotheism, justice, and brotherhood.
            </p>
          </div>
          <QuranVerse
            className="mt-8"
            translation="Indeed in the Messenger of Allah you have an excellent example for anyone whose hope is in Allah and the Last Day and who remembers Allah often."
            reference="Qur'an 33:21"
          />
        </div>
      </ContentSection>

      {/* His Message */}
      <ContentSection background="muted">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Core Teachings"
            title="His Message"
          />
          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Monotheism (Tawhid)
              </h4>
              <p className="mt-2 text-muted-foreground">
                The absolute oneness of God—no partners, no intermediaries, no equals. 
                Direct relationship between the Creator and creation.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Moral Excellence
              </h4>
              <p className="mt-2 text-muted-foreground">
                "I was sent to perfect noble character." He emphasized honesty, kindness, 
                patience, gratitude, and treating others with respect.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Social Justice
              </h4>
              <p className="mt-2 text-muted-foreground">
                Equality of all races and classes, rights of women, care for orphans 
                and the poor, fair economic practices, and the dignity of every human.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Mercy and Forgiveness
              </h4>
              <p className="mt-2 text-muted-foreground">
                He taught that God's mercy encompasses all things and encouraged believers 
                to be merciful to creation. On conquering Mecca, he forgave all who had 
                persecuted him.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* His Leadership */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Legacy"
            title="His Mercy and Leadership"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The Prophet's conquest of Mecca stands as one of history's greatest examples 
              of mercy in victory. After years of persecution, exile, and warfare, he 
              entered Mecca not as a vengeful conqueror but as a humble servant of God.
            </p>
            <p>
              He asked the Meccans—who had tortured his companions, killed his family 
              members, and driven him from his home—"What do you expect from me today?"
            </p>
            <p>
              They replied: "Good, for you are a noble brother, son of a noble brother."
            </p>
            <p>
              He declared: <strong className="text-foreground">"Go, for you are free."</strong>
            </p>
            <p>
              This act of forgiveness transformed enemies into devoted followers and 
              exemplified his teaching that mercy triumphs over vengeance.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Closing */}
      <ContentSection background="primary" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            A Mercy to All Worlds
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Prophet Muhammad (peace be upon him) left behind the Qur'an and his example 
            as guides for humanity until the end of time. His life remains a source of 
            guidance, inspiration, and proof of the beauty of Islam's message.
          </p>
        </div>
      </ContentSection>
    </Layout>
  );
};

export default ProphetMuhammad;
