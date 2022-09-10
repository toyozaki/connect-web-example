import {
  Code,
  codeFromString,
  codeToString,
  ConnectError,
  decodeBinaryHeader,
  encodeBinaryHeader,
} from "@bufbuild/connect-web";
import { useState } from "react";
import "./App.css";

import { ElizaService } from "./gen/buf/connect/demo/eliza/v1/eliza_connectweb";
import { SayRequest } from "./gen/buf/connect/demo/eliza/v1/eliza_pb";
import { useClient } from "./hooks/useClient";

function App() {
  const client = useClient(ElizaService);

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    {
      fromMe: boolean;
      message: string;
    }[]
  >([]);
  const [isIntroduceDone, setIsIntroduceDone] = useState(false);

  const introduce: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setInputValue("");
    setIsIntroduceDone(true);

    for await (const res of client.introduce({ name: inputValue })) {
      setMessages((prev) => [
        ...prev,
        {
          fromMe: false,
          message: res.sentence,
        },
      ]);
    }
  };

  const say: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setInputValue("");

    setMessages((prev) => [
      ...prev,
      {
        fromMe: true,
        message: inputValue,
      },
    ]);

    try {
      const headers = new Headers();
      headers.set("Authorization", "Bearer MyNameIsTYZK");

      // non-ASCIIな値を送る時は, base64エンコーディングが必要(gRPC-webとConnect)
      // encodeBinaryHeaderは, messageもUTF-8 textも受け取れる
      const data = new Uint8Array([0xde, 0xad, 0xbe, 0xef]);
      headers.set("Data-Bin", encodeBinaryHeader(data));
      headers.set("Message-Bin", encodeBinaryHeader(new SayRequest()));
      headers.set("Greet-Emoji-Bin", encodeBinaryHeader("🤗"));

      const response = await client.say(
        {
          sentence: inputValue,
        },
        {
          headers: headers, // Connect headers are just HTTP headers.
          onHeader: (headers) => {
            console.log("received headers:", headers);

            // binary headerを受け取る時
            const binMessage = headers.get("Message-Bin");
            if (binMessage != null) {
              const message: SayRequest = decodeBinaryHeader(
                binMessage,
                SayRequest
              );
            }
          },
          onTrailer: (trailers) => console.log(trailers),
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          fromMe: false,
          message: response.sentence,
        },
      ]);
    } catch (err) {
      if (err instanceof ConnectError) {
        if (err.code === Code.Unauthenticated) {
          // such as logout process
        }

        console.log(
          err.code,
          codeToString(err.code),
          codeFromString(codeToString(err.code)),
          err.message, // prefixed with the error code
          err.rawMessage
        );

        // metadata
        console.log(
          "Custom-Header-Value",
          err.metadata.get("Custom-Header-Value")
        );
        console.log(
          "Custom-Trailer-Value",
          err.metadata.get("Custom-Trailer-Value")
        );
      }
    }
  };

  return (
    <>
      <ol>
        {messages.map((msg, index) => (
          <li key={index}>{`${msg.fromMe ? "ME:" : "ELIZA:"} ${
            msg.message
          }`}</li>
        ))}
      </ol>

      <form onSubmit={isIntroduceDone ? say : introduce}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isIntroduceDone ? "Message" : "What's your name?"}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
