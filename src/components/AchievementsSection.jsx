const AchievementsSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="flex w-full flex-col lg:flex-row py-16 container mx-auto ">
              <div className="card  rounded-box grid h-32 grow place-items-center">
                <h1 className='font-extrabold text-6xl text-base-100'>50K+</h1>
                <p className='font-medium text-2xl text-base-100 '>Active Users</p>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="card rounded-box grid h-32 grow place-items-center">
                <h1 className='font-extrabold text-6xl text-base-100'>200+</h1>
                <p className='font-medium text-2xl text-base-100 '>Premium Tools</p>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="card rounded-box grid h-32 grow place-items-center">
                <h1 className='font-extrabold text-6xl text-base-100'>4.9</h1>
                <p className='font-medium text-2xl text-base-100 '>Rating</p>
              </div>
            </div>
        </div>
    );
};
export default AchievementsSection;