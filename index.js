document.getElementById("lbsInput").addEventListener("input", (event) => {
  let lbsWeight = parseFloat(event.target.value)



  document.getElementById("gramsOutput").innerHTML = isNaN(lbsWeight) ? "" : (lbsWeight / (0.0022046)).toFixed(2)

  document.getElementById("kgOutput").innerHTML = isNaN(lbsWeight) ? "" : (lbsWeight / (0.0022046) / 1000).toFixed(2)

  document.getElementById("ouncesOutput").innerHTML = isNaN(lbsWeight) ? "" : (lbsWeight * 16.0).toFixed(2)

})