import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DataTable from "react-data-table-component";
import Paper from "@mui/material/Paper";
import SortIcon from "@mui/icons-material/ArrowDownward";
import "./Table.css";
import ListDialog from "./listDialog";
import "../.././../temp/cameraData.json";

const jsonArr = [
  {
    id: 1,
    location: "Entrance",
    maxCap: "63",
    camN: "Admi Parking A",
    ipAddr: "192.168.1.10",
  },
];

async function getChartData() {
  const response = await fetch("../.././../temp/cameraData.json");
  const { cameraJson } = await response.json();
  return cameraJson;
}

const cameraJson = getChartData();

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);
  const [newArr, setNewArr] = useState(jsonArr);
  const [editData, setEditData] = useState({});
  const [btnName, setBtnName] = useState("Add");
  // const [display, setDisplay] = useState(true);
  const columns = [
    {
      name: "Cam.No",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Editor",
      cell: (param) => addDropDown(param),
    },
    {
      name: "Cam Name",
      selector: (row) => row.camN,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Max Capacity",
      selector: (row) => row.maxCap,
      sortable: true,
    },
    {
      name: "IP Address",
      selector: (row) => row.ipAddr,
      sortable: true,
    },
  ];

  const handleClickOpen = () => {
    setBtnName("Add");
    setEditData({});
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleEdit = (data) => {
    console.log(data);

    setBtnName("Edit");
    setOpen(true);
    setEditData(data);
  };

  const addDropDown = (param) => {
    return (
      <>
        <Button variant="outlined" onClick={() => handleEdit(param)}>
          Edit
        </Button>
      </>
    );
  };
  const submitData = (newObj) => {
    var arr = newArr;
    if (btnName === "Edit") {
      const index = newArr.findIndex((object) => {
        return object.id === newObj.id;
      });

      if (index !== -1) {
        arr[index] = newObj;
      }
      setNewArr(arr);
    } else {
      let getNewIndex = arr.length + 1;
      newObj.id = getNewIndex;
      arr.push(newObj);
      setNewArr(arr);
    }
  };

  return (
    <div>
      {/* Number of active cameras */}
      <Typography
        className="container__h1"
        variant="subtitle1"
        component="div"
        fontSize={40}
      >
        Active Cameras : {newArr.length}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Cam
      </Button>
      <ListDialog
        buttonName={btnName}
        submitData={submitData}
        open={open}
        onClose={handleClose}
        editData={editData}
      />

      <Paper>
        <DataTable
          title="Camera Data"
          columns={columns}
          data={newArr}
          sortIcon={<SortIcon />}
          // pagination={true}
        />
      </Paper>
    </div>
  );
}
