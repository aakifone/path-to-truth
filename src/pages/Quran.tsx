import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import { BookOpen, Shield, Star, Sparkles } from "lucide-react";

const selectedVerses = [
  {
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    translation:
      "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence.",
    reference: "Qur'an 2:255 (Ayat al-Kursi - excerpt)",
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease.",
    reference: "Qur'an 94:6",
  },
  {
    arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
    translation: "And We are closer to him than his jugular vein.",
    reference: "Qur'an 50:16",
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    translation: "So remember Me; I will remember you.",
    reference: "Qur'an 2:152",
  },
];

const Quran = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Divine Revelation
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            The Noble Qur'an
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            The final revelation from the Creator to humanity
          </p>
        </div>
      </section>

      {/* What is the Qur'an */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Introduction"
            title="What is the Qur'an?"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The Qur'an is the central religious text of Islam, believed by Muslims to 
              be the literal word of God (Allah) as revealed to Prophet Muhammad (peace 
              be upon him) through the Angel Gabriel over a period of 23 years.
            </p>
            <p>
              The word <strong className="text-foreground">"Qur'an"</strong> comes from 
              the Arabic root meaning "to recite" or "to read." It is meant to be recited, 
              memorized, and lived. Its verses address matters of belief, worship, morality, 
              law, and guidance for all aspects of human life.
            </p>
            <p>
              For Muslims, the Qur'an is not just a book to be read—it is a living guide, 
              a source of healing for the heart, and a direct communication from the 
              Creator to His creation.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Key Features */}
      <ContentSection background="pattern">
        <SectionHeader
          eyebrow="Characteristics"
          title="What Makes the Qur'an Unique"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Perfect Preservation
            </h3>
            <p className="mt-3 text-muted-foreground">
              The Qur'an has been preserved letter-by-letter since its revelation. 
              Millions have memorized it entirely, creating a living chain of preservation. 
              Manuscripts from the earliest centuries match today's Qur'an exactly.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Linguistic Miracle
            </h3>
            <p className="mt-3 text-muted-foreground">
              The Qur'an's Arabic is unmatched in its eloquence, rhythm, and depth. 
              It challenged the master poets of Arabia to produce anything like it—none 
              could. Its style is neither poetry nor prose, but something entirely unique.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Comprehensive Guidance
            </h3>
            <p className="mt-3 text-muted-foreground">
              From theology to ethics, family law to economics, personal spirituality 
              to social justice—the Qur'an provides principles and guidance for every 
              dimension of human existence.
            </p>
          </div>
          <div className="card-glow rounded-xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Living Impact
            </h3>
            <p className="mt-3 text-muted-foreground">
              The Qur'an continues to transform lives. Its recitation brings peace to 
              hearts, its study illuminates minds, and its guidance shapes righteous 
              character. Millions find in it answers to life's deepest questions.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Preservation */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="History"
            title="How Was the Qur'an Preserved?"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The Qur'an was revealed over 23 years. Each time verses were revealed, 
              the Prophet Muhammad (peace be upon him) would have scribes write them 
              down immediately and would specify their exact placement within the text. 
              He also led the companions in memorizing the revelations.
            </p>
            <p>
              After the Prophet's death, the first Caliph Abu Bakr ordered the compilation 
              of these writings into a single manuscript. The third Caliph Uthman then 
              standardized copies to ensure uniformity across the expanding Muslim world.
            </p>
            <p>
              But more remarkable than the written preservation is the oral tradition. 
              To this day, millions of Muslims—called <strong className="text-foreground">
              Huffaz</strong>—have memorized the entire Qur'an word for word. This 
              unbroken chain of memorization ensures that the Qur'an remains exactly 
              as it was revealed.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Why Divine */}
      <ContentSection background="muted">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Evidence"
            title="Why Muslims Believe It Is Divine"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Muslims believe the Qur'an is from God for several reasons:
            </p>
            <ul className="space-y-4 pl-6">
              <li className="relative before:absolute before:-left-6 before:text-secondary before:content-['•']">
                <strong className="text-foreground">Its origin:</strong> Muhammad was 
                illiterate, yet the Qur'an displays profound wisdom, knowledge of history, 
                and literary excellence that could not have come from an unlettered man.
              </li>
              <li className="relative before:absolute before:-left-6 before:text-secondary before:content-['•']">
                <strong className="text-foreground">Its consistency:</strong> Despite 
                being revealed over 23 years in different circumstances, the Qur'an contains 
                no contradictions—a challenge it issues to skeptics.
              </li>
              <li className="relative before:absolute before:-left-6 before:text-secondary before:content-['•']">
                <strong className="text-foreground">Its impact:</strong> The Qur'an 
                transformed a fragmented, idol-worshipping society into a civilization 
                that led the world in science, ethics, and justice for centuries.
              </li>
              <li className="relative before:absolute before:-left-6 before:text-secondary before:content-['•']">
                <strong className="text-foreground">Its challenge:</strong> The Qur'an 
                challenges anyone to produce even a single chapter like it—a challenge 
                that remains unanswered after 1,400 years.
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Selected Verses */}
      <ContentSection>
        <SectionHeader
          eyebrow="Verses"
          title="Selected Passages"
          description="A glimpse into the profound wisdom and beauty of the Qur'an"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {selectedVerses.map((verse, index) => (
            <QuranVerse
              key={index}
              arabic={verse.arabic}
              translation={verse.translation}
              reference={verse.reference}
            />
          ))}
        </div>
      </ContentSection>

      {/* Invitation */}
      <ContentSection background="muted">
        <QuranVerse
          variant="featured"
          arabic="أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ ۚ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا"
          translation="Then do they not reflect upon the Qur'an? If it had been from any other than Allah, they would have found within it much contradiction."
          reference="Qur'an 4:82"
        />
      </ContentSection>

      {/* Closing */}
      <ContentSection className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            An Invitation to Read
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We invite you to read the Qur'an with an open heart and mind. Approach it 
            not as a critic but as a seeker. Many who came to it with skepticism left 
            transformed. The Qur'an addresses the human soul directly—give it the 
            chance to speak to yours.
          </p>
        </div>
      </ContentSection>
    </Layout>
  );
};

export default Quran;
