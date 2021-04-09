function PhoneData({ phones, activePhone, setActivePhone }) {
  if (activePhone[0]) {
    let currentPhone;
    phones.forEach((element) => {
      if (element.id === activePhone[0]) {
        currentPhone = element;
      }
    });
    return (
      <div className="phone-data">
        <ul style={{ padding: "0 80px", background: "#f4f4f4" }}>
          <li
            style={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "bold",
              padding: "0px 80px",
              backgroundColor: "rgb(244, 244, 244)",
            }}
          >
            Phone information
          </li>
          <li>Brand: {currentPhone.brand}</li>
          <li>Model: {currentPhone.model}</li>
          <li>Memory: {currentPhone.memory}GB</li>
          <li>Screen Size: {currentPhone.screen_size}inch</li>
          <li>Color: {currentPhone.color}</li>
          <li>manufacture_year: {currentPhone.year}</li>
          <li>
            Dual SIM:{" "}
            {currentPhone.other_specs[0] ? "supported" : "not supported"}
          </li>
          <li>
            NFC: {currentPhone.other_specs[1] ? "supported" : "not supported"}
          </li>
          <li>
            4G: {currentPhone.other_specs[2] ? "supported" : "not supported"}
          </li>
        </ul>
      </div>
    );
  }
}

export default PhoneData;
