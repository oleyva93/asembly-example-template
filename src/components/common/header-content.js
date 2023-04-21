import { Grid, Typography } from "@mui/material";
import { memo } from "react";

const HeaderContent = ({ title, rightSection }) => {
  return (
    <Grid container className="border-b border-slate-200 mb-3">
      <Grid item xs={4}>
        <Typography className="dark:text-white" variant="h5">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={8} display="flex" justifyContent="flex-end">
        {rightSection}
      </Grid>
    </Grid>
  );
};
export default memo(HeaderContent);
