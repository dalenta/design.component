import Button from "components/Button";
import React from "react";
import { UilCoins } from "@iconscout/react-unicons";
function Home() {
  return (
    <div>
      <Button
        variant="primary"
        theme="blue-hedgehog"
        content="icon-behind"
        icon={<UilCoins size="15" color="white" />}
      >
        TEST LINK
      </Button>
    </div>
  );
}

export default Home;
