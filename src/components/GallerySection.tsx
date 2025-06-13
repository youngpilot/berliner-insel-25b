import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const galleryImages = [{
  src: "/lovable-uploads/29080415-b0d0-4955-8154-ef97b694468b.png",
  alt: "Berliner Insel - Außenansicht",
  span: "col-span-2 row-span-2"
}, {
  src: "/lovable-uploads/040712c5-a291-4b19-92f9-fdfd578416eb.png",
  alt: "Hausboot Sonnendeck",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/d7342661-3d79-408a-a609-9b6cfec8f53a.png",
  alt: "Durchgang zum Sonnendeck",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/8bc3252d-d5b3-4ead-9216-f4bceb08d82f.png",
  alt: "Berliner Insel bei Nacht",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/a0a7dad5-9ca5-4102-88e3-42916110dd60.png",
  alt: "Eingang mit Sicht auf das Wohnzimmer",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/f03fe7bc-e75a-447e-8803-7a57e8211808.png",
  alt: "Kaffeemaschine mit Seeblick",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/152f9065-e8e9-4312-b6af-e4ce5c94233b.png",
  alt: "Wohnbereich mit Panoramablick",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/894c23cf-a327-4220-a2cc-0f9e4d7d4c9c.png",
  alt: "Wohnbereich mit Blick aufs Wasser",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/0f4b38e7-dca5-4ab6-9ee4-21123ef58914.png",
  alt: "Schlafzimmer mit Blick aufs Wasser",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/fd133ac5-f4c5-479d-b50d-162122974eec.png",
  alt: "Modernes Badezimmer mit Sauna",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/02ed13f1-8a2f-43d9-a25d-89ebc9af79b2.png",
  alt: "Sauna mit Ambiente-Beleuchtung",
  span: "col-span-1 row-span-1"
}, {
  src: "/lovable-uploads/17bfd76f-bdfb-45ce-abf5-5a19b2259df3.png",
  alt: "Drohnenaufnahme vom Sonnendeck",
  span: "col-span-2 row-span-1"
}, {
  src: "/lovable-uploads/e78fa95d-2be1-4515-929d-1d5e5d2df1d0.png",
  alt: "Nächtlicher Seeblick mit Sternenhimmel",
  span: "col-span-2 row-span-1"
}];
const GallerySection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const showPreviousImage = () => {
    if (selectedImageIndex === null) return;
    const newIndex = selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(newIndex);
  };
  const showNextImage = () => {
    if (selectedImageIndex === null) return;
    const newIndex = selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(newIndex);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      showPreviousImage();
    } else if (e.key === 'ArrowRight') {
      showNextImage();
    } else if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    }
  };
  return <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-houseboat-darkblue">
            Galerie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Machen Sie einen visuellen Rundgang durch unser exquisites Hausboot und stellen Sie sich Ihren perfekten Urlaub vor
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.map((image, index) => <div key={index} className={cn("overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-300 shadow-md", index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1")} onClick={() => setSelectedImageIndex(index)}>
              <AspectRatio ratio={16 / 9} className="h-full">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover scale-105 transform transition-transform duration-700 hover:scale-125" />
              </AspectRatio>
            </div>)}
        </div>

        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-5xl p-1 sm:p-2 overflow-hidden bg-black/95 border-none" onKeyDown={handleKeyDown}>
            {selectedImageIndex !== null && <>
                <div className="relative flex items-center justify-center w-full h-auto max-h-[80vh]">
                  <img src={galleryImages[selectedImageIndex].src} alt={galleryImages[selectedImageIndex].alt} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                  
                  <Button variant="outline" size="icon" className="absolute left-2 bg-black/50 hover:bg-black/70 text-white border-white/20 rounded-full" onClick={e => {
                e.stopPropagation();
                showPreviousImage();
              }}>
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Vorheriges Bild</span>
                  </Button>
                  
                  <Button variant="outline" size="icon" className="absolute right-2 bg-black/50 hover:bg-black/70 text-white border-white/20 rounded-full" onClick={e => {
                e.stopPropagation();
                showNextImage();
              }}>
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Nächstes Bild</span>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-white mt-4">
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" onClick={showPreviousImage}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Zurück
                  </Button>
                  <p className="text-sm">{selectedImageIndex + 1} / {galleryImages.length}</p>
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" onClick={showNextImage}>
                    Weiter <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </>}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default GallerySection;