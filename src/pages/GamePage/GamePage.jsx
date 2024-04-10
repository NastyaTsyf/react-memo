import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";

export function GamePage() {
  const { pairsCount } = useParams();
  const { isGameMode } = useParams();
  console.log(isGameMode);
  console.log(pairsCount);

  return (
    <>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5} isGameMode={isGameMode}></Cards>
    </>
  );
}
