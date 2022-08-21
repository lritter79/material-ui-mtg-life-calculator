import { SelectProps } from "@mui/material";
import DieInterface from "./DieInterface";


export default interface IDieSelectorProps extends SelectProps {
    value?: number
    defaultValue?: number
}