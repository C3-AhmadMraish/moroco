import { React, useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
const Search = () => {
  const [ssValue, setssValue] = useState();
  const { sValue } = useContext(searchContext);
  console.log("ff",sValue)
  useEffect(() => {
    async function test() {
      setssValue(sValue);
    }
    test();
  }, [sValue]);
  return (
    <div>
      {sValue &&
        sValue.map((e, i) => {
            console.log("x")
          return (
            <div key={i}>
              <img src={e.avatar} />
              <p>
                {e.firstName} {e.lastName}
              </p>
            </div>
          );
        })}

    </div>
  );
};

export default Search;
