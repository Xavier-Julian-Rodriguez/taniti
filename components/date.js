import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function ResponsiveDatePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDatePicker"]}>
        <DemoItem label="Departure">
          <MobileDatePicker defaultValue={dayjs()} />
        </DemoItem>
        <DemoItem label="Return">
          <MobileDatePicker defaultValue={dayjs()} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
