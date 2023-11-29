import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Divider, Icon } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import BorderColorIcon from "@mui/icons-material/BorderColor";

const Item = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgb(215, 208, 255)",
  ...theme.typography.body1,
  padding: theme.spacing(.8),
  fontWeight: "400",
  color: "rgb(39, 24, 124)",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "none",

  "&::before": {
    content: '""', // Add an empty content property
    position: "absolute",
    top: 7,
    left: 15,
    height: "60%",
    width: "3px",
    backgroundColor: "rgb(39, 24, 124)",
    borderRadius: "2px",
  },

  paddingLeft: theme.spacing(5),
}));

const SubItem = styled(Paper)(({ theme }) => ({
  
  backgroundColor: "white",
  ...theme.typography.body1,
//   padding: theme.spacing(1),
  fontWeight: "500",
  color: "black",
  display: "flex",
  justifyContent: "space-between",
  boxShadow:"none"

  
}));


export default function Content() {

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [answers, setAnswers] = useState(Array(15).fill(null));

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };

   const handleCloseModal = () => {
     setIsModalOpen(false);
   };

   const handleRadioChange = (index, value) => {
     setAnswers((prevAnswers) => {
       const newAnswers = [...prevAnswers];
       newAnswers[index] = value;
       return newAnswers;
     });
   };

   const isFormValid = () => {
     return answers.every((answer) => answer !== null);
   };

   const handleSubmit = () => {
     if (isFormValid()) {
       console.log("Answers:", answers);
       handleCloseModal();
     } else {
       alert("Please answer all required questions before submitting.");
     }
   };

  const navigate = useNavigate();
   const handleRegister =() => {
      navigate("/register");
   }

   const questions = [
     "Salary System Based On Meritocracy",
     "120 Or More Annual Holidays",
     "Generous Welfare Benefits",
     "Enhanced Education And Training",
     "Support System For Acquiring Qualification",
     "Reduced Working Hours System",
     "Maternity Care Leave System",
     "Company Housing / Rent Subsidy",
     "Family Allowance",
     "Employee Stock Ownership",
     "Side Job Available",
     "Mentor System",
     "Career Consulting",
   ];

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      {/* dialog box for questions */}
      <div>
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Allowances</DialogTitle>
          <DialogContent>
            <form>
              {questions.map((question, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom:0,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{fontFamily:"roboto"}}>
                    <span style={{ color: "red", marginRight: "40px", fontSize:"25px", padding:"1px" }}>*</span>
                    {question}
                  </p>
                  <RadioGroup
                    row
                    value={answers[index]}
                    onChange={(e) => handleRadioChange(index, e.target.value)}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </div>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{
                  marginLeft: "46%",
                  backgroundColor: "rgb(39, 24, 124)",
                }}
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* main content */}

      <Stack spacing={3}>
        <Item>
          Corporate Information
          <button
            onClick={handleRegister}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              padding: "0px",
            }}
          >
            <BorderColorIcon
              sx={{ fontSize: "15px", padding: "4px", alignContent: "center" }}
            />
          </button>
        </Item>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "30px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Item>
              Allowances
              <button
                onClick={handleOpenModal}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  padding: "0px",
                }}
              >
                <BorderColorIcon
                  sx={{
                    fontSize: "15px",
                    padding: "4px",
                    alignContent: "center",
                  }}
                />
              </button>
            </Item>
          </Box>

          <Box sx={{ width: "50%" }}>
            <Item>
              Others
              <BorderColorIcon
                sx={{
                  fontSize: "15px",
                  padding: "4px",
                  alignContent: "center",
                }}
              />
            </Item>
            <SubItem sx={{ display: "flex", fontSize: "14px" }}>
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "rgb(247, 247, 247)",
                  paddingY: "7px",
                  paddingX: "30px",
                }}
              >
                Retention Rate Of New Graduate Hires
              </Box>
              <Box
                sx={{
                  width: "30%",
                  textAlign: "center",
                  paddingY: "7px",
                  fontWeight: "300",
                }}
              >
                Over 50%
              </Box>
            </SubItem>
            <Divider />
            <SubItem sx={{ display: "flex", fontSize: "14px" }}>
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "rgb(247, 247, 247)",
                  paddingY: "7px",
                  paddingX: "30px",
                }}
              >
                Work Style ( Overseas Bases )
              </Box>
              <Box
                sx={{
                  width: "30%",
                  textAlign: "center",
                  paddingY: "7px",
                  color: "green",
                  fontWeight: "300",
                }}
              >
                Yes
              </Box>
            </SubItem>
            <Divider />
            <SubItem sx={{ display: "flex", fontSize: "14px" }}>
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "rgb(247, 247, 247)",
                  paddingY: "7px",
                  paddingX: "30px",
                }}
              >
                Working Environment
              </Box>
              <Box
                sx={{
                  width: "30%",
                  textAlign: "center",
                  paddingY: "7px",
                  fontWeight: "300",
                }}
              >
                Not Working
              </Box>
            </SubItem>
            <Divider />
            <Item sx={{ marginTop: "26px" }}>
              Holidays{" "}
              <BorderColorIcon
                sx={{
                  fontSize: "15px",
                  padding: "4px",
                  alignContent: "center",
                }}
              />
            </Item>
            <SubItem sx={{ display: "flex", fontSize: "14px" }}>
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "rgb(247, 247, 247)",
                  paddingY: "7px",
                  paddingX: "30px",
                }}
              >
                Summer Holidays
              </Box>
              <Box
                sx={{
                  width: "30%",
                  textAlign: "center",
                  paddingY: "7px",
                  color: "green",
                  fontWeight: "300",
                }}
              >
                Yes
              </Box>
            </SubItem>
            <Divider />
            <SubItem sx={{ display: "flex", fontSize: "14px" }}>
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "rgb(247, 247, 247)",
                  paddingY: "7px",
                  paddingX: "30px",
                }}
              >
                Golden Weeks
              </Box>
              <Box
                sx={{
                  width: "30%",
                  textAlign: "center",
                  paddingY: "7px",
                  color: "green",
                  fontWeight: "300",
                }}
              >
                Yes
              </Box>
            </SubItem>
            <Divider />
            <SubItem sx={{ display: "flex", fontSize: "14px" }}>
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "rgb(247, 247, 247)",
                  paddingY: "7px",
                  paddingX: "30px",
                }}
              >
                Other Holidays
              </Box>
              <Box
                sx={{
                  width: "30%",
                  textAlign: "center",
                  paddingY: "7px",
                  color: "green",
                  fontWeight: "300",
                }}
              >
                Yes
              </Box>
            </SubItem>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
