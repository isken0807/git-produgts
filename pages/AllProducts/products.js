const data = [
    {
      id: 1,
      img: './img/imgi20.png',
      description: 'Seedra Cilantro Seeds for Planting Indoor and Outdoor',
      prise: '$12.56',
    },
    {
      id: 2,
      img: './img/imgi21.png',
      description:
        'SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting',
      prise: '$12.56',
    },
    {
      id: 3,
      img: './img/imgi22.png',
      description: 'SEEDRA Spinach Seeds for Indoor and Outdoor Planting',
      prise: '$12.56',
    },
    {
      id: 4,
      img: './img/imgi20.png',
      description: 'Seedra Cilantro Seeds for Planting Indoor and Outdoor',
      prise: '$12.56',
    },
    {
      id: 5,
      img: './img/imgi21.png',
      description:
        'SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting',
      prise: '$12.56',
    },
    {
      id: 6,
      img: './img/imgi22.png',
      description: 'SEEDRA Spinach Seeds for Indoor and Outdoor Planting',
      prise: '$12.56',
    },
  ]
  
  function showData(data) {
    const root = document.querySelector('#root')
  
    data.forEach(item => {
      const listItem = document.createElement('div')
      listItem.innerHTML = `
      <div class='w-[350px] border-2 border-[#EFEFEF] rounded-[8px] mt-[30px] relative p-[20px] hover:bg-red-500'>
        <img src=${item.img}>
        <p>${item.description}</p>
        <p>${item.prise}</p>
        <div class='w-[48px] h-[48px] rounded-[8px] border border-[#EFEFEF] flex justify-center items-center absolute bottom-[15px] right-[15px]'>
          <img src='./img/img6.png'>
        </div>
        <div class='w-[48px] h-[48px] rounded-[50%] bg-white border border-[#EFEFEF] flex justify-center items-center absolute top-[15px] right-[15px]'>
          <img src='./img/imgi23.png'>
        </div>
  
      </div>
      `
      root.appendChild(listItem)
    })
  }
  
  window.onload = function () {
    showData(data)
  }