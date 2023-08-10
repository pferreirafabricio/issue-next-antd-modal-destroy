"use client";

import { Button, Modal } from "antd";
import confirm from "antd/es/modal/confirm";

export default function Home() {
  function handleButtonClick() {
    confirm({
      title: "Modal opened with 'confirm' method",
      footer: (
        <Button
          onClick={() => {
            console.log("Closing all modals");
            Modal.destroyAll();
          }}
        >
          Close all
        </Button>
      ),
    });
  }

  return (
    <main>
      <Button onClick={handleButtonClick}>Open confirm modal</Button>
    </main>
  );
}
