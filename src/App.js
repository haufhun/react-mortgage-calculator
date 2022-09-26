import { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { blue, green, purple } from "@mui/material/colors";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: green[500],
    // },
    // secondary: {
    //   main: blue[600],
    // },
    // background: {
    //   default: "#222",
    //   // text: {
    //   //   primary: "#fff",
    //   // },
    // },
  },
});

const calcs = (rate, amount, totalTerm) => {
  rate = parseFloat(rate);
  amount = parseFloat(amount);
  totalTerm = parseFloat(totalTerm);

  const periodInt = rate / 12 / 100;
  const monthlyPayment =
    amount * (periodInt / (1 - Math.pow(1 + periodInt, -totalTerm)));

  console.log(periodInt);
  console.log(monthlyPayment);
};

function createData(year, principal, interest, totalPaid, balance) {
  return { year, principal, interest, totalPaid, balance };
}

const rows = [
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
  createData(2022, 5893.48, 3652.46, 9545.94, 94106.52),
];

function App() {
  const [light, setLight] = useState(true);
  const [rate, setRate] = useState("5");
  const [amount, setAmount] = useState("100000");
  const [totalTerm, setTotalTerm] = useState("360");
  const [startDate, setStartDate] = useState();

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Container>
        <Stack spacing={10}>
          <Paper sx={{ padding: 3 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TextField
                label="Loan Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Interest Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Term"
                value={totalTerm}
                onChange={(e) => setTotalTerm(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">months</InputAdornment>
                  ),
                }}
              />
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2021-06-01"
                // sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button
                variant="contained"
                onClick={() => calcs(rate, amount, totalTerm)}
              >
                Calculate
              </Button>
            </Stack>
          </Paper>

          <Paper sx={{ padding: 3 }}>
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" color={blue[500]}>
                $1,060.66
              </Typography>
              <Typography variant="h6">Monthly Payment</Typography>
            </Stack>

            <hr />

            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              <Grid item xs={4}>
                <Typography variant="h6">$1,060.66</Typography>
                <Typography variant="body">Over 120 Payments</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">$1,060.66</Typography>
                <Typography variant="body">Total Interest</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">March 2052</Typography>
                <Typography variant="body">Pay-off Date</Typography>
              </Grid>
            </Grid>
          </Paper>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>Principal</TableCell>
                  <TableCell>Interest</TableCell>
                  <TableCell>Total Paid</TableCell>
                  <TableCell>Balance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.principal}</TableCell>
                    <TableCell>{row.interest}</TableCell>
                    <TableCell>{row.totalPaid}</TableCell>
                    <TableCell>{row.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
