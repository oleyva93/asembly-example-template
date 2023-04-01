import Layout from "@/shared/components/layout";
import { Typography } from "@mui/material";

export default function IndexPage() {
  return (
    <>
      <Typography className="dark:text-white" variant="h4">
        Welcome Back
      </Typography>
    </>
  );
}

IndexPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
