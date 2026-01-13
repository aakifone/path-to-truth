import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { QuranVerse } from "@/components/shared/QuranVerse";
import { ContentSection } from "@/components/shared/ContentSection";
import { Book, Globe, Users, Clock } from "lucide-react";

const WhatIsIslam = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Understanding
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            What is Islam?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            A comprehensive introduction to the faith followed by nearly two billion people worldwide
          </p>
        </div>
      </section>

      {/* The Meaning of Islam */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="The Foundation"
            title="The Meaning of Islam"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The word <strong className="text-foreground">"Islam"</strong> is derived from the Arabic 
              root "s-l-m," which carries the meanings of peace, purity, submission, and obedience. 
              In the religious sense, Islam means complete submission to the will of God (Allah in Arabic).
            </p>
            <p>
              A <strong className="text-foreground">"Muslim"</strong> is one who submits their will 
              to God—not out of compulsion, but out of love, trust, and recognition of His wisdom 
              and mercy. This submission brings about a profound inner peace that affects every 
              aspect of life.
            </p>
            <p>
              Islam is not just a set of rituals or beliefs confined to certain times or places. 
              It is a complete way of life that provides guidance on personal conduct, family 
              relationships, business ethics, governance, and spirituality.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Core Concept */}
      <ContentSection background="muted">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-glow rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                One God (Tawhid)
              </h3>
              <p className="mt-4 text-muted-foreground">
                The fundamental concept of Islam is the belief in One God—unique, without partners, 
                the Creator and Sustainer of all existence. This belief, called Tawhid, is the 
                foundation upon which everything else in Islam is built.
              </p>
            </div>
            <div className="card-glow rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Universal Message
              </h3>
              <p className="mt-4 text-muted-foreground">
                Islam teaches that the message of submitting to One God is not new—it was the 
                message of all prophets from Adam to Muhammad. Islam is the culmination and 
                completion of this timeless guidance.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Featured Verse */}
      <ContentSection>
        <QuranVerse
          variant="featured"
          arabic="قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
          translation="Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent."
          reference="Qur'an, Surah Al-Ikhlas (112:1-4)"
        />
      </ContentSection>

      {/* Brief History */}
      <ContentSection background="pattern">
        <SectionHeader
          eyebrow="Historical Context"
          title="A Brief History of Islam"
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              1
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                The First Revelation (610 CE)
              </h3>
              <p className="mt-2 text-muted-foreground">
                In the cave of Hira near Mecca, Prophet Muhammad (peace be upon him) received 
                the first revelation from God through the Angel Gabriel. This marked the 
                beginning of his prophethood at the age of 40.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              2
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                The Call to Monotheism
              </h3>
              <p className="mt-2 text-muted-foreground">
                The Prophet called people away from idol worship to the worship of the One True 
                God. Despite facing persecution, the early Muslims remained steadfast in their 
                faith, eventually migrating to Medina.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              3
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Establishment in Medina (622 CE)
              </h3>
              <p className="mt-2 text-muted-foreground">
                The migration (Hijra) to Medina marks the beginning of the Islamic calendar. 
                There, the Prophet established the first Muslim community based on justice, 
                brotherhood, and the worship of One God.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              4
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Completion of the Message (632 CE)
              </h3>
              <p className="mt-2 text-muted-foreground">
                Over 23 years, the Qur'an was revealed in its entirety. During his final 
                pilgrimage, the Prophet delivered his farewell sermon emphasizing equality, 
                justice, and the rights of all people.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* The Prophets */}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Continuity"
            title="The Role of Prophets"
          />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Muslims believe that God sent prophets and messengers to every nation throughout 
              history, all carrying the same essential message: worship the One God alone and 
              live righteously.
            </p>
            <p>
              Among these prophets are figures familiar to Jews and Christians: Adam, Noah, 
              Abraham, Moses, David, Solomon, and Jesus (peace be upon them all). Muslims 
              believe in and honor all of these prophets.
            </p>
            <p>
              Prophet Muhammad (peace be upon him) is considered the final messenger, sent 
              not to a specific nation but to all of humanity. His message confirms and 
              completes the messages of all previous prophets.
            </p>
          </div>
          
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                <Book className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-medium text-foreground">124,000</p>
                <p className="text-sm text-muted-foreground">Prophets sent throughout history</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-medium text-foreground">One Message</p>
                <p className="text-sm text-muted-foreground">Submit to the One True God</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Closing Verse */}
      <ContentSection background="muted">
        <QuranVerse
          variant="featured"
          arabic="الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا"
          translation="This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion."
          reference="Qur'an 5:3"
        />
      </ContentSection>
    </Layout>
  );
};

export default WhatIsIslam;
