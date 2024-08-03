import React from 'react'

const Homepage = () => {
  return (
    <div>
    <div className='pt-40'>
    <h1>Bem vindo ao Help_state, onde você pode ajudar o mundo.</h1>
</div>
    <div className='pt-20 flex justify-center'>
        <div id='Cartões' className='space-y-10 pt-10'>
      <div>
      <div className=" w-96 shadow-xl border-4 border-black bg-white rounded ">
  <figure>
    <img
      src="./public/report.svg"
      alt="reports" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Verificar ocorrências ativas</h2>
    <p>Verifique municipios disponíveis em seu estado</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Verificar</button>
    </div>
  </div>
</div>
      </div>

{/* Final card 1 */}

<div>
      <div className=" w-96 shadow-xl border-4 border-black bg-white rounded ">
  <figure>
    <img
      src="https://s4.static.brasilescola.uol.com.br/be/2021/05/cidade-sp.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Verificar Estados disponíveis</h2>
    <p>Verifique estados disponíveis</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Verificar</button>
    </div>
  </div>
</div>
      </div>


      </div>
      
      
    </div>
    </div>
  )
}

export default Homepage
