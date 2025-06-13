
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Impressum = () => {
  React.useEffect(() => {
    document.title = "Impressum - Berliner Insel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-houseboat-darkblue font-playfair">Impressum</h1>
          
          <Card className="p-6 md:p-8 shadow-md">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Angaben gemäß § 5 TMG</h2>
                <p><strong>Jörg Schiemann</strong></p>
                <p>Veteranenstraße 20</p>
                <p>10119 Berlin</p>
                <p>Deutschland</p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Kontakt</h2>
                <p>E-Mail: ahoi@berliner-insel.de</p>
                <p>Telefon: 0170 9118465</p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Umsatzsteuer-Identifikationsnummer</h2>
                <p>Umsatzsteuer-ID wird nachgereicht</p>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>Jörg Schiemann</p>
                <p>Veteranenstraße 20</p>
                <p>10119 Berlin</p>
                <p>Deutschland</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Haftung für Inhalte</h2>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Haftung für Links</h2>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3 text-houseboat-darkblue">Urheberrecht</h2>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </section>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
