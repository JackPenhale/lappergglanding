import { tw } from 'twind';




const articles = [
  {
    title: `Real Time Dashboard`,
    desc: `Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.`,
    image: `/images/lapdash.png`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Laptime Leaderboard`,
    desc: `Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.`,
    image: `/images/lapleaderboad.png`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Your data, your project`,
    desc: `Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>How will you race?</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Lapper.gg Enables you to race to do more with your racing data
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
