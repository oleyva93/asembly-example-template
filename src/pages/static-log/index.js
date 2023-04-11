import Layout from "@/components/layout";
import { Typography } from "@mui/material";

export default function StaticLog() {
  return (
    <>
      <Typography className="dark:text-white" variant="h4">
        Static Log
      </Typography>
    </>
  );
}

StaticLog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
