interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    
    <div className={`h-full w-full   min-w-[500px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
    
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-pink-90 p-4" />
          <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden"></span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Michaelle Grünner"
          subtitle="Premium Plan"
          peopleJoined=" Officiis neque dolore facilis itaque excepturi sint. Molestias sed vel quibusdam similique."
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Jessica Lehmannn"
          subtitle="Monthly Plan"
          peopleJoined="consectetur adipisicing elit. Officiis neque dolore facilis itaque excepturi sint. Molestias sed vel quibusdam similique."
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="Thomas SchteinBock"
          subtitle="Yearly Plan"
          peopleJoined="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque dolore facilis itaque excepturi sint. Molestias sed vel quibusdam similique."
        />
      </div>

      <div className="flexEnd mt-10  px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-pink-90  p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-pink-20">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>

          <p className="regular-14 xl:regular-16 mt-5 text-pink-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            iusto distinctio totam aut non illo laboriosam laudantium modi
            aspernatur consectetur reprehenderit saepe, dolorem veritatis
            laborum a perspiciatis sit maxime corrupti nisi consequuntur ad
            deleniti adipisci. Laudantium earum quisquam at quo labore veritatis
            nihil, nisi ipsam hic eligendi minima doloribus dicta!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
