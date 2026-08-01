import PosterLayout from "./components/PosterLayout";
import PosterImage from "./components/PosterImage";
import PosterHeading from "./components/PosterHeading";
import PosterSubtext from "./components/PosterSubtext";
import PosterBadge from "./components/PosterBadge";

function App() {
  return (
    <PosterLayout>
      <PosterImage />
      <PosterHeading text="Ariel Okal" />
      <PosterSubtext text="Basketball Coach" />

      <PosterBadge title="About Arial">
      </PosterBadge>
    </PosterLayout>
  );
}

export default App;
