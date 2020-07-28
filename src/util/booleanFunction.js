// const Auxiliary = (props) => props.children;

// export default Auxiliary;

const toBoolean = (x) => {
  try {
    return !!JSON.parse(`${x}`.toLowerCase());
  } catch (e) {
    return !!x;
  }
};

export default toBoolean;
