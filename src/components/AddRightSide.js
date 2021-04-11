function AddrightSide() {
  return (
    <div className="add-right-side">
      <span className="choices a-col">
        <span className="a-row">
          <input type="checkbox" name="dual-sim" id="duos" />
          <label for="duos">Dual Sim</label>
        </span>
        <span className="a-row">
          <input type="checkbox" name="nfc" id="nfc" />
          <label for="nfc">NFC</label>
        </span>
        <span className="a-row">
          <input type="checkbox" name="_4g" id="_4g" />
          <label for="_4g">4G</label>
        </span>
      </span>
      <span className="a-col">Screen</span>
      <span className="choices a-col">
        <span className="a-row">
          <input type="radio" name="the-screen" id="_4inch" value="4" checked />
          <label for="_4inch">4"</label>
        </span>
        <span className="a-row">
          <input type="radio" name="the-screen" id="_5inch" value="5" />
          <label for="_5inch">5"</label>
        </span>
        <span className="a-row">
          <input type="radio" name="the-screen" id="_6inch" value="6" />
          <label for="_6inch">6"</label>
        </span>
      </span>
      <span className="a-col">Color</span>
      <span className="choices a-col">
        <span className="a-row">
          <input type="radio" name="the-color" id="white" />
          <label for="white">White</label>
        </span>
        <span className="a-row">
          <input type="radio" name="the-color" id="black" checked />
          <label for="black">Black</label>
        </span>
        <span className="a-row">
          <input type="radio" name="the-color" id="gold" />
          <label for="gold">Gold</label>
        </span>
      </span>
    </div>
  );
}

export default AddrightSide;
