import { React, useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";
import "./search.css"
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
    <div className="searchContainer">
      {sValue &&
        sValue.map((e, i) => {
          return (
            <div key={i}>
              <img width="150px" height="150px" src={e.avatar} />
            <div className="searchedUser" key={i}>
              <p>
                {e.firstName} {e.lastName}
              </p>
              <img height="250px" width="250px" src={e.avatar} alt=""/>
            </div>
          );
        })}

    </div>
  );
};

export default Search;
