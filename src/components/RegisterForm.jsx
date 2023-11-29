import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const fields = [
  {
    id: "Company Name",
    value: "",
    error: false,
  },

  {
    id: "Industry",
    value: "",
    error: false,
  },
  {
    id: "Mail ID",
    value: "",
    error: false,
  },
  {
    id: "Phone Number",
    value: "",
    error: false,
  },
  {
    id: "Location",
    value: "",
    error: false,
  },
  {
    id: "Website",
    value: "",
    error: false,
  },
  {
    id: "Working Hours",
    value: "",
    error: false,
  },
  {
    id: "Establishment Date",
    value: "",
    error: false,
  },
  {
    id: "Initial Capital",
    value: "",
    error: false,
  },
  {
    id: "Representive",
    value: "",
    error: false,
  },
  {
    id: "Branch",
    value: "",
    error: false,
  },
  {
    id: "Number of Employees",
    value: "",
    error: false,
  },
  {
    id: "Sales Revenue",
    value: "",
    error: false,
  },
  {
    id: "Operation Profit",
    value: "",
    error: false,
  },
  
  

]; 

const fields2 = [
  {
    id: "Average Age of Employees",
    value: "",
    error: false,
  },
  {
    id: "Stock",
    value: "",
    error: false,
  },
  {
    id: "LinkedIn Link",
    value: "",
    error: false,
  },
  {
    id: "Twitter Link",
    value: "",
    error: false,
  },
  {
    id: "Facebook Link",
    value: "",
    error: false,
  },

  {
    id: "Instagram Link",
    value: "",
    error: false,
  },

  {
    id: "Youtube Link",
    value: "",
    error: false,
  },
];

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    textArea1: "",
    textArea2: "",
    fields,
    fields2
  });

  const handleChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      fields: prevData.fields.map((field) =>
        field.id === id ? { ...field, value, error: false } : field
      ),
    }));
  };

  const handleSave = () => {
    const isFormValid =
      formData.fields.every((field) => field.value.trim() !== "");

    if (isFormValid) {
      console.log("Form data saved:", formData);
    } else {

      setFormData((prevData) => ({
        ...prevData,
        fields: prevData.fields.map((field) =>
          field.value.trim() === "" ? { ...field, error: true } : field
        ),
      }));
    }
  };

  return (
    <Paper elevation={0} style={{ padding: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Business Description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            requi
            value={formData.textArea1}
            onChange={(e) =>
              setFormData({ ...formData, textArea1: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Corporate Philosophy"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={formData.textArea2}
            onChange={(e) =>
              setFormData({ ...formData, textArea2: e.target.value })
            }
          />
        </Grid>

        {formData.fields.map((field) => (
          <Grid item xs={4} key={field.id}>
            <TextField
              label={field.id}
              variant="outlined"
              fullWidth
              required
              error={field.error}
              helperText={field.error ? "Required" : ""}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          </Grid>
        ))}

        {formData.fields2.map((field) => (
          <Grid item xs={4} key={field.id}>
            <TextField
              label={field.id}
              variant="outlined"
              fullWidth
              error={field.error}
              helperText={field.error ? "Required" : ""}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          </Grid>
        ))}

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{ padding: "12px 60px", backgroundColor: "rgb(39, 24, 124)" }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterForm;
