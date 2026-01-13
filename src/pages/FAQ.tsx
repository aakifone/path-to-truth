import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContentSection } from "@/components/shared/ContentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Basics",
    questions: [
      {
        id: "what-is-muslim",
        question: "What does it mean to be a Muslim?",
        answer:
          "A Muslim is someone who submits their will to God (Allah in Arabic). The word comes from the Arabic root 's-l-m' meaning peace and submission. Being Muslim means believing in One God, following the guidance sent through Prophet Muhammad (peace be upon him), and striving to live a life of worship, righteousness, and service to others.",
      },
      {
        id: "five-pillars",
        question: "What are the Five Pillars of Islam?",
        answer:
          "The Five Pillars are the foundational acts of worship: 1) Shahada – testifying that there is no god but Allah and Muhammad is His messenger; 2) Salah – performing five daily prayers; 3) Zakat – giving 2.5% of savings to charity; 4) Sawm – fasting during Ramadan; 5) Hajj – pilgrimage to Mecca once in a lifetime if able. These pillars form the framework of a Muslim's devotional life.",
      },
      {
        id: "quran",
        question: "What is the Qur'an?",
        answer:
          "The Qur'an is the holy book of Islam, believed by Muslims to be the literal word of God revealed to Prophet Muhammad (peace be upon him) through the Angel Gabriel over 23 years. It contains guidance on all aspects of life—spirituality, morality, law, and society. Unlike other scriptures, the Qur'an has been preserved in its original Arabic text unchanged since its revelation.",
      },
    ],
  },
  {
    category: "Practices",
    questions: [
      {
        id: "why-pray-five",
        question: "Why do Muslims pray five times a day?",
        answer:
          "The five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) are a direct connection between the worshipper and God. They serve as regular reminders throughout the day of one's purpose and relationship with the Creator. Prayer provides spiritual nourishment, discipline, and a break from worldly concerns. The Prophet said that prayer is the 'coolness of his eyes' – a source of peace and joy.",
      },
      {
        id: "ramadan",
        question: "Why do Muslims fast in Ramadan?",
        answer:
          "Fasting in Ramadan (the ninth month of the Islamic calendar) is one of the Five Pillars. Muslims abstain from food, drink, and other physical needs from dawn to sunset. The purpose is multifold: developing self-discipline, empathizing with the hungry, purifying the soul, and drawing closer to God. It's a month of increased worship, reflection, and community.",
      },
      {
        id: "halal-haram",
        question: "Why does Islam forbid certain things?",
        answer:
          "Islamic prohibitions exist to protect individuals and society from harm. For example, alcohol is forbidden because of its destructive effects on health, families, and communities. Interest (usury) is prohibited because it leads to exploitation of the poor. Modesty requirements protect dignity and family values. Every prohibition has wisdom behind it, even if not immediately apparent, and is based on God's knowledge of what is ultimately beneficial for humanity.",
      },
      {
        id: "hijab",
        question: "Why do some Muslim women wear hijab?",
        answer:
          "The hijab (head covering) is worn by Muslim women as an act of obedience to God and an expression of modesty. It's a personal choice made out of faith, not compulsion. Many women describe it as liberating—allowing them to be valued for their intellect and character rather than appearance. The concept of modesty in Islam applies to both men and women, though the specific requirements differ.",
      },
    ],
  },
  {
    category: "Beliefs",
    questions: [
      {
        id: "after-death",
        question: "What do Muslims believe happens after death?",
        answer:
          "Muslims believe in life after death. After a person dies, their soul enters a state called Barzakh (barrier) until the Day of Judgment. On that Day, all people will be resurrected and held accountable for their beliefs and deeds. Those who believed and did good will enter Paradise—an eternal realm of peace and pleasure. Those who rejected God despite knowing the truth will face punishment. God is Just and Merciful, and every soul will receive exactly what it deserves.",
      },
      {
        id: "jesus",
        question: "What do Muslims believe about Jesus?",
        answer:
          "Muslims deeply revere Jesus (called Isa in Arabic) as one of the greatest prophets. They believe in his virgin birth, his miracles by God's permission, and his role as the Messiah. However, Muslims do not believe Jesus is God or the son of God. The Qur'an emphasizes that Jesus himself worshipped God and called people to worship God alone. Muslims believe Jesus was not crucified but was raised to heaven, and will return before the Day of Judgment.",
      },
      {
        id: "science",
        question: "Is Islam compatible with science?",
        answer:
          "Absolutely. Islam encourages the pursuit of knowledge and understanding of the natural world. The Qur'an contains numerous verses that invite reflection on creation—the stars, the embryo, the mountains. During the Islamic Golden Age, Muslim scholars made groundbreaking contributions to mathematics, astronomy, medicine, and chemistry. Faith and reason are not opposed in Islam; studying the universe is seen as a form of worship and a path to appreciating God's wisdom.",
      },
    ],
  },
  {
    category: "Becoming Muslim",
    questions: [
      {
        id: "how-become",
        question: "How can someone become Muslim?",
        answer:
          "Becoming Muslim is a simple and profound step. One sincerely declares the Shahada (testimony of faith): 'I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.' This declaration, made with conviction and understanding, makes a person Muslim. No special ceremony or witnesses are required, though many choose to make this declaration at a mosque. After becoming Muslim, one learns the practices gradually while continuing to grow in faith and knowledge.",
      },
      {
        id: "born-muslim",
        question: "Do you have to be born Muslim?",
        answer:
          "No. Islam teaches that every person is born in a natural state of purity and inclination toward God (called Fitrah). Anyone can become Muslim at any point in their life. In fact, some of the most honored companions of the Prophet Muhammad (peace be upon him) were converts. Islam welcomes all people regardless of their background, race, or previous beliefs. What matters is sincere faith and the desire to submit to God.",
      },
      {
        id: "doubts",
        question: "What if I have doubts?",
        answer:
          "Doubt is a natural part of the human experience and the journey to faith. Islam encourages asking questions, seeking knowledge, and using reason. Many who came to Islam did so after a period of questioning and searching. Take your time, read, reflect, and ask questions. God guides those who sincerely seek Him. Even after becoming Muslim, continued learning and growth are part of the spiritual journey.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Questions
          </span>
          <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Clear answers to common questions about Islamic beliefs and practices
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqs.map((section, index) => (
        <ContentSection
          key={section.category}
          background={index % 2 === 0 ? "default" : "muted"}
        >
          <SectionHeader
            eyebrow={`Category ${index + 1}`}
            title={section.category}
          />
          <div className="mx-auto mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {section.questions.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="card-glow rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ContentSection>
      ))}

      {/* Closing */}
      <ContentSection background="primary" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            The journey of understanding is personal and ongoing. Continue exploring 
            the other sections of this website, or visit your local mosque or Islamic 
            center where you'll find people happy to answer your questions with warmth 
            and patience.
          </p>
        </div>
      </ContentSection>
    </Layout>
  );
};

export default FAQ;
