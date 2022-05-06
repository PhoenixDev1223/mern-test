import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { carAction } from "../redux/actions/carActions";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

const CarList = () => {
    const cars = useSelector(state => state.car.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carAction.carList());
    }, [dispatch]);

    const createData = ( index, name, model, sku, price, id) => {
        return { index, name, model, sku, price, id };
    }
      
    const rows = cars.map((car, index) => (
        createData(index + 1, car.name, car.model, car.sku, car.price, car._id)
    ));

    const handleDelete = (id) => { dispatch(carAction.deleteCar(id)); }
    
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minwidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>PRICE</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.index}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                    <Button 
                        color="error" 
                        variant="contained"
                        onClick={() => handleDelete(row.id)}
                    >
                        Delete
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default CarList;