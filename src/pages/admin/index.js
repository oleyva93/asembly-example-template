import Layout from "@/components/layout";
import { Typography } from "@mui/material";

export default function Admin() {
  return (
    <>
      <Typography className="dark:text-white" variant="h4">
        Admin
      </Typography>
    </>
  );
}

Admin.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
