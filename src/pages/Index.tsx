import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ContentSection } from "@/components/shared/ContentSection";
import {
  BookOpen,
  Heart,
  MessageCircle,
  Lightbulb,
  Users,
  Compass,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-pattern-geometric opacity-10" />
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="animate-fade-in mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              An Invitation to Truth
            </span>
            <h1 className="animate-fade-in font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Discover the Path to{" "}
              <span className="text-gradient-gold">Inner Peace</span>
            </h1>
            <p className="animate-fade-in-delay-1 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Explore the message of Islam with wisdom, clarity, and compassion. 
              A journey of understanding for seekers of truth, purpose, and meaning.
            </p>
            <div className="animate-fade-in-delay-2 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="gold" size="xl" asChild>
                <Link to="/islam">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/faq">Common Questions</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 50L48 45.7C96 41 192 33 288 35.3C384 38 480 52 576 58.2C672 65 768 63 864 55.5C960 48 1056 35 1152 30.2C1248 25 1344 28 1392 29.5L1440 31V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
              fill="hsl(40 33% 98%)"
            />
          </svg>
        </div>
      </section>

      {/* What is Islam Introduction */}
      <ContentSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            eyebrow="Understanding"
            title="What is Islam?"
            description="Islam is not merely a religion, but a complete way of life centered on the worship of One God and the pursuit of peace, justice, and spiritual fulfillment."
          />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            The word <strong className="text-foreground">"Islam"</strong> comes from the Arabic root 
            meaning "peace" and "submission." A Muslim is one who willingly submits to the Creator of 
            the heavens and the earth, finding true peace through this connection with the Divine.
          </p>
          <Button variant="outline" size="lg" className="mt-8" asChild>
            <Link to="/islam">
              Learn More About Islam
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContentSection>

      {/* Featured Verse */}
      <ContentSection background="muted">
        <QuranVerse
          variant="featured"
          arabic="ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ"
          translation="Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best."
          reference="Qur'an 16:125"
        />
      </ContentSection>

      {/* Explore Topics */}
      <ContentSection>
        <SectionHeader
          eyebrow="Explore"
          title="Discover the Depths of Islam"
          description="Explore various aspects of Islamic belief, practice, and spirituality through our comprehensive guides."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={BookOpen}
            title="Core Beliefs"
            description="Understand the six fundamental articles of faith that form the foundation of Islamic belief."
            link="/beliefs"
          />
          <FeatureCard
            icon={Compass}
            title="Purpose of Life"
            description="Discover Islam's profound answer to humanity's most fundamental question: Why do we exist?"
            link="/purpose"
          />
          <FeatureCard
            icon={Star}
            title="The Prophet ﷺ"
            description="Learn about the life, character, and mission of Prophet Muhammad, peace be upon him."
            link="/prophet"
          />
          <FeatureCard
            icon={Shield}
            title="Misconceptions"
            description="Find clear, compassionate answers to common misunderstandings about Islam."
            link="/misconceptions"
          />
          <FeatureCard
            icon={MessageCircle}
            title="FAQ"
            description="Get answers to frequently asked questions about Islamic beliefs and practices."
            link="/faq"
          />
          <FeatureCard
            icon={Heart}
            title="Beauty of Islam"
            description="Experience the spiritual and moral beauty that Islam brings to hearts and societies."
            link="/beauty"
          />
        </div>
      </ContentSection>

      {/* Why Da'wah */}
      <ContentSection background="pattern">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-secondary">
              About This Platform
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Share the Message?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Da'wah—the invitation to Islam—is an act of sincere concern for humanity. 
              It is not about conversion through pressure, but about sharing a message 
              that has brought peace, purpose, and guidance to billions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We believe that every person deserves the opportunity to learn about Islam 
              from authentic sources, free from the distortions of media and misinformation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Knowledge & Wisdom</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Compassion & Respect</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Open to All</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <QuranVerse
              translation="Indeed, this Qur'an guides to that which is most suitable and gives good tidings to the believers who do righteous deeds that they will have a great reward."
              reference="Qur'an 17:9"
            />
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-pattern-geometric opacity-10" />
        <div className="container relative text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Begin Your Journey of Discovery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Whether you're curious about Islam, seeking answers to life's big questions, 
            or simply wanting to learn more, we welcome you with open hearts.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="gold" size="lg" asChild>
              <Link to="/beliefs">Explore Core Beliefs</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/reflection">Call to Reflection</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
