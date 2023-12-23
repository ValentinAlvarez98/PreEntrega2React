import { Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AppRoutes() {

      return (
            <Routes>
                  <Route path="/" element={
                        <>
                              <Carousel prop="Aqui va el carousel" />
                              <ItemListContainer />
                              <Footer />
                        </>
                  } />
                  <Route path="/:sId" element={<ItemListContainer />} />
                  <Route path="/:cId/:p_id" element={<ItemDetailContainer />} />
                  <Route path="*" element={<Navigate to="/" />} />
            </Routes>
      );

}