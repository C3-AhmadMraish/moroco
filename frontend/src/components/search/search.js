import { React, useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
const Search = () => {
  const [ssValue, setssValue] = useState();
  const { sValue } = useContext(searchContext);
  useEffect(() => {
    async function test() {
      setssValue(sValue);
    }
    test();
  }, [sValue]);

  console.log(ssValue);
  return (
    <div>
      <h1>asdasdasdad</h1>
      {/* map here to loop on users */}
      {/* {ssValue &&
        ssValue.map((e, i) => {
          return (
            <div key={i}>
              <img src={e.avatar} />
              <p>
                {e.firstName} {e.lastName}
              </p>
            </div>
          );
        })} */}
    </div>
  );
};

export default Search;
