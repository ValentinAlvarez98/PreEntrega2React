import { Container } from "@mui/material";
import BasicTabs from "../../Tabs/Tabs.jsx";

const ItemList = ({ products }) => {

    return (
        <>
            <Container className="container" maxWidth="lg">

                <BasicTabs products={products} />

            </Container>
        </>
    )
}

export default ItemList;
