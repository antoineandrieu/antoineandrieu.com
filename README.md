# Antoine Andrieu — portfolio

Portfolio français construit avec Next.js 16 (App Router), React 19 et Tailwind CSS 4. Export statique dans `dist/`, sans service d’optimisation d’images à l’exécution.

```sh
npm ci
npm run dev
npm run lint
npm run build
node server.mjs
```

Le serveur de prévisualisation sert `dist/` sur le port 3000 (`PORT=3100 node server.mjs` pour un autre port). Les fontes Big Shoulders et Inter sont intégrées par `next/font`.

## Direction photographique

- **ANTOINE_HD 015.jpg** : composition hero, texte dans l’espace libre à gauche, portrait à droite. Sur mobile/tablette (< 900 px), le texte précède un véritable recadrage carré qui préserve visage, mains et tatouages.
- **ANTOINE_HD 009.jpg** : bio / À propos ; portrait souriant en grand, bras croisés, t-shirt noir.
- **ANTOINE_HD 027.jpg** : contact ; portrait assis en col roulé beige, pour la dimension entrepreneur et collaboration.

Attention : les numéros des fichiers sources ne correspondent pas tous aux descriptions initiales. Le col roulé beige est **027**, le rire en t-shirt blanc est **026** et **003** est un portrait à une table en col roulé noir.

Trois images suffisent à raconter le parcours. Les variantes 004, 007, 010, 011, 012 et 021 sont redondantes ; 003 apporte une posture plus formelle déjà couverte par le contact ; 006, 020 et 023 introduiraient une rupture N&B sans contenu distinct pour la justifier ; 024 et 026 conviendraient à un récit personnel absent de la page actuelle.

Typographie et contenu existants conservés, fond blanc, orange (#ff6500) sur les actions principales et les accents du hero, projets sans cartes décoratives, technologies en texte simple. Aucune retouche du visage, des vêtements ou des tatouages.

## Header interactif

`src/components/site-header.tsx` isole les interactions côté client : signature avec rotation de l’astérisque au survol, soulignement des liens, flèche du CTA et ombre légère au défilement. Sous 900 px, un menu numéroté se déplie, se ferme avec Échap, au clic extérieur ou après navigation, et gère le focus clavier. Les animations respectent `prefers-reduced-motion`. Contrôles navigateur effectués à 320, 390, 768, 1024 et 1440 px : ouverture/fermeture, navigation, focus, changement de breakpoint, absence de débordement et réduction des animations.

## Pipeline image

Les originaux HD restent hors du dépôt et hors de `public/`. Les dérivés générés et leur manifeste sont versionnés : un build de déploiement n’a pas besoin des originaux.

Pour régénérer les images à partir du dossier contenant les JPEG nommés `ANTOINE_HD XXX.jpg` :

```sh
npm run images:generate -- /chemin/vers/portraits
```

`scripts/generate-portraits.mjs` utilise Sharp (dépendance explicite) pour :

- respecter l’orientation et convertir en sRGB ;
- générer AVIF qualité 65 et WebP qualité 85, sans agrandir les sources ;
- produire les largeurs 768/1280/1920/2560 pour le hero, 480/768/1080 pour son crop mobile, et 480/800/1200 pour les deux autres portraits ;
- retirer les métadonnées EXIF des fichiers livrés ;
- écrire les dimensions et largeurs disponibles dans `src/components/portraits.json`.

`Portrait` rend un `<picture>` natif avec `srcset`, `sizes`, repli WebP et sélection du crop via `media`. Ce choix est compatible avec l’export statique, contrairement à l’optimiseur serveur Next.js par défaut. Le hero est chargé immédiatement avec `fetchPriority="high"` ; les deux autres images sont chargées en différé. Les dimensions HTML et les ratios CSS réservent la place avant chargement. Un seul fichier est téléchargé par portrait, selon le format, la largeur et la densité d’écran.

`server.mjs` sert AVIF et WebP avec leurs types MIME. Les textes alternatifs décrivent les portraits ; les décorations typographiques sont masquées aux lecteurs d’écran. La navigation clavier dispose d’un lien d’évitement et de focus visibles, et le défilement respecte la préférence de réduction des animations.

## Vérification de l’intégration (16 septembre 2026)

- `npm run lint` : réussi, sans avertissement.
- `npm run build` : export statique réussi, vérification TypeScript incluse. Avertissement Next.js sur l’absence de métriques de police de secours pour Big Shoulders ; la police principale est chargée et affichée.
- Build Webpack également réussi. Le premier essai Turbopack avait conservé une erreur d’ouverture de port de la sandbox ; déplacement du cache concerné puis build standard réussi.
- Inspection Chrome des sections aux largeurs 320, 390, 768, 900, 1024, 1440 et 1920 px ; Retina ×2 à 390 et 1440 px.
- CLS mesuré à 0 dans ces sessions locales, aucune erreur JavaScript, aucun débordement horizontal, toutes les ancres valides et toutes les photos chargées.
- Trois téléchargements image par parcours complet (un par photo), dont le crop mobile jusqu’à 899 px. Le hero Retina pèse environ 22 Ko sur mobile et 42 Ko sur grand écran, hors en-têtes HTTP.
- 26 fichiers dérivés, 905 428 octets au total sur disque. Aucun JPEG HD livré.
- Aucun script de tests unitaires préexistant dans le projet ; validation par lint, build et navigateur. Ces mesures locales ne remplacent pas des mesures terrain en production.
