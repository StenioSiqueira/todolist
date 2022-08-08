export const Button = (props) => {
  const {handle, tag} = props;
  return <button onClick={handle}>{tag}</button>;
};
