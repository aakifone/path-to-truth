import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import { Target, Heart, Scale, Sunrise } from "lucide-react";

const PurposeOfLife = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Reflection
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            The Purpose of Life
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Islam's profound answer to humanity's most fundamental question
          </p>
        </div>
      </section>

      {/* The Big Question */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Why Do We Exist?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            This question has occupied human thought since the beginning of time. 
            Every civilization, every philosophy, every person has grappled with it. 
            Islam provides a clear, coherent, and deeply meaningful answer.
          </p>
        </div>
      </ContentSection>

      {/* Key Verse */}
      <ContentSection background="muted">
        <QuranVerse
          variant="featured"
          arabic="وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ"
          translation="I did not create the jinn and mankind except to worship Me."
          reference="Qur'an 51:56"
        />
      </ContentSection>

      {/* Understanding Worship */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Understanding"
            title="What is Worship?"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              In Islam, <strong className="text-foreground">worship (Ibadah)</strong> is far more 
              than just rituals like prayer and fasting. It encompasses every action done with the 
              intention of pleasing God—from the way we treat our families to how we conduct business.
            </p>
            <p>
              True worship is the alignment of one's heart, mind, and actions with God's will. It 
              transforms ordinary acts into sacred ones. Eating, sleeping, working, and even smiling 
              at another person can all be acts of worship when done with the right intention.
            </p>
            <p>
              This understanding elevates the whole of life into something meaningful. Nothing is 
              mundane when done for God's sake. Every moment becomes an opportunity to draw closer 
              to the Divine.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Four Dimensions */}
      <ContentSection background="pattern">
        <SectionHeader
          eyebrow="Dimensions"
          title="The Comprehensive Purpose"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              To Know God
            </h3>
            <p className="mt-3 text-muted-foreground">
              Our purpose includes knowing our Creator through His names, attributes, 
              and signs in creation. This knowledge brings love, awe, and a deep connection 
              with the Divine.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              To Love God
            </h3>
            <p className="mt-3 text-muted-foreground">
              Islam calls for loving God above all else. This love is expressed through 
              obedience, gratitude, and longing to meet Him. It's a relationship that 
              fulfills the heart's deepest need.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              To Be Tested
            </h3>
            <p className="mt-3 text-muted-foreground">
              Life is a test—through ease and hardship—to see who will choose faith, 
              righteousness, and patience. This test gives our choices meaning and 
              leads to eternal consequences.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Sunrise className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              To Prepare for the Hereafter
            </h3>
            <p className="mt-3 text-muted-foreground">
              This life is temporary—a preparation for eternal existence. Our purpose 
              is to earn Paradise through faith and good deeds, seeking God's pleasure 
              and avoiding His displeasure.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Free Will */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Choice"
            title="Free Will and Accountability"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              A crucial aspect of our purpose is that we have been given <strong className="text-foreground">
              free will</strong>. Unlike angels who obey God by nature, humans choose their path. 
              This choice is what makes our worship meaningful.
            </p>
            <p>
              With free will comes responsibility. We will be held accountable for our choices—
              our beliefs, our actions, and how we treated others. This accountability gives 
              weight to every decision we make.
            </p>
          </div>
          <QuranVerse
            className="mt-8"
            translation="Indeed, We offered the Trust to the heavens and the earth and the mountains, and they declined to bear it and feared it; but man bore it. Indeed, he was unjust and ignorant."
            reference="Qur'an 33:72"
          />
        </div>
      </ContentSection>

      {/* Existential Answers */}
      <ContentSection background="muted">
        <SectionHeader
          eyebrow="Answers"
          title="Islam's Response to Existential Questions"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              "Who am I?"
            </h4>
            <p className="mt-2 text-muted-foreground">
              You are a creation of God, honored with a soul, intellect, and purpose. 
              You are a trustee on earth, a servant of the Most High, and a traveler 
              to eternity.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              "Where did I come from?"
            </h4>
            <p className="mt-2 text-muted-foreground">
              You were created by God from clay, given a soul from His command, and 
              placed on earth as a test and an opportunity to earn eternal bliss.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              "Where am I going?"
            </h4>
            <p className="mt-2 text-muted-foreground">
              After this brief life, you will return to God for judgment. Based on 
              your faith and deeds, you will enter eternal Paradise or face the 
              consequences of rejecting divine guidance.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="font-serif text-lg font-semibold text-foreground">
              "What is the meaning of suffering?"
            </h4>
            <p className="mt-2 text-muted-foreground">
              Suffering is a test, a purification, and sometimes a wake-up call. 
              It builds character, reminds us of our dependence on God, and can 
              elevate our rank in the Hereafter if met with patience.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Closing */}
      <ContentSection>
        <QuranVerse
          variant="featured"
          arabic="يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ"
          translation="O mankind, indeed you are laboring toward your Lord with great exertion and will meet Him."
          reference="Qur'an 84:6"
        />
      </ContentSection>
    </Layout>
  );
};

export default PurposeOfLife;
