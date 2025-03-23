
import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface StoryTile {
  id: number;
  title: string;
  content: string;
}

const storyTiles: StoryTile[] = [
  {
    id: 1,
    title: "Jak się poznaliśmy",
    content: "Nasza historia rozpoczęła się pewnego jesiennego wieczoru w kawiarni w centrum miasta. Anna pracowała nad swoim projektem, a Bartosz szukał wolnego miejsca. Jedyne wolne miejsce było przy jej stoliku. Początkowo wymienili tylko kilka uprzejmych zdań, ale gdy okazało się, że oboje interesują się fotografią, rozmowa płynęła coraz swobodniej. Spotkanie przedłużyło się do późnych godzin wieczornych, a my wymieniliśmy się numerami telefonów. Kilka dni później spotkaliśmy się na pierwszej wspólnej sesji fotograficznej w parku i tak zaczęła się nasza przygoda, która trwa do dziś..."
  },
  {
    id: 2,
    title: "Nasze pierwsze wakacje",
    content: "Po sześciu miesiącach związku zdecydowaliśmy się na pierwszą wspólną podróż. Wybór padł na malowniczą Toskanię. Wynajęliśmy niewielki domek położony wśród winnic z dala od zgiełku miasta. Codziennie odkrywaliśmy urokliwe miasteczka, delektowaliśmy się lokalną kuchnią i winami. Pewnego wieczoru, gdy siedzieliśmy na tarasie podziwiając zachód słońca, uświadomiliśmy sobie, jak wiele znaczymy dla siebie nawzajem. To właśnie wtedy Bartosz po raz pierwszy powiedział Annie, że ją kocha. Ten wyjazd na zawsze pozostanie w naszych sercach jako magiczny czas, który jeszcze bardziej nas do siebie zbliżył."
  },
  {
    id: 3,
    title: "Nasze pasje",
    content: "Mimo że dzielą nas różne zainteresowania, nauczyliśmy się czerpać z nich to, co najlepsze i wspierać się nawzajem. Anna jest pasjonatką literatury i sztuki, spędza długie godziny w galeriach i księgarniach. Bartosz natomiast kocha sporty wodne i górskie wędrówki. Z czasem Anna polubiła spokojne wyprawy górskie, doceniając piękno natury, a Bartosz odkrył fascynację sztuką współczesną dzięki Annie. Nasze różnice nie dzielą nas, ale uzupełniają i sprawiają, że każdy dzień jest pełen nowych odkryć. Wierzymy, że to właśnie te różnice i umiejętność znajdowania kompromisów sprawiają, że nasz związek jest tak wyjątkowy i pełen wzajemnego szacunku."
  },
  {
    id: 4,
    title: "Oświadczyny",
    content: "Po trzech latach związku Bartosz postanowił się oświadczyć. Zaplanował wszystko w najmniejszych szczegółach, chcąc, aby ten moment był niezapomniany. Na rocznicę ich pierwszego spotkania zaprosił Annę do tej samej kawiarni, gdzie wszystko się zaczęło. Po kawie zaproponował spacer do pobliskiego parku, gdzie czekała niespodzianka - prywatny koncert ulubionego zespołu Anny grający ich piosenkę. Wśród lampionów i kwiatów, otoczony przyjaciółmi ukrytymi wśród drzew, Bartosz uklęknął i poprosił Annę o rękę. Łzy szczęścia, wzruszenie i radość przyjaciół, którzy wyszli z ukrycia - ten moment pozostanie w naszej pamięci na zawsze jako początek nowego rozdziału naszego życia."
  },
  {
    id: 5,
    title: "Nasze plany na przyszłość",
    content: "Zawsze marzyliśmy o zbudowaniu domu na obrzeżach miasta, z dużym ogrodem i miejscem dla naszych przyszłych dzieci do zabawy. Po ślubie planujemy poświęcić czas na realizację tego marzenia. Anna już planuje, jak będzie wyglądał ogród pełen kwiatów i ziół, a Bartosz myśli o warsztacie, gdzie będzie mógł rozwijać swoje zainteresowania stolarskie. Marzymy też o wspólnych podróżach - lista miejsc, które chcemy odwiedzić, jest długa i zróżnicowana. Od egzotycznych plaż Tajlandii, przez historyczne miasta Europy, po dzikie pustkowia Patagonii. Każda podróż ma być dla nas nie tylko przygodą, ale też okazją do poznania nowych kultur i poszerzenia horyzontów."
  },
  {
    id: 6,
    title: "Nasza codzienność",
    content: "Codzienna rutyna może być wyzwaniem dla każdego związku, ale my nauczyliśmy się, jak uczynić z niej źródło radości i bliskości. Nasze poranki zaczynamy od wspólnej kawy i rozmowy o planach na dzień. Wieczory często spędzamy na kanapie, dyskutując o książkach, które aktualnie czytamy, lub oglądając ulubione seriale. W weekendy lubimy odkrywać nowe miejsca w naszym mieście - nieznane kawiarnie, parki czy galerie sztuki. Nauczyliśmy się doceniać małe rzeczy - wspólne gotowanie kolacji, niedzielne śniadania czy spontaniczne spacery. To właśnie te codzienne, pozornie zwyczajne momenty, budują fundamenty naszego związku i sprawiają, że każdy dzień jest wyjątkowy."
  }
];

const StoryTiles = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [openTileId, setOpenTileId] = useState<number | null>(null);

  const toggleTile = (id: number) => {
    setOpenTileId(openTileId === id ? null : id);
  };

  return (
    <section
      id="stories"
      className="section-padding bg-wedding-muted"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-wedding-rose text-wedding-dark font-medium text-sm mb-4">
            Nasza Historia
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-wedding-dark mb-6">
            Wspólne wspomnienia
          </h2>
          <p className="font-serif text-wedding-accent max-w-2xl mx-auto">
            Najważniejsze momenty naszej wspólnej drogi, które doprowadziły nas do tego wyjątkowego dnia.
          </p>
        </div>

        <div className={`w-full max-w-6xl mx-auto ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {storyTiles.map((tile, index) => (
                <CarouselItem key={tile.id} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4">
                  <Collapsible
                    open={openTileId === tile.id}
                    onOpenChange={() => toggleTile(tile.id)}
                    className="w-full"
                  >
                    <div 
                      className="story-tile neo-morphism p-6 rounded-2xl transition-all duration-500 ease-in-out min-h-[120px]"
                      style={{ animationDelay: `${0.2 * index}s` }}
                    >
                      <CollapsibleTrigger className="w-full text-left">
                        <h3 className="text-xl font-display font-medium text-wedding-dark">
                          {tile.title}
                        </h3>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <p className="font-serif text-base text-wedding-accent">{tile.content}</p>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-wedding-muted border-wedding-accent text-wedding-dark hover:bg-wedding-rose hover:text-wedding-dark" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-wedding-muted border-wedding-accent text-wedding-dark hover:bg-wedding-rose hover:text-wedding-dark" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StoryTiles;
