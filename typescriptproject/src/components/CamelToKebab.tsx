import React, { useState } from "react";
import "../App.css";

const CamelToKebab = () => {
  const [outputStr, setOutputStr] = useState("");

  // This function take string as an input and uses regular expression to identify the uppercase in the string
  function camelCaseToKebab(str: string): string {
    /* ([a-z0-9]|(?=[A-Z]))  is a group ($1) Matches either a lowercase letter, a digit, or a positive lookahead for an uppercase letter.
       ([A-Z]): Matches an uppercase letter. This is group $2
       g is it matches until no matches are left (the expression will match all occurrences of the pattern in the input string, not just the first one.)
       "$1-$2" is a replacement string used to replace the matched pattern with the first and second capturing groups separated by a hyphen*/
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Enter a string in camelCaseString:
          <input
            className="Input-field"
            type="text"
            onChange={(e) => setOutputStr(camelCaseToKebab(e.target.value))}
          />
        </label>
        <br />
        <label>
          Output in kebab-case-string:
          <input
            className="Input-field"
            type="text"
            value={outputStr}
            readOnly
          />
        </label>
      </header>
    </div>
  );
}

export default CamelToKebab;
