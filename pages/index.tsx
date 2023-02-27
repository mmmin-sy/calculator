import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CalculatorContainer from '@components/CalculatorContainer/CalculatorContainer';

const Home: NextPage = () => {
  return (
    <div>
      <CalculatorContainer />
    </div>
  )
}

export default Home
