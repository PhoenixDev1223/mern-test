import { useState } from "react";
import { useDispatch } from "react-redux";
import { carAction } from "../redux/actions/carActions";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddCar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [sku, setSKU] = useState("");
    const [price, setPrice] = useState(0.0);

    const handleChange = (e) => {
        const value = e.target.value;
        if(e.target.name === "name") setName(value);
        else if(e.target.name === "model") setModel(value);
        else if(e.target.name === "sku") setSKU(value);
        else setPrice(value);
    }

    const handleSubmit = (e) => {
        dispatch(carAction.addCar(name, model, sku, price));
    }

    return (
        <>
            <div>
                <TextField 
                    size="small" 
                    label="Name" 
                    variant="outlined" 
                    name="name" 
                    sx={{ m: 1 }}
                    value={name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <TextField 
                    size="small" 
                    label="Model" 
                    variant="outlined" 
                    name="model" 
                    sx={{ m: 1 }}
                    value={model} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <TextField 
                    size="small" 
                    label="SKU" 
                    variant="outlined" 
                    name="sku" 
                    sx={{ m: 1 }}
                    value={sku} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <TextField
                    type="number" 
                    size="small" 
                    label="Price" 
                    variant="outlined" 
                    name="price" 
                    sx={{ m: 1 }}
                    value={price} 
                    onChange={handleChange} 
                />
            </div>
            <Button 
                variant="contained" 
                onClick={handleSubmit}
                sx={{ m: 1 }}
            >
                    Add
            </Button>
        </>
    );
}

export default AddCar;