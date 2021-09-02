import React, { useEffect } from "react";



import { useVoice } from "./voice";
import Mic from "./microphone-black-shape.svg";
import { useBookFetch } from "./book";

const Voice = () => {
  const { text, isListening, listen, voiceSupported } = useVoice();
  const { authorBooks, isFetchingBooks, fetchBooksByAuthor } = useBookFetch();

  useEffect(() => {
    if (text !== "") {
      fetchBooksByAuthor(text);
    }
  }, [text]);

  if (!voiceSupported) {
    return (
      <div className="voice">
        <h1>
          Voice recognition is not supported by your browser, please re-try with
          a supported browser e.g. Chrome
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="app">
        <h2> Voice Search</h2>
        <h3>Click the Mic and say an topic name</h3>
        <div>
          <img
            className={`microphone ${isListening && "isListening"}`}
            src={Mic}
            alt="microphone"
            onClick={listen}
          />
        </div>
        <p>{text}</p>
        {isFetchingBooks ? (
          "fetching books...."
        ) : (
          <ul>
            {authorBooks.map((book, index) => {
              return (
                <li key={index}>
                  <span>{book.title}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="icon-reg">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/dave-gandy"
          title="Dave Gandy"
        >
          Dave Gandy
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
};

export default Voice;
