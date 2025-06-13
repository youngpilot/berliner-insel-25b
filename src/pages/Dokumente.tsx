
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dokumente = () => {
  React.useEffect(() => {
    document.title = "Dokumente - Berliner Insel";
    window.scrollTo(0, 0);
  }, []);

  const documents = [
    { 
      title: "Merkblatt", 
      description: "Fasst das Wichtigste für Ihren Aufenthalt zusammen.",
      filename: "Merkblatt_Berliner_Insel.pdf"
    },
    { 
      title: "Bordbuch", 
      description: "Umfangreiches Wissen zum Boot, dem Verhalten auf dem Wasser und der Hausordnung.",
      filename: "Bordbuch_Berliner_Insel.pdf"
    },
    { 
      title: "Mietvereinbarung", 
      description: "Einseitiges Dokument, welches während der Übergabe an Bord ausgefüllt und unterschrieben werden muss. Individuelle Vereinbarungen werden hier handschriftlich festgehalten.",
      filename: "Mietvereinbarung_Berliner_Insel.pdf"
    },
    { 
      title: "Mietvertrag", 
      description: "Allgemeine Rechte und Pflichten von Mieter und Vermieter, Zahlungs- und Stornobedingungen.",
      filename: "Mietvertrag_Berliner_Insel.pdf"
    },
    { 
      title: "Übergabeprotokoll", 
      description: "Übergabe- und Einweisungsprotokoll sowie eine Liste zur Dokumentation möglicher Schäden.",
      filename: "Uebergabeprotokoll_Berliner_Insel.pdf"
    },
    { 
      title: "Inventarliste", 
      description: "Eine Übersicht des Bootsinventares als Grundlage für die Übergabe.",
      filename: "Inventarliste_Berliner_Insel.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-houseboat-darkblue font-playfair">Dokumente</h1>
          
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl">
            Hier finden Sie alle wichtigen Dokumente für Ihren Aufenthalt auf der Berliner Insel. 
            Bei Fragen stehen wir Ihnen gerne unter ahoi@berliner-insel.de zur Verfügung.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 text-houseboat-teal">
                    <FileText size={36} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2 text-houseboat-darkblue">{doc.title}</h2>
                    <p className="text-muted-foreground mb-4">{doc.description}</p>
                    <Button variant="outline" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Herunterladen</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dokumente;
