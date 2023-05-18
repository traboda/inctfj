const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;
const data = require(`../../data/${eventID}/index.json`);
 
const LandingPrizeDetails = () => {
  return (
    <div className="landing-prize-details">
      <div className="container mx-auto py-12 px-4">
        <div className="text-6xl font-semibold">
          <span className="text-primary">Prizes</span>
          {' '}
          and Awards
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center mt-20 gap-8">
          <div className="w-full rounded-md bg-gradient-to-r from-primary via-red-500 to-yellow-500 p-1 shadow-xl order-2 md:order-1">
            <div className="flex w-full items-center justify-center flex-col bg-white back h-[240px]">
              <div className="text-5xl font-semibold">{data?.prizes.second}</div>
              <div className="text-2xl text-center mt-4 font-semibold opacity-70">2nd Prize</div>
            </div>
          </div>
          <div className="w-full rounded-md bg-gradient-to-r from-primary via-red-500 to-yellow-500 p-1 order-1 md:order-2 shadow-xl transform md:scale-125">
            <div className="flex w-full items-center justify-center flex-col back h-[240px] text-white">
              <div className="text-6xl font-semibold">{data?.prizes.first}</div>
              <div className="text-2xl text-center mt-4 font-semibold opacity-90">1st Prize</div>
            </div>
          </div>
          <div className="w-full rounded-md bg-gradient-to-r from-primary via-red-500 to-yellow-500 p-1 order-3 shadow-xl">
            <div className="flex w-full items-center justify-center flex-col bg-white back h-[240px]">
              <div className="text-5xl font-semibold">{data?.prizes.third}</div>
              <div className="text-2xl text-center mt-4 font-semibold opacity-70">3rd Prize</div>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl mt-20 font-semibold opacity-60">
          and other exciting prizes.
        </div>
      </div>
    </div>
  );
};

export default LandingPrizeDetails;