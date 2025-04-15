import ItemForm from "@/components/ItemForm";
import ItemList from "@/components/ItemList";
import ItemSearch from "@/components/ItemSearch";
import { Container, Typography } from "@mui/material";

const AdminShop = () => {
  return (
    <Container maxWidth="sm" sx={{ height: "80hv", marginTop: "48px" }}>
      <Typography variant="h4" gutterBottom>
        Admin Shop Page
      </Typography>
      <ItemForm />
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        My Items
      </Typography>
      <ItemSearch />
      <ItemList />
    </Container>
  );
};

export default AdminShop;
