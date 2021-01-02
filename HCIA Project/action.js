
  const api_url ='https://api.covidtracking.com/v1/us/current.json';     
  fetchData();
  async function fetchData(){
      const resposne =  await fetch(api_url);
      const data = await resposne.json();
      console.log(data);
      document.getElementById('death').textContent=numberWithCommas(data[0].death);
      document.getElementById('recovered').textContent=numberWithCommas(data[0].recovered);
      document.getElementById('postive').textContent=numberWithCommas(data[0].positive);
      
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }