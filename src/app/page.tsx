import Image from 'next/image';
import styles from "./home.module.css";
import SocialMediaBlock from './components/SocialMediaBlock';
import PizzaGallery from './components/PizzaGallery';
import Link from "next/link";

export default function Home() {
  return (
  <div className="font-sans m-0 p-0 box-border text-gray-800 bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="m-5 py-[60px] px-10 bg-white" id="home">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_300px] grid-cols-1 gap-[50px] items-start">
          <div className="order-2 lg:order-1">
            <h1 className="text-[1.8rem] lg:text-[2rem] text-[#8b6f47] font-semibold mb-6 leading-[1.3]">
              Angelos Ziavros – Tradition, Küche und Pizza in Werdohl
            </h1>
            <p className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
              Ich bin Angelos Ziavros, leidenschaftlicher Koch aus Werdohl. Mit über 20 Jahren Erfahrung in der Gastronomie bringe ich mediterrane Tradition und deutsche Kochkunst zusammen. Jeden Samstag verwöhne ich Werdohl mit frischer Holzofenpizza aus regionalen Zutaten in der Holzofenbäckerei Deitmerg.
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Mein Anspruch: Nur die besten Zutaten, sorgfältige Zubereitung und eine Portion Leidenschaft in jedem Gericht. Besuchen Sie mich und erleben Sie authentische Küche in familiärer Atmosphäre.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/chef.webp"
              alt="Angelos Ziavros"
              width={300}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>
      {/* About Section */}
   <section className={styles.aboutSection} id="about">
        <div className={styles.aboutContent}>
          <div>
            <Image
              src="/chefs.jpg"
              alt="Angelos mit Team"
              width={300}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div id="angelos" className={styles.aboutText}>
            <h2>Über Angelos Ziavros</h2>
            <p>
             Koch aus Werdohl – zwischen mediterranen Wurzeln und deutscher Tradition.
            </p>
            <p>
             Nach über 20 Jahren Erfahrung in der Gastronomie habe ich mich entschieden, den Weg der Tradition einzuschlagen.
             Seit August 2023 arbeite ich mit dem Meisterbäcker Hubert Deitmerg in seiner traditionellen Bäckerei, die seit über 20 Jahren besteht.
             Jeden Samstag vertraut er mir seinen Ofen für das Angelos Pizza Projekt an.
             Gemeinsam mit Hubert backen wir jeden Donnerstags- und Freitagabend traditionelles Holzofenbrot sowie viele weitere klassische deutsche Backwaren.
             Dabei gewinne ich Woche für Woche ein tiefes Verständnis für die präzise und feine Arbeit, die nötig ist, um einen guten Teig herzustellen.
            </p>
            <p>
              Parallel dazu arbeite ich als Koch in der Küche des Restaurants Thuns Dorfkrug, wo wir seit über fünf Jahren eine ausgezeichnete Zusammenarbeit pflegen.
              Dort habe ich direkt von Chefin Frau Thun wertvolle Kenntnisse der deutschen Küche erworben.
            </p>
            <p>
              Meine Wurzeln liegen in der mediterranen Küche.
              Mein Ziel ist es, beide Traditionen miteinander zu verbinden, um etwas Einzigartiges zu schaffen – und dabei folge ich ausschließlich meinem Herzen.
            </p>
            <div className="mt-20 lg:mt-70"><Image className="lg:ml-auto lg:mr-auto"src="/signature.svg" alt="Angelos Ziavros signature" width={100} height={30} /></div>
          </div>
        </div>
      </section>

      {/* Pizza Section */}
      <section className={styles.pizzaSection} id="menu">
        <div className={styles.pizzaContent}>
          <div className={styles.pizzaText}>
            <h2>Pizza in Wendtorf – frisch aus dem Holzofen</h2>
            <p>
              Jede Zutaten zählt! Und jeder Schritt von der Teigherstellung bis zum
              Belegen ist für das perfekte Ergebnis entscheidend. Bei mir wird jeder Pizza mit
              Sorgfalt und Liebe zum Detail zubereitet.
            </p>
            <p>
              Meine Pizza-Teige ruhen 48 Stunden, damit sie ihr volles Aroma entfalten können.
              Im Steinofen bei über 400°C entstehen dann knusprige Meisterwerke, die jeden
              Bissen zu einem Genuss machen.
            </p>

            <div className={styles.ingredients}>
              <h3>Unsere Pizza-Auswahl</h3>
              <ul className={styles.pizzaList}>
                <li className={styles.pizzaItem}>
                  <span className={styles.pizzaName}>1 – Margherita – 9</span><br />
                  <span className={styles.pizzaIngredients}>€ Italienisch | Mozzarella | Basilikum | Olivenöl</span>
                </li>

                <li className={styles.pizzaItem}>
                  <span className={styles.pizzaName}>2 – Salami – 12</span><br />
                  <span className={styles.pizzaIngredients}>€ Italienisch | Mozzarella | Salami</span>
                </li>

                <li className={styles.pizzaItem}>
                  <span className={styles.pizzaName}>3 – Bacon – 12</span><br />
                  <span className={styles.pizzaIngredients}>€ Italienisch | Mozzarella | Bacon | karamellisierte Zwiebeln</span>
                </li>

                <li className={styles.pizzaItem}>
                  <span className={styles.pizzaName}>4 – Griechische Delikatesse – 13</span><br />
                  <span className={styles.pizzaIngredients}>€ Griechisch | Kapern/Mais | Oliven | Zwiebeln | Paprika | Feta | Oregano | Olivenöl</span>
                </li>

                <li className={styles.pizzaItem}>
                  <span className={styles.pizzaName}>5 – Rote Daz (scharf) – 12</span><br />
                  <span className={styles.pizzaIngredients}>€ Griechisch | Mozzarella | scharfe Sauce | Knoblauch | Chiliöl</span>
                </li>

                <li className={styles.pizzaItem}>
                  <span className={styles.pizzaName}>6 – Spezial – 14</span><br />
                  <span className={styles.pizzaIngredients}>€ Italienisch | Mozzarella | Salami | Bacon | Paprika | Champignons</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/dove.jpg"
              alt="Pizza aus dem Holzofen"
              width={350}
              height={350}
              className={styles.pizzaImage}
            />
            <div className={styles.nutritionInfo}>
              <h4>Öffnungszeiten</h4>
              <p>Holzofenbäckerei Deitmerg</p>
              <p>Lengelsen 6</p>
              <p>58791 Werdohl</p>
            </div>
            <div className={styles.nutritionInfo}>
              <h4>Jetzt vorbestellen</h4>
              <a href="tel:+4904343555123" aria-label="Call us at +49 4343 555 123">
                <p>+49 (0) 4343 555 123</p>
              </a>
              <p>WhatsApp, SMS und Anruf</p>
            </div>
            <SocialMediaBlock className={styles.nutritionInfo}/>

          </div>
        </div>
      </section>

      {/* Brown Section - Process */}
      <section className={styles.brownSection}>
        <div className={styles.brownContent}>
          <h2>Unser Holzofen</h2>
          <p>
            Das Herz der authentischen Pizza – seit über 20 Jahren in der Holzofenbäckerei Deitmerg.
          </p>
          <br/>
          <p>
            In der Holzofenbäckerei Deitmerg arbeiten wir mit einem traditionellen Holzofen, der seit über 20 Jahren im Einsatz ist.
            Dieser Ofen verleiht jeder Pizza ihren unverwechselbaren Geschmack und die perfekte Kruste – etwas, das nur echtes Holzfeuer erreichen kann.
          </p>
          <p>
            Die Temperatur im Ofen erreicht über 400 Grad Celsius, wodurch die Pizzen in nur wenigen Minuten perfekt gebacken werden.
            Die intensive Hitze sorgt für einen knusprigen Boden und einen luftigen Rand, während die Zutaten ihr volles Aroma entfalten.
          </p>
          <p>
            Jede Pizza wird von mir persönlich in den Ofen geschoben und genau beobachtet, bis sie die ideale Bräunung erreicht hat.
            Diese handwerkliche Präzision und die Erfahrung von Hubert Deitmerg machen jede Pizza zu einem besonderen Erlebnis.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery} id="gallery">
        <PizzaGallery className="mx-auto my-8" />
      </section>

      {/* Logo Section */}
      <section className={styles.logoSection}>
        <div className={styles.logo}>
           <Image
              src="/angelos-ziavros-logo-vertical.svg"
              alt="Angelos Ziavros"
              width={300}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="contact">
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h3>Angelos Ziavros</h3>
              <p>
                Tradition, Küche und Pizza<br />
                Seit über 20 Jahren in Wendtorf<br />
                Authentische Küche mit Herz
              </p>
            </div>

            <div className={styles.footerSection}>
              <h3>Kontakt</h3>
              <p>
                Hauptstraße 123<br />
                24235 Wendtorf<br />
                Deutschland<br />
                <br />
                Tel: +49 4343 555 123<br />
                Email: info@angelos-pizza.de
              </p>
            </div>

            <div className={styles.footerSection}>
              <h3>Öffnungszeiten</h3>
              <p>
                Dienstag - Sonntag<br />
                17:00 - 22:00 Uhr<br />
                <br />
                Montag Ruhetag<br />
                <br />
                Reservierungen empfohlen
              </p>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>© 2025 Angelos Ziavros. Alle Rechte vorbehalten. | <Link href="/impressum">Impressum</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}