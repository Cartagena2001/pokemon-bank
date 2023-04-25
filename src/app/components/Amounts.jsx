import React from 'react'
import DealButton from './DealButton'

const Amounts = ({TextButton, icon}) => {
  return (
    <section className="text-xl lg:text-5xl">
        <div className="flex justify-between mt-10">
          <div>
            <span className="text-pokeblue font-bold">$5</span>
          </div>
          <div>
            <span className="text-pokeblue font-bold">$10</span>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <span className="text-pokeblue font-bold">$25</span>
          </div>
          <div>
            <span className="text-pokeblue font-bold">$50</span>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <span className="text-pokeblue font-bold">$100</span>
          </div>
          <div>
            <span className="text-pokeblue font-bold">$150</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-10">
          <div>
            <span className="text-pokeblue font-bold">$200</span>
          </div>
          <div className="mt-10 lg:mt-0">
            <span className="text-pokeblue font-bold">
              ${" "}
              <input
                type="text"
                className="text-xl lg:text-5xl w-40 lg:w-80 lg:max-w-sm focus:outline-none"
                placeholder="Otra cantidad"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <DealButton text={TextButton} icon={icon}/>
        </div>
      </section>
  )
}

export default Amounts