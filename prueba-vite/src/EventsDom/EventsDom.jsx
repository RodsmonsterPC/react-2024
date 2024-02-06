const CallToAction = () => {
  const handleClick = () => {
    console.log("click en el boton");
  };

  const handleHover = () => {
    console.log("Hover en el boton");
  };

  const handleFocus = () => {
    alert("Focus");
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Mandaste info");
  };
  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <button type="button" onClick={handleClick}>
          Click me
        </button>
        ;
        <button type="button" onMouseOver={handleHover}>
          Hover me
        </button>
        ;
        <button type="button" onFocus={handleFocus}>
          Focus me
        </button>
        ;<button>Submit</button>
      </form>
    </>
  );
};

export default CallToAction;
