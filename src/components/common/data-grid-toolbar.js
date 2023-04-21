import RefreshIcon from "@mui/icons-material/Refresh";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { memo } from "react";

const dashboardSectionBp = { xs: 12, sm: 6, md: 6, lg: 6, xl: 6 };

function DataGridToolbar({
  hederTitle,
  searchPlaceholder = "Search by name",
  onRefresh,
}) {
  return (
    <GridToolbarContainer>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item {...dashboardSectionBp} display="flex">
          <Typography className="pl-[5px]">
            <b>{hederTitle}</b>
          </Typography>
        </Grid>
        <Grid
          item
          {...dashboardSectionBp}
          display="flex"
          justifyContent="flex-end"
        >
          <GridToolbarQuickFilter
            placeholder={searchPlaceholder}
            variant="outlined"
            size="small"
          />
          <Tooltip title="Refresh" placement="top">
            <IconButton
              size="small"
              className="!rounded-md !border-solid !border !border-[#bfc0c1] !ml-2 !w-[40px] !h-[40px]"
              onClick={onRefresh}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}

export default memo(DataGridToolbar);
