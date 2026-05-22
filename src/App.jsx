export default function PortfolioMeryem() {
  const sections = [
    "Accueil",
    "Profil",
    "Compétences",
    "Certifications",
    "Projets",
    "Veille Technologique",
  ];

  const competences = [
    {
      categorie: "Gérer le patrimoine informatique",
      items: [
     {
       texte: "Recenser et identifier les ressources numériques",
       preuves: [
        {
      titre: "Inventaire matériel",
      lien: "/preuves/ad portfolio_Comp1.docx"   },
    {
      titre: "Schéma réseau",
      lien: "/preuves/competence1/schema-reseau.pdf"
    }
  ]
},
        "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
        "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
        "Vérifier les conditions de la continuité d’un service informatique",
        "Gérer des sauvegardes",
        "Vérifier le respect des règles d’utilisation des ressources numériques",
      ],
    },
    {
      categorie: "Répondre aux incidents et aux demandes d’assistance et d’évolution",
      items: [
        "Collecter, suivre et orienter des demandes",
        "Traiter des demandes concernant les services réseau et système, applicatifs",
        "Traiter des demandes concernant les applications",
      ],
    },
    {
      categorie: "Développer la présence en ligne de l’organisation",
      items: [
        "Participer à la valorisation de l’image de l’organisation sur les médias numériques",
        "Référencer les services en ligne de l’organisation et mesurer leur visibilité",
        "Participer à l’évolution d’un site Web exploitant les données de l’organisation",
      ],
    },
    {
      categorie: "Travailler en mode projet",
      items: [
        "Analyser les objectifs et les modalités d’organisation d’un projet",
        "Planifier les activités",
        "Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
      ],
    },
    {
      categorie: "Mettre à disposition des utilisateurs un service informatique",
      items: [
        "Réaliser les tests d’intégration et d’acceptation d’un service",
        "Déployer un service",
        "Accompagner les utilisateurs dans la mise en place d’un service",
      ],
    },
    {
      categorie: "Organiser son développement professionnel",
      items: [
        "Mettre en place son environnement d’apprentissage personnel",
        "Mettre en œuvre des outils et stratégies de veille informationnelle",
        "Gérer son identité professionnelle",
        "Développer son projet professionnel",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-gray-800 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide text-[#8b5e83]">
            Meryem Can
          </h1>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-[#8b5e83] transition"
              >
                {section}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="accueil"
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#8b5e83] mb-4">
            Portfolio BTS SIO option SISR (Solutions d’Infrastructure, Systèmes et Réseaux)
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Bonjour, je suis <span className="text-[#8b5e83]">Meryem Can</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Étudiante passionnée par l’informatique, actuellement en BTS SIO.
            Curieuse, motivée et toujours prête à apprendre, je développe mes
            compétences techniques à travers mes projets, mes stages et ma
            veille technologique.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#profil"
              className="bg-[#8b5e83] text-white px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition"
            >
              Découvrir mon profil
            </a>

            <a
              href="#competences"
              className="border border-[#8b5e83] text-[#8b5e83] px-6 py-3 rounded-2xl hover:bg-[#8b5e83] hover:text-white transition"
            >
              Voir mes compétences
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-80 h-80 rounded-full bg-[#e7d7e3] absolute blur-3xl opacity-60"></div>

          <div className="relative bg-white shadow-2xl rounded-[2rem] p-8 w-full max-w-sm border border-gray-100">
            <div className="w-28 h-28 rounded-full bg-[#8b5e83] text-white flex items-center justify-center text-4xl font-bold mx-auto mb-6">
              MC
            </div>

            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-semibold">Étudiante BTS SIO • Option SISR</h3>
              <p className="text-gray-600">
                Bac STMG • Option SISR • Systèmes, réseaux & cybersécurité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profil */}
      <section
        id="profil"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Profil</h2>
          <div className="w-24 h-1 bg-[#8b5e83] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-[#8b5e83]">
              Mon parcours
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Je m’appelle Meryem Can et je suis actuellement en première année de BTS SIO option SISR. Après un baccalauréat STMG, j’ai choisi de me spécialiser dans l’informatique afin de développer des compétences techniques dans le domaine des réseaux, du développement et de la cybersécurité. Depuis petite, j’ai toujours aimé la magie, faire des tours et surprendre les gens. J’aimais comprendre comment il était possible de tromper l’œil et de créer des illusions. C’est cette curiosité qui m’a progressivement intéressée au fonctionnement des systèmes et à l’informatique, un domaine où comprendre ce qui se cache derrière les choses est essentiel.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-[#8b5e83]">
              Stage de première année
            </h3>

            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">
                  Entreprise :
                </span>{" "}
                À compléter
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Missions principales :
                </span>
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Assistance informatique</li>
                <li>Gestion des équipements</li>
                <li>Support utilisateurs</li>
                <li>Découverte du fonctionnement du service informatique</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-[#8b5e83]">
              Stage de deuxième année
            </h3>

            <p className="text-gray-500 italic">
              Cette section sera complétée lors de ma deuxième année de BTS.
            </p>
          </div>
        </div>
      </section>

      {/* Competences */}
      <section
        id="competences"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Compétences</h2>
          <div className="w-24 h-1 bg-[#8b5e83] rounded-full"></div>
        </div>

        <div className="space-y-10">
          {competences.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#8b5e83] mb-6">
                {cat.categorie}
              </h3>

              <div className="grid gap-5">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="border border-dashed border-gray-300 rounded-2xl p-5 hover:border-[#8b5e83] transition"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-lg">{item}</h4>
                      </div>

                      <button className="bg-[#f4edf2] text-[#8b5e83] px-5 py-2 rounded-xl hover:bg-[#8b5e83] hover:text-white transition w-fit">
                        Ajouter une preuve
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-[#8b5e83] rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl p-12 border border-dashed border-gray-300 text-center text-gray-500">
          Certifications à venir...
        </div>
      </section>

      {/* Projets */}
      <section
        id="projets"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Projets</h2>
          <div className="w-24 h-1 bg-[#8b5e83] rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl p-12 border border-dashed border-gray-300 text-center text-gray-500">
          Les projets seront ajoutés progressivement au cours de la formation.
        </div>
      </section>

      {/* Veille */}
      <section
        id="veille-technologique"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200"
      >
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Veille Technologique
          </h2>
          <div className="w-24 h-1 bg-[#8b5e83] rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#8b5e83]">
              Sujet de veille
            </h3>

            <p className="text-gray-600">
              À compléter : cybersécurité, intelligence artificielle,
              développement web, réseaux...
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-[#8b5e83]">
              Outils utilisés
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Feedly</li>
              <li>• YouTube</li>
              <li>• OpenClassrooms</li>
              <li>• Reddit / blogs spécialisés</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
