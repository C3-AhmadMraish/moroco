import React from "react";
import searchContext from "./../../App"
const Search = () => {
  const { sValue } = useContext(searchContext);
  return (
    <div>
      {/* map here to loop on users */}
      {sValue.length &&
        sValue.map((e) => {
          return (
            <div>
            <img src={e.avatar}/>
              <p>{e.firstName} {e.lastName}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Search