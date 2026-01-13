import { Layout } from "@/components/layout/Layout";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import { Sparkles, Eye, Heart, Sun } from "lucide-react";

const Reflection = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Invitation
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            A Call to Reflection
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            A gentle invitation to pause, reflect, and consider
          </p>
        </div>
      </section>

      {/* Opening Reflection */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Have You Ever Wondered?
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              In the quiet moments—perhaps late at night, or early in the morning, 
              or during a long journey—have you ever felt a stirring in your heart? 
              A sense that there must be more to life than the daily routine?
            </p>
            <p>
              Have you looked at the stars and wondered about their Creator? Have 
              you held a newborn and marveled at the miracle of life? Have you 
              experienced moments of profound beauty that seemed to point beyond 
              themselves to something greater?
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Signs in Creation */}
      <ContentSection background="muted">
        <QuranVerse
          variant="featured"
          arabic="سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ"
          translation="We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth."
          reference="Qur'an 41:53"
        />
      </ContentSection>

      {/* Signs */}
      <ContentSection>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Signs All Around
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  In Nature
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The precise orbits of planets, the intricate design of a single 
                  cell, the vastness of oceans, the delicate wings of a butterfly—
                  all point to intelligent design and purposeful creation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Within Yourself
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Your conscience that distinguishes right from wrong, your capacity 
                  for love and compassion, your longing for justice, your sense that 
                  life should have meaning—these are echoes of something higher.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  In Human Experience
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The universal human search for meaning, the shared moral intuitions 
                  across cultures, the persistence of faith throughout history—these 
                  suggest a reality beyond the material.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  In Moments of Clarity
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Those unexpected moments when the veil seems to lift—when you feel 
                  connected to something infinite, when gratitude wells up unbidden, 
                  when you know with certainty that you are not alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* The Invitation */}
      <ContentSection background="pattern">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            A Personal Journey
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              We do not ask you to accept Islam blindly. We do not pressure or 
              persuade through argument alone. Faith is a matter of the heart, 
              and the heart cannot be forced.
            </p>
            <p>
              What we offer is an invitation—to learn, to reflect, to question 
              sincerely, and to be open to where truth leads. The Qur'an repeatedly 
              appeals to reason: "Do they not reflect?" "Will you not use your 
              intellect?" "Do they not ponder?"
            </p>
            <p>
              Your journey to truth is personal and unique. It may be quick or 
              gradual. It may come through study or through an experience of the 
              heart. What matters is sincerity—that you genuinely seek truth, 
              wherever it may lead.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Seeking Guidance */}
      <ContentSection>
        <QuranVerse
          variant="featured"
          arabic="وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا"
          translation="And those who strive for Us—We will surely guide them to Our ways."
          reference="Qur'an 29:69"
        />
      </ContentSection>

      {/* No Pressure */}
      <ContentSection background="muted">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            With Respect and Sincerity
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Islam teaches that there is no compulsion in religion. We respect 
              your autonomy and your right to your own conclusions. Our role is 
              only to convey—clearly, honestly, and with good character.
            </p>
            <p>
              If you've read this far, perhaps something has resonated with you. 
              Perhaps questions have arisen that you'd like to explore. We encourage 
              you to continue learning—read the Qur'an, study the life of the Prophet 
              Muhammad (peace be upon him), speak with Muslims in your community.
            </p>
            <p>
              And above all, we encourage you to turn to the One who created you. 
              Ask Him sincerely for guidance. If He is real—and we believe with 
              certainty that He is—He will respond to the sincere seeker.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Final Message */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            A Final Word
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Thank you for taking the time to explore this message. Whatever your 
              background, whatever your current beliefs, you are valued. Your search 
              for meaning matters. Your questions are valid.
            </p>
            <p>
              We pray that you find what you're looking for—peace of heart, clarity 
              of purpose, and connection with your Creator. The door is always open, 
              and the invitation is always extended.
            </p>
            <p className="font-serif text-xl italic text-foreground">
              "Verily, in the remembrance of Allah do hearts find rest."
            </p>
            <p className="text-secondary">— Qur'an 13:28</p>
          </div>
        </div>
      </ContentSection>

      {/* Closing Banner */}
      <section className="bg-primary py-16 text-center">
        <div className="container">
          <p className="font-serif text-xl text-primary-foreground md:text-2xl">
            May you be guided to all that is true, beautiful, and good.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Reflection;
