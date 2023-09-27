import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [output, setOutput] = useState("");
  const [outputRet, setOutputRet] = useState("");

  const calculateCompoundInterest = () => {
    let value = parseInt(input1);
    let time = parseInt(input3);
    let interval = parseInt(input4);
    let percentage = parseFloat(input2 / input4);
    setOutput(
      (value * Math.pow(1 + percentage / 100, interval * time)).toFixed(2)
    );
  };

  const calculateSimpleInterest = () => {
    let value = parseInt(input1);
    let time = parseInt(input3 * input4);
    let interval = parseInt(input4);
    let percentage = parseFloat(input2 / input4);
    setOutput((value * (1 + (percentage / 100) * time)).toFixed(2));
  };

  const calculateFutureValue = () => {
    let value = parseInt(input1);
    let percentage = parseFloat(input2 / 100);
    let time = parseInt(input3);
    let interval = parseInt(input4);
    let period = percentage / interval;
    setOutput(
      ((value * (Math.pow(1 + period, interval * time) - 1)) / period).toFixed(
        2
      )
    );
  };

  const calculateRetirementFund = () => {
    let value = parseInt(input5);
    let percentage = parseFloat(input6 / 1200);
    let time = parseInt(input7 * 12);
    setOutputRet((value / (Math.pow(1 + percentage, time) - 1)).toFixed(2));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="400px"
      mx="auto"
      border="1px solid #ccc"
      borderRadius="8px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      sx={{ py: 4, px: 4 }}
    >
      <Typography variant="h5" gutterBottom>
        Compound Interest Calculator
      </Typography>
      <TextField
        fullWidth
        label="Amount"
        variant="outlined"
        type="number"
        value={input1}
        InputProps={{
          startAdornment: <InputAdornment position="start">R</InputAdornment>,
        }}
        onChange={(e) => setInput1(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Interest rate"
        variant="outlined"
        type="number"
        value={input2}
        InputProps={{
          endAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
        onChange={(e) => setInput2(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Duration of investement(Y)"
        variant="outlined"
        type="number"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        margin="normal"
      />
      <FormControl fullWidth variant="outlined" style={{ marginTop: "16px" }}>
        <InputLabel id="demo-simple-select-outlined-label">
          Interval of investment payment
        </InputLabel>
        <Select
          label="Interval of investment payment"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        >
          <MenuItem value={12}>Monthly</MenuItem>
          <MenuItem value={4}>Quarterly</MenuItem>
          <MenuItem value={2}>Bi-annually</MenuItem>
          <MenuItem value={1}>Annually</MenuItem>
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={calculateCompoundInterest}
          style={{ marginTop: "16px" }}
        >
          Compound interest
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateSimpleInterest}
          style={{ marginTop: "16px" }}
        >
          Simple interest
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateFutureValue}
          style={{ marginTop: "16px" }}
        >
          Future value
        </Button>
      </Box>

      <Typography variant="h6" style={{ marginTop: "16px" }}>
        Final amount: {output}
      </Typography>

      <p></p>
      <p></p>
      <Typography variant="h5" gutterBottom>
        Retirement Fund Calculator
      </Typography>
      <TextField
        fullWidth
        label="Desired monthly retirement income"
        variant="outlined"
        type="number"
        value={input5}
        InputProps={{
          startAdornment: <InputAdornment position="start">R</InputAdornment>,
        }}
        onChange={(e) => setInput5(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Interest rate"
        variant="outlined"
        type="number"
        value={input6}
        InputProps={{
          endAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
        onChange={(e) => setInput6(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Years till retirement"
        variant="outlined"
        type="number"
        value={input7}
        onChange={(e) => setInput7(e.target.value)}
        margin="normal"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          gap: 1,
        }}
      ></Box>
      <Button
        variant="contained"
        color="primary"
        onClick={calculateRetirementFund}
        style={{ marginTop: "16px" }}
      >
        Calculate monthly investment
      </Button>

      <Typography variant="h6" style={{ marginTop: "16px" }}>
        Necessary investement: {outputRet}
      </Typography>
    </Box>
  );
};

export default Calculator;
