import { Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AppRoutes() {

      return (
            <Routes>
                  <Route path="/PreEntrega2React" element={
                        <>
                              <Carousel prop="Aqui va el carousel" />
                              <ItemListContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="/PreEntrega2React/:sId" element={
                        <>
                              <ItemListContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="/PreEntrega2React/:cId/:p_id" element={
                        <>
                              <ItemDetailContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="*" element={<Navigate to="/PreEntrega2React" />} />
            </Routes>
      );

}