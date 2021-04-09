function AddLeftSide() {
  return (
    <div className="left-side">
      <label for="model">Model</label>
      <input type="text" id="model" placeholder="Samsung S6" />

      <label for="year">Manufacture Year</label>
      <input type="text" id="year" placeholder="Samsung S6" />

      <label for="brand">Model</label>
      <select id="brand" defaultValue="samsung">
        <option value="nokia">Nokia</option>
        <option value="samsung">Samsung</option>
        <option value="apple">Apple</option>
        <option value="sony">Sony</option>
      </select>

      <label for="memory">Memory</label>
      <select id="memory" defaultValue="128">
        <option value="16">8 GB</option>
        <option value="128">128 GB</option>
        <option value="64">64 GB</option>
        <option value="32">32 GB</option>
      </select>
    </div>
  );
}

export default AddLeftSide;
