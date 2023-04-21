import DataGridToolbar from "@/components/common/data-grid-toolbar";
import { useInventory, useReleases } from "@/hooks/useDashboard";
import { Grid, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { memo, useCallback } from "react";
import { inventoryColumns, releasesColumns } from "./const";
import { useDashboardCtx } from "./container";

const dashboardSectionBp = { xs: 12, sm: 12, md: 6, lg: 6, xl: 6 };

const DashboardContent = () => {
  const [filters, setState] = useDashboardCtx((state) => state.filters);
  const {
    data: releases,
    isFetching: isFetchingReleases,
    refetch: refetchReleases,
  } = useReleases(filters.releases, {
    onSuccess: (res) => {
      setState({
        releases: res.releases,
      });
    },
  });

  const {
    data: inventory,
    isFetching: isFetchingInventory,
    refetch: refetchInventory,
  } = useInventory(filters.inventory, {
    onSuccess: (res) => {
      setState({
        inventory: res.items,
      });
    },
  });

  const handlePagination = useCallback(
    (key) => (params) => {
      setState({
        filters: {
          ...filters,
          [key]: {
            limit: params.pageSize,
            page: params.page + 1,
          },
        },
      });
    },
    [filters]
  );

  return (
    <Grid container spacing={2} className="mt-5">
      <Grid item {...dashboardSectionBp}>
        <DataGrid
          autoHeight
          loading={isFetchingReleases}
          className="p-[15px] h-[350px]"
          rows={releases?.releases || []}
          columns={releasesColumns}
          pagination
          slots={{
            loadingOverlay: LinearProgress,
            toolbar: DataGridToolbar,
          }}
          componentsProps={{
            toolbar: {
              hederTitle: "Release Version:",
              onRefresh: () => refetchReleases(),
            },
          }}
          paginationModel={{
            pageSize: filters.releases.limit,
            page: filters.releases.page - 1,
          }}
          onPaginationModelChange={handlePagination("releases")}
          pageSizeOptions={[5, 10, 25]}
        />
      </Grid>
      <Grid item {...dashboardSectionBp}>
        <DataGrid
          autoHeight
          loading={isFetchingInventory}
          className="p-[15px] h-[350px]"
          rows={inventory?.items || []}
          columns={inventoryColumns}
          pagination
          slots={{
            loadingOverlay: LinearProgress,
            toolbar: DataGridToolbar,
          }}
          componentsProps={{
            toolbar: {
              hederTitle: "Inventory",
              onRefresh: () => refetchInventory(),
            },
          }}
          paginationModel={{
            pageSize: filters.inventory.limit,
            page: filters.inventory.page - 1,
          }}
          onPaginationModelChange={handlePagination("inventory")}
          pageSizeOptions={[5, 10, 25]}
        />
      </Grid>
    </Grid>
  );
};

export default memo(DashboardContent);
