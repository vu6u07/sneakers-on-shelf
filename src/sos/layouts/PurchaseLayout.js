import { Container } from "@mui/material";
import Page from "../../components/Page";
import Order from "../components/purchase/Order";

export default function PurchaseLayout() {

    return (<>
        <Page title="Đơn Hàng">
            <Container>
                <Order />
            </Container>
        </Page>
    </>)
}