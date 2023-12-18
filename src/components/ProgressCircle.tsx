import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";

interface Props {
  value: number;
}
const ProgressCircle = ({ value }: Props) => {
  return (
    <div>
      <CircularProgress size="lg" determinate value={value as number}>
        <Typography>{value}%</Typography>
      </CircularProgress>
    </div>
  );
};

export default ProgressCircle;
