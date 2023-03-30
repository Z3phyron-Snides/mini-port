import Skeleton from "./Skeleton";

const App = () => {
  return (
    <Skeleton
      count={3}
      circle={true}
      width="50px"
      height="50px"
      borderRadius="25px"
      flexDirection="row"
      marginLeft="10px"
      marginTop="20px"
      alignItems="center"
      animation="wave"
    />
  );
};

export default App;
