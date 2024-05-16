import { Typography } from '@mui/material'
import React from 'react'

const FeatureCards = ({Scale, Title, Description, CTA} : {Scale : string, Title: string, Description: string, CTA : string}) => {
  return (
    <div className={`flex flex-col justify-around items-start max-w-[20vh] min-h-[25vh] scale-${Scale}  border-dark-amaranth_purple-700 rounded-lg`}>
        <Typography className='text-2xl font-bold text-dark-amaranth_purple-600'>
            {Title}
        </Typography>

        <Typography className='text-2xl font-bold text-dark-amaranth_purple-600'>
            {Description}
        </Typography>

        <button className='bg-dark-majorelle_blue px-4 py-2 rounded-md hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-br hover:from-dark-royal_purple-500 hover:via-dark-majorelle_blue-700 hover:to-dark-periwinkle-600 transition-all duration-300 ease-in-out font-semibold hover:font-bold'>
            {CTA}
        </button>
    </div>
  )
}

export default FeatureCards