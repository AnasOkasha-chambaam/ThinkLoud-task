function AddLeftSide() {
  return (
    <div className="left-side">
      <label for="model">Model</label>
      <input type="text" id="model" placeholder="Samsung S6" required={true} />

      <label for="year">Manufacture Year</label>
      <input type="number" id="year" placeholder="2015" required={true} />

      <label for="brand">Brand</label>
      <select id="brand" defaultValue="samsung">
        <option value="nokia">Nokia</option>
        <option value="samsung">Samsung</option>
        <option value="apple">Apple</option>
        <option value="sony">Sony</option>
        <option value="lg">LG</option>
      </select>

      <label for="memory">Memory</label>
      <select id="memory" defaultValue="128">
        <option value="16">16 GB</option>
        <option value="128">128 GB</option>
        <option value="64">64 GB</option>
        <option value="32">32 GB</option>
      </select>
    </div>
  );
}

export default AddLeftSide;
