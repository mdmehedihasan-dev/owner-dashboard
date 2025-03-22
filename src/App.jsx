import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RootLayOut from "./RootLayOut";
import LoginPage from "./pages/auth/login";
import ForgotPassword from "./pages/auth/forgotPassword";
import VerificationPage from "./components/verificationComponents/VerificationPage";
import ResetPassword from "./pages/auth/resetPassword";
import BookingManagement from "./pages/bookingManagement";
import Menu from "./pages/menu";
import AddCategory from "./pages/addCategory";
import UserManagement from "./pages/userManagement";
import TableBooking from "./pages/tableBooking";
import MyDetails from "./pages/myDetails";
import RestaurantDetails from "./pages/restaurantDetails";
import Reviews from "./components/restaurantComponents/Reviews";
import SocialMedia from "./components/restaurantComponents/SocialMedia";
import BusinessHours from "./components/restaurantComponents/BusinessHours";
import Party from "./components/restaurantComponents/Party";
import ReservationsAgreement from "./components/restaurantComponents/ReservationsAgreement";
import MenuItems from "./components/restaurantComponents/MenuItems";
import RestaurantFeatures from "./components/restaurantComponents/RestaurantFeatures";
import Cuisine from "./components/restaurantComponents/Cuisine";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayOut />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route
            path="/booking-management"
            element={<BookingManagement />}
          ></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/add-category" element={<AddCategory />}></Route>
          <Route path="/table-booking" element={<TableBooking />}></Route>
          <Route path="/user-management" element={<UserManagement />}></Route>
          <Route path="/my-details" element={<MyDetails/>}></Route>
          <Route path="/restaurant-details" element={<RestaurantDetails/>}></Route>
          <Route path="/restaurant/reviews" element={<Reviews/>}></Route>
          <Route path="/restaurant/social-media" element={<SocialMedia/>}></Route>
          <Route path="/restaurant/business-hours" element={<BusinessHours/>}></Route>
          <Route path="/restaurant/party" element={<Party/>}></Route>
          <Route path="/restaurant/cuisine" element={<Cuisine/>}></Route>
          <Route path="/restaurant/restaurant-agreement" element={<ReservationsAgreement/>}></Route>
          <Route path="/restaurant/menu-items" element={<MenuItems/>}></Route>
          <Route path="/restaurant/restaurant-features" element={<RestaurantFeatures/>}></Route>

        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/verification" element={<VerificationPage />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>

      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
