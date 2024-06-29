import { ThreeDots } from "react-loader-spinner";

export default function ThreeDotsLoading() {
  return (
    <ThreeDots
      height="30"
      width="50"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
}