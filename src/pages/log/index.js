import Layout from "@/components/layout";
import { Typography } from "@mui/material";

export default function Log() {
  return (
    <>
      <Typography className="dark:text-white" variant="h4">
        Log
      </Typography>
    </>
  );
}

Log.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
