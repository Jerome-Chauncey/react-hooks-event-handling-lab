// Code Keypad Component Here

function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
  }
  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password .."
      />
    </div>
  );
}

export default Keypad;
