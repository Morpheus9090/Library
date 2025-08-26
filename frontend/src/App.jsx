import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router"
import Homepage from "./pages/Homepage"
import AddBook from "./pages/AddBook"
import LoginPage from "./pages/LoginPage"
import Footer from "./components/Footer";
import SignupPage from "./pages/SignupPage"
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast"
import RedirectAuthenticatedUsers from "./providers/RedirectAuthenticatedUsers"
import RedirectUnauthenticatedUsers from "./providers/RedirectUnauthenticatedUsers"
import Searchpage from "./pages/Searchpage"
import Bookpage from "./pages/Bookpage"
import UpdateBook from "./pages/UpdateBook"
function App() {
  const { fetchUser, fetchingUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Toaster/>
     <Navbar/>

     <Routes>
      <Route path={"/"} element={<Homepage/>}/>

       <Route path={"/add-book"} element={
        <RedirectUnauthenticatedUsers>
        <AddBook/>
        </RedirectUnauthenticatedUsers>
        }/>

        <Route path={"/login"} element={
          <RedirectAuthenticatedUsers>
          <LoginPage/>
          </RedirectAuthenticatedUsers>
          }/>

        <Route path={"/signup"} element={
          <RedirectAuthenticatedUsers>
         <SignupPage/>
          </RedirectAuthenticatedUsers>
        }/>
        <Route path="/book/:id" element={<Bookpage />} />
        <Route
          path="/book/:id/update"
          element={
            <RedirectUnauthenticatedUsers>
              <UpdateBook />
            </RedirectUnauthenticatedUsers>
          }
        />
        <Route path="/search" element={<Searchpage />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
