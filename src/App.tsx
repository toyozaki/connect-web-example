import { useState } from "react";
import "./App.css";

import {
  createConnectTransport,
  createPromiseClient,
} from "@bufbuild/connect-web";
import { ElizaService } from "@buf/bufbuild_connect-web_bufbuild_eliza/buf/connect/demo/eliza/v1/eliza_connectweb";

const transport = createConnectTransport({
  baseUrl: "https://demo.connect.build",
});

const client = createPromiseClient(ElizaService, transport);

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    {
      fromMe: boolean;
      message: string;
    }[]
  >([]);

  return (
    <>
      <ol>
        {messages.map((msg, index) => (
          <li key={index}>{`${msg.fromMe ? "ME:" : "ELIZA:"} ${
            msg.message
          }`}</li>
        ))}
      </ol>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setInputValue("");

          setMessages((prev) => [
            ...prev,
            {
              fromMe: true,
              message: inputValue,
            },
          ]);

          const response = await client.say({
            sentence: inputValue,
          });

          setMessages((prev) => [
            ...prev,
            {
              fromMe: false,
              message: response.sentence,
            },
          ]);
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
