"use client"

import style from './pages.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlusMinus, faDivide, faPercent, faXmark, faPlus, faMinus, faEquals, faCircle, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faA, faC } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';



export default function Home() {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 0]);

  const combinedString = numbers.join(""); // Gabungkan angka dalam array menjadi string

  const handleInput = () => {
    
  }

  console.log(combinedString)

  return (
    <main className="flex flex-col items-center justify-center m-8">
      <div className=' border-2 border-rose-500'>
      <NumberShow number={combinedString} />
        <div className='flex gap-3 flex-col'>
        <RowOne />
        <RowTwo />
        <RowThree />
        <RowFour />
        <RowFive />
        </div>
      </div>
    </main>
  )
}


const NumberShow = ({ number }: { number: string }) => {
  return (
    <div className='h-24 border-2 border-rose-500 mb-2 relative'>
      <h1 className='absolute bottom-0 right-0 m-2 font-bold font-sans text-2xl'>{number}</h1>
    </div>
  );
}

const RowOne = () => {
  return (
    <div className="flex flex-row justify-between w-full gap-2">
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faA} width={12}/><FontAwesomeIcon icon={faC} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faPlusMinus} width={17} /></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faPercent} width={17} /></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faDivide} width={17} /></div>
    </div>
  )
}

const RowTwo = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa7} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa8} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa9} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faXmark} width={17} /></div>
    </div>
  )
}

const RowThree = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa4} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa5} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa6} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faMinus} width={17} /></div>
    </div>
  )
}

const RowFour = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa1} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa2} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa3} width={12}/></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faPlus} width={17} /></div>
    </div>
  )
}

const RowFive = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className={`${style.number} rounded-full w-40 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={fa0} width={12}/></div>
      {/* <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}>02</div> */}
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center relative `}><FontAwesomeIcon className='absolute bottom-7' icon={faCircle} width={7} /></div>
      <div className={`${style.number} rounded-full w-20 h-20 flex items-center justify-center`}><FontAwesomeIcon icon={faEquals} width={17} /></div>
    </div>
  )
}