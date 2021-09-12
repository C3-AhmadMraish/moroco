

const Search = () => { // within brackets pass params or context from search bar in the header
// and must add token to search or incapsulate it within authprovider section
    const [data, setData] = useState("");
    const [error,setError] = useState("");
    // useState for userName
    // useState for userImg

    const searchSend = (e) => {
     e.preventDefault();
     let savedData = { data };
    axios.post("http://localhost:5000/search", savedData).then((result) => { // send query via axios to backend
    }).catch((err) =>{
            if(err.message == "Name doesn't exist"){ // backend error
                setError("No user found with this name") //frontend error display
            }
            if(err.message == `Server Error`){  // backend error
                setError(`Server Error`)          //frontend error display
            }
            /*
            pass result into main.js via context? 
            render them in /search  how :D ??????????

            result.img
            result.usename               //i know i am not useing correct names in db just thinking
            */
        })
    }
    return (
        <>
        <input
        type="text"
        placeholder="Search..." 
        onChange={(e) => {
            setData(e.target.value);
        }}
      />
    
    <button type="submit" onClick={searchSend}>
    {/* search icon*/}
    </button>
    <div>{error}</div>
        </>
        )
    }