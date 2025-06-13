
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Videos = () => {
  React.useEffect(() => {
    document.title = "Videos - Berliner Insel";
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: "iEw0Z1Zrk-g",
      title: "Virtuelle Tour durch die Berliner Insel",
      description: "Lernen Sie unsere luxuriöse Hausboot-Unterkunft kennen und erleben Sie alle Bereiche in diesem umfassenden Rundgang."
    },
    {
      id: "XmJ7rV1SeYs",
      title: "Ein Tag auf der Berliner Insel",
      description: "Begleiten Sie uns durch einen typischen Tag auf unserem Hausboot - vom Sonnenaufgang bis zum Sternenhimmel."
    },
    {
      id: "8SuABXpq42A",
      title: "Technische Einweisung: Beiboot & SUPs",
      description: "Eine praktische Anleitung zur Nutzung des elektrischen Beiboots und der Stand-Up-Paddle-Boards."
    },
    {
      id: "M1F4oCASzmg",
      title: "Unser Heimatrevier: Die schönsten Plätze",
      description: "Entdecken Sie die malerischsten Ankerplätze und Sehenswürdigkeiten in den Potsdamer Havelseen."
    },
    {
      id: "b2vRLP-WT4g",
      title: "Unsere Infrarot-Sauna und Entspannungsbereiche",
      description: "Erfahren Sie mehr über die Wellness-Angebote an Bord der Berliner Insel."
    },
    {
      id: "LL8fK_hdkNI",
      title: "Gäste-Impressionen: Echte Erfahrungen",
      description: "Hören Sie, was unsere Gäste über ihren Aufenthalt auf der Berliner Insel zu sagen haben."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-houseboat-darkblue font-playfair">Videos</h1>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-3xl">
            Entdecken Sie die Berliner Insel in Bewegtbild. Unsere Videos geben Ihnen einen authentischen Eindruck vom Leben auf dem Wasser und zeigen die besonderen Merkmale unseres Hausboots.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-houseboat-darkblue">{video.title}</h2>
                  <p className="text-muted-foreground">{video.description}</p>
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

export default Videos;
