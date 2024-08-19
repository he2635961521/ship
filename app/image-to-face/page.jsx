import React from 'react';
import ButtonSignin from "@/components/ButtonSignin";
import { Tabs } from 'antd';
import AddImage from '../../myc/add-image';
import AddVideo from '../../myc/add-vedio';

export default function ImageToFace() {
  const tabItems = [
    {
      label: 'image',
      key: '1',
      children: <AddImage/>,
    },
    {
      label: 'video',
      key: '2',
      children: <AddVideo/>,
    },
    {
      label: 'todos',
      key: '3',
      children: null,
      disabled: true,
    }
  ]

  return (
  <>
    <header className="p-4 flex justify-end max-w-7xl mx-auto">
      <ButtonSignin text="Login" />
    </header>
    <main className='flex items-center flex-col'>
      <h1 className='text-center text-5xl font-medium mt-4'>Free Face Swap Online</h1>

      <h2 className='text-center text-xl text-gray-500 mt-4'>Experience fun or real swaps: select single, multiple, or video face swap. Upload to start!</h2>

      <Tabs className='mt-4' items={tabItems}></Tabs>
    </main>
  </>
  )
}
