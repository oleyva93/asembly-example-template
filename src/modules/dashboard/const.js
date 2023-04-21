import formatDate from "@/helpers/date";
import moment from "moment";

export const releasesColumns = [
  { field: "core_type", headerName: "Core Type", width: 200 },
  { field: "current_release", headerName: "Release", width: 200 },
  {
    field: "created_at",
    headerName: "Created Data",
    width: 250,
    valueFormatter: ({ value }) => formatDate(moment(value)),
  },
  {
    field: "updated_at",
    headerName: "Updated Data",
    width: 250,
    valueFormatter: ({ value }) => formatDate(moment(value)),
  },
];

export const inventoryColumns = [
  { field: "serial_number", headerName: "Serial Number", width: 200 },
  { field: "core_type", headerName: "Core Type", width: 200 },
  {
    field: "created_at",
    headerName: "Created Data",
    width: 250,
    valueFormatter: ({ value }) => formatDate(moment(value)),
  },
];
