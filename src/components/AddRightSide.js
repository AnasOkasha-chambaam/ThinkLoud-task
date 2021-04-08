function AddrightSide() {
  return (
    <div className="add-right-side">
      <span className="choices a-col">
        <input type="checkbox" name="dual-sim" id="duos" />
        <label for="duos">Dual Sim</label>

        <input type="checkbox" name="nfc" id="nfc" />
        <label for="nfc">NFC</label>

        <input type="checkbox" name="_4g" id="_4g" />
        <label for="_4g">4G</label>
      </span>
      <span className="a-col">Screen</span>
      <span className="choices a-col">
        <input type="radio" name="the-screen" id="_4inch" />
        <label for="_4inch">4"</label>

        <input type="radio" name="the-screen" id="_5inch" />
        <label for="_5inch">5"</label>

        <input type="radio" name="the-screen" id="_6inch" />
        <label for="_6inch">6"</label>
      </span>
      <span className="a-col">Color</span>
      <span className="choices a-col">
        <input type="radio" name="the-color" id="white" />
        <label for="white">4"</label>

        <input type="radio" name="the-color" id="black" />
        <label for="black">5"</label>

        <input type="radio" name="the-color" id="gold" />
        <label for="gold">6"</label>
      </span>
    </div>
  );
}

export default AddrightSide;
