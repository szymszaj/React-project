# Builder.io + Next.js Integration

Projekt Next.js z App Router + integracja Builder.io (visual CMS).

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## Konfiguracja Builder.io

API key jest już ustawiony w `.env.local`. Jeśli chcesz go zmienić:

```env
NEXT_PUBLIC_BUILDER_API_KEY=twój-klucz
```

## Struktura projektu

```
src/
├── app/
│   ├── [[...page]]/page.tsx    ← Catch-all: strony z Builder.io
│   ├── blog/
│   │   ├── page.tsx            ← Lista postów
│   │   └── [slug]/page.tsx     ← Szczegóły posta
│   ├── layout.tsx              ← Root layout z nawigacją
│   └── globals.css
├── components/
│   ├── RenderBuilderContent.tsx ← Wrapper na BuilderComponent
│   ├── HeroSection.tsx         ← Custom komponent (zarejestrowany w Builder)
│   └── FeatureCard.tsx         ← Custom komponent (zarejestrowany w Builder)
└── lib/
    └── builder.ts              ← Inicjalizacja SDK
```

## Jak stworzyć model Blog Post w Builder.io

1. Wejdź na [builder.io/models](https://builder.io/models)
2. Kliknij **+ New Model** → wybierz **Data Model**
3. Nazwa modelu: `blog-post`
4. Dodaj pola:
   - `title` – Text
   - `slug` – Text (wymagane dla URL)
   - `description` – Long Text
   - `publishDate` – Date
   - `author` – Text
   - `coverImage` – File
5. Kliknij **Save**
6. Ustaw **Preview URL** modelu: `http://localhost:3000/blog/:data.slug`

## Jak stworzyć stronę w Builder.io

1. Wejdź na [builder.io/content](https://builder.io/content)
2. Kliknij **+** → wybierz model **Page**
3. Ustaw URL strony (np. `/`) i przeciągaj komponenty
4. W panelu Custom Components znajdziesz **HeroSection** i **FeatureCard**
5. Opublikuj – strona pojawi się na `http://localhost:3000/`

## Custom komponenty w Builder.io

| Komponent     | Edytowalne pola                                    |
| ------------- | -------------------------------------------------- |
| `HeroSection` | title, subtitle, ctaText, ctaLink, backgroundImage |
| `FeatureCard` | icon, title, description, accentColor              |
