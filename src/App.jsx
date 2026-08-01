import PosterLayout from "./components/PosterLayout";
import PosterImage from "./components/PosterImage";
import PosterHeading from "./components/PosterHeading";
import PosterSubtext from "./components/PosterSubtext";
import PosterBadge from "./components/PosterBadge";
import CTAButton from "./components/CTAButton";

function App() {
  return (
    <PosterLayout>
      {/* LEFT SIDE */}
      <PosterImage />

      <PosterHeading text="Ariel Okal" />

      <PosterSubtext text="Basketball Coach" />

      <PosterBadge
        title="About Arial"
        text="Introducing Arial Okal, a basketball dynamo with unmatched speed and agility on the court. His coaching style revolves around refining footwork and enhancing agility. Follow for tips and insights on boosting your speed and agility game."
        className="absolute top-[730px] left-[46px] w-[387px]"
      />

      <CTAButton text='"Speed defines the pace, agility conquers the game."' />

      {/* RIGHT COLUMN */}
      <div className="absolute top-[44px] left-[470px] w-[272px] h-[1022px] flex flex-col gap-[64px]">

        {/* SPEED DYNAMO */}
        <div className="flex flex-col gap-[24px]">
          <PosterBadge
            title="Speed Dynamo"
            showLine={true}
            className="w-[270px]"
          />

          <div className="flex flex-col gap-[20px]">

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Strength
              </h3>

              <p className="text-[17px] font-light leading-[28px] text-black">
                Speed & Agile Court Moves
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Expertise
              </h3>

              <p className="text-[17px] font-light leading-[28px] text-black">
                Lightning-fast speed, agile maneuvers
              </p>
            </div>

          </div>
        </div>

        {/* AGILE MOVEMENT EXPERT */}
        <div className="flex flex-col gap-[24px]">

          <PosterBadge
            title="Agile Movement Expert"
            showLine={true}
            className="w-[235px]"
          />

          <div className="flex flex-col gap-[20px]">

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Coaching Focus
              </h3>

              <p className="text-[17px] font-light leading-[28px] text-black">
                Enhancing footwork, boosting agility
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Main Focus
              </h3>

              <ul className="list-disc pl-5 text-[17px] font-light leading-[28px] text-black">
                <li>Speed enhancement tips</li>
                <li>Agility training insights</li>
              </ul>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Tactics
              </h3>

              <p className="text-[17px] font-light leading-[28px] text-black">
                Footwork Finesse: Elevate your game by mastering swift and
                precise foot movements.
              </p>
            </div>

          </div>
        </div>

        {/* TRAINING POSITIONS */}
        <div className="flex flex-col gap-[24px]">

          <PosterBadge
            title="Training Positions"
            showLine={true}
            className="w-[170px]"
          />

          <div className="flex flex-col gap-[20px]">

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Main Focus
              </h3>

              <ul className="list-disc pl-5 text-[17px] font-light leading-[28px] text-black">
                <li>Guards</li>
                <li>Fast-paced offense players</li>
                <li>Players focusing on agility</li>
              </ul>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-semibold leading-[28px] text-black">
                Also
              </h3>

              <ul className="list-disc pl-5 text-[17px] font-light leading-[28px] text-black">
                <li>Trains all basketball Positions</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </PosterLayout>
  );
}

export default App;