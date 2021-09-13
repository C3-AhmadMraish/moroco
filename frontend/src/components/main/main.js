
// const Main = () => {
//   let { setIsLoggedIn, isLoggedIn, saveToken } = useContext(AuthContext);
//   const location=useLocation();
//   const history = useHistory();
//   const [value, setValue] = useState([]);
//   return (
//     <>
//       {isLoggedIn ? (
//         <>
//           <Header />
//           <Cover />
//           <div className="App">
//             <LeftSideBar />
//             <div className="main">
//               <Switch>


//               <Route exact path="/search">
//               <Search/>
//               </Route>
//               <Route exact path="/">
//               <postContext.Provider value={{ value, setValue }}>
//                    <Feed />
//                    <Post />
//                  </postContext.Provider>
              
//               </Route>             
//               </Switch>
//             </div>
//             <RightSideBar />
//           </div>
//         </>
//       ) : (
//         history.push("/login")
//       )}
//     </>
//   );
// };
// export default Main;